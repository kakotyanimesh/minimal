/**
 * this folder or file is going to contain all the backend logics that we can call from both api route and server actions
 */

import bcrypt from "bcryptjs";
import { SignupTypes } from "../config/user.config";
import prisma from "../prisma";


export const signup = async (data: SignupTypes) => {
    const hasedPassword = await bcrypt.hash(data.password, 12)
    return prisma.user.create({
        data : {
            email : data.email,
            password : hasedPassword,
            account : {
                create : {
                    providerType : "email",
                    providerId : data.email
                }
            }
        },
    })
};