"use client";
import { useTransition } from "react";
import { Logo } from "./logo";
import { Button } from "./ui/Button";
import { Google } from "./ui/icon/google";
import { Instagram } from "./ui/icon/instagram";
import { Twitter } from "./ui/icon/twitter";
import { Input } from "./ui/input";
import { LinkTag } from "./ui/link";

export const AuthPage = ({ type }: { type: "signin" | "register" }) => {
    const lognin = type === "signin";
    const [isPending, startTransition] = useTransition();

    const handleSubmit = () => {
        startTransition(async () => {
            alert("hii")
        });
    };

    return (
        <div className='flex flex-col justify-center items-center mt-4 '>
            <Logo />
            {/* <h1 className="text-[hsl(var(--background))]">anims</h1> */}
            <div className='bg-primary/10  lg:w-[70vw] md:w-[80vw] w-[90vw] px-10 py-4 justify-items-center'>
                <h1 className='text-xl font-semibold'>
                    {lognin ? "let's Vibe Again" : "let’s make something cool"}
                </h1>

                <form
                    action={handleSubmit}
                    className='xl:w-96 lg:w-80 w-66 space-y-4'>
                    <div className='text-left'>
                        {!lognin && (
                            <>
                                <label
                                    className='text-xs font-black'
                                    htmlFor='username'>
                                    username
                                </label>
                                <Input
                                    autoComplete='username'
                                    required
                                    disabled={isPending}
                                    placeholder='username'
                                    name='username'
                                    type='text'
                                />
                            </>
                        )}
                        <label className='text-xs font-bold' htmlFor='email'>
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
                        <label className='text-xs font-bold' htmlFor='password'>
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

                <div className='flex flex-col w-96 gap-2 mt-5'>
                    <SocialButton Sname='Google' disabled={isPending} />
                    <SocialButton Sname='Instagram' disabled={isPending} />
                    <SocialButton Sname='Twitter' disabled={isPending} />
                </div>

                <h1 className='text-xs font-bold mt-5 text-primary-foreground/50'>
                    {!lognin
                        ? "Already have an account? "
                        : "Don't have an account? "}
                    <LinkTag
                        intent={"secondary"}
                        className='text-xs'
                        href={lognin ? "signup" : "signin"}>
                        {lognin ? "Sign up" : "Log in"}
                    </LinkTag>
                </h1>
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
        
    };
    return (
        <Button
            disabled={disabled}
            onClick={socialLogIn}
            type='button'
            className='w-full flex flex-row items-center justify-center gap-2'
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
