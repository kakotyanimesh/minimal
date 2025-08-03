// import { SignupTypes } from "../config/user.config";

// export const createUser = async (input: SignupTypes) => {
//     try {
//         const res = await fetch("/api/auth/signup", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(input),
//         });

//         const data = await res.json();
        

//         if (!res.ok) {
//             throw new Error(data.msg)
//         }

//         return {
//             success: true,
//             message: data.message,
//             status: 201,
//         };
//     } catch (error) {
        

//         const msg = error.message
           
        
//         return {
//             message: msg,
//             success: false,
//         };
//     }
// };
