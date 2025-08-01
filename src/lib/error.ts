import z from "zod";
import { PrismaClientKnownRequestError } from "@/generated/prisma/runtime/library";

type ErrorRespone = {
    status: number;
    message: string;
};

export const handleError = (error: unknown): ErrorRespone => {
    if (error instanceof z.ZodError) {
        return {
            status: 400,
            message: `Invalid Inputs : ${z.prettifyError(error)}`,
        };
    }

    if (error instanceof PrismaClientKnownRequestError) {
        switch (error.code) {
            case "P2002":
                const targetField = (
                    error.meta?.target as string[] | undefined
                )?.join(",  ");
                return {
                    status: 409,
                    message: `Oops 😬 That ${targetField} is already taken. Try being a bit more original 👀`,
                };

            case "P2025":
                return {
                    status: 404,
                    message: "Record Not found",
                };
            default:
                return {
                    status: 500,
                    message: "Database is Down , Please Try again Later",
                };
        }
    }
    return {
        status: 500,
        message: "An Unexpected Error Occured",
    };
};
