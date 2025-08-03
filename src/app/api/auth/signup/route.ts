import { signupObject } from "@/lib/config/user.config";
import { handleError } from "@/lib/error";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const parseddata = signupObject.safeParse(await req.json());
        if (!parseddata.success) {
            throw parseddata.error;
        }

        const { email, password } = parseddata.data

        const hasedPassword = await bcrypt.hash(password, 10)

        await prisma.user.create({
            data : {
                email,
                password : hasedPassword,
                account : {
                    create : {
                        providerId : email,
                        providerType : "oauth"
                    }
                }
            }
        })

        return NextResponse.json({ message: "user created" }, { status: 201 });
    } catch (error) {
        
        const err = handleError(error);

        return NextResponse.json({ message: err.message }, { status: err.status });
    }
}
