import { signupObject } from "@/lib/config/user.config";
import { signup } from "@/lib/data/user";
import { handleError } from "@/lib/error";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const parseddata = signupObject.safeParse(await req.json());
        if (!parseddata.success) {
            throw parseddata.error;
        }

        await signup(parseddata.data);

        return NextResponse.json({ msg: "user created" }, { status: 201 });
    } catch (error) {
        const err = handleError(error);

        return NextResponse.json({ msg: err.message }, { status: err.status });
    }
}
