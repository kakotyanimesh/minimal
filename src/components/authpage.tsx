"use client";
import { useTransition } from "react";
import { Logo } from "./logo";
import { Button } from "./ui/Button";
import { Google } from "./ui/icon/google";
import { Instagram } from "./ui/icon/instagram";
import { Twitter } from "./ui/icon/twitter";
import { Input } from "./ui/input";
import { createUser } from "@/app/actions/user.action";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { motion } from "motion/react";
import Link from "next/link";

export const AuthPage = ({ type }: { type: "signin" | "register" }) => {
    const lognin = type === "signin";
    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    const svgMotionVariants = {
        initial: { opacity: 0, scale: 0.9 },

        whileInView: { opacity: 1, scale: 1 },
        transition: { ease: "easeOut", delay: 0.1 },
    };

    const motionVariants = {
        initial: {
            y: 7,
            opacity: 0,
            filter: "blur(4px)",
        },
        animate: {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
        },
        transition: {
            ease: "easeOut",
            // duration: 0.6,
        },
    };

    const handleSubmit = (formdata: FormData) => {
        const toaster = toast.loading("submitting your");
        startTransition(async () => {
            const email = formdata.get("email") as string;
            const password = formdata.get("password") as string;

            if (lognin) {
                const signinres = await signIn("credentials", {
                    email,
                    password,
                    redirect: false,
                });

                if (signinres.error) {
                    toast.error("Invalid password or email", {
                        id: toaster,
                    });
                    return;
                }

                toast.success("Welcome back", {
                    id : toaster
                })

                router.push("/dashboard");
            } else {
                const res = await createUser({ email, password });

                if (!res.success) {
                    toast.error(res.message, {
                        id: toaster,
                    });
                } else {
                    toast.success(res.message, {
                        id: toaster,
                    });
                    router.push("/signin");
                }
            }
        });
    };

    return (
        <div className='flex flex-col justify-center items-center mt-10 space-y-10'>
            <Logo className='text-4xl' />
            <div className='relative'>
                <Instagram
                    initial='initial'
                    whileInView='whileInView'
                    variants={svgMotionVariants}
                    className='size-12 rotate-12 -top-4 -right-5 blur-[1px] absolute'
                />
                <Twitter
                    initial='initial'
                    whileInView='whileInView'
                    variants={svgMotionVariants}
                    className='fill-primary size-9 absolute -rotate-12 -left-5 -top-4'
                />


                <motion.div
                    className='bg-foreground/9 md:px-10 px-5 py-7 text-center w-fit backdrop-blur-sm isolate'
                    initial='initial'
                    animate='animate'
                    variants={motionVariants}>
                    <h1 className='text-xl font-semibold'>
                        {lognin
                            ? "let's Vibe Again"
                            : "let’s make something cool"}
                    </h1>

                    <form
                        action={handleSubmit}
                        className='lg:w-96 w-66 space-y-4'>
                        <div className='text-left'>
                            <label
                                className='text-xs font-bold'
                                htmlFor='email'>
                                Email
                            </label>
                            <Input
                                autoComplete='email'
                                required
                                disabled={isPending}
                                placeholder='animesh@gmail.com'
                                name='email'
                                type='email'
                                maxLength={50}
                            />
                        </div>
                        <div className='text-left'>
                            <label
                                className='text-xs font-bold'
                                htmlFor='password'>
                                Password
                            </label>
                            <Input
                                autoComplete='password'
                                maxLength={100}
                                required
                                placeholder='Password@55ff'
                                disabled={isPending}
                                name='password'
                                type='password'
                            />
                        </div>
                        <Button
                            className='w-full'
                            variant={"primary"}
                            disabled={isPending}>
                            {lognin ? "Log in with email" : "Sign Up"}
                        </Button>
                        <div className='flex flex-row items-center'>
                            <div className='flex-1 bg-foreground/20 h-px' />
                            <span className='text-foreground mx-2 text-xs font-bold'>
                                Or
                            </span>
                            <div className='flex-1 bg-foreground/20 h-px' />
                        </div>
                    </form>

                    <div className='flex flex-col gap-2 mt-5'>
                        <SocialButton Sname='Google' disabled={isPending} />
                    </div>

                    <h1 className='text-xs font-bold mt-5 text-foreground'>
                        {!lognin
                            ? "Already have an account? "
                            : "Don't have an account? "}
                        <Link
                            href={lognin ? "signup" : "signin"}
                            className='hover:underline underline-offset-2 text-beige'>
                            {lognin ? "Sign up" : "Log in"}{" "}
                        </Link>
                    </h1>
                </motion.div>
            </div>
        </div>
    );
};

const SocialButton = ({
    Sname,
    disabled,
}: {
    Sname: "Google" | "Instagram" | "Twitter";
    disabled: boolean;
}) => {
    const socialLogIn = async () => {
        await signIn("google", { callbackUrl: "/dashboard" });
    };
    return (
        <Button
            disabled={disabled}
            onClick={socialLogIn}
            type='button'
            className='w-66 lg:w-96 flex flex-row items-center justify-center gap-2'
            variant={"secondary"}>
            {Sname === "Google" ? (
                <Google />
            ) : Sname === "Instagram" ? (
                <Instagram />
            ) : (
                <Twitter />
            )}
            Continue with {Sname}
        </Button>
    );
};
