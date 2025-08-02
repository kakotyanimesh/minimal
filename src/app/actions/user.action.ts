'use server'

import { signupObject, SignupTypes } from "@/lib/config/user.config"
import { signup } from "@/lib/data/user"
import { handleError } from "@/lib/error"

export const createUser = async (data : SignupTypes) => {
    try {
        const parseddata = signupObject.safeParse(data)

        if(!parseddata.success){
            throw parseddata.error
        }

        await signup(parseddata.data)

        return {
            success : true,
            message : "User Created successfully"
        }
    } catch (error) {
        
        const err = handleError(error)
        return {
            success : false,
            message : err.message,
            status : err.status
        }
    }
}