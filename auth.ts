import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { signinObject } from "@/lib/config/user.config";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

export const { handlers, signIn, auth, signOut } = NextAuth({
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        Credentials({
            name: "email password",
            credentials: {
                email: {
                    label: "email",
                    placeholder: "example@example.com",
                    type: "email",
                },
                password: {
                    label: "password",
                    placeholder: "your password here",
                    type: "password",
                },
            },
            authorize: async (credentials) => {
                if (!credentials.password && !credentials.email) {
                    return null;
                }
                try {
                    const parseddata = signinObject.safeParse(credentials);
                    if (!parseddata.success) {
                        return null;
                    }

                    const existingUser = await prisma.user.findUnique({
                        where: {
                            email: parseddata.data.email,
                        },
                        omit: { password: false },
                    });

                    if (!existingUser) return null;

                    const comparePassword = await bcrypt.compare(
                        parseddata.data.password,
                        existingUser.password as string
                    );

                    if (!comparePassword) return null;

                    return {
                        id: existingUser.id,
                        email: existingUser.email,
                    };
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                } catch (error) {
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        async signIn({ profile, account }) {
            if (account?.provider === "google") {
                if (!profile?.email_verified) {
                    return false;
                }

                try {
                    const user = await prisma.user.findUnique({
                        where: {
                            email: profile.email!,
                        },
                    });

                    if (!user) {
                        await prisma.user.create({
                            data: {
                                email: profile.email!,
                                account: {
                                    create: {
                                        providerId: account.providerAccountId,
                                        providerType: "oauth",
                                    },
                                },
                            },
                        });
                    } else {
                        await prisma.account.upsert({
                            where: {
                                providerId_providerType: {
                                    providerId: account.providerAccountId,
                                    providerType: "oauth",
                                },
                            },
                            update: {},
                            create: {
                                providerId: account.providerAccountId,
                                providerType: "oauth",
                                user: {
                                    connect: {
                                        email: profile.email!,
                                    },
                                },
                            },
                        });
                    }
                    return true;
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                } catch (error) {
                    return false;
                }
            }
            return true;
        },
        async jwt({ user, token }) {
            if (user) {
                token.email = user.email;
                token.sub = user.id;
            }
            return token;
        },
        async session({ token, session }) {
            if (token.sub) {
                session.user.email = token.email as string;
                session.user.id = token.sub;
            }
            return session;
        },
    },
    secret: process.env.AUTH_SECRET,
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/signin",
    },
});
