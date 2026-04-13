import { NextAuthOptions } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { email } from "zod"

export const nextAuthConfig: NextAuthOptions = {

    providers: [
        Credentials({

            credentials: {
                email: {},
                password: {}
            },

          async  authorize(credentials, req) {


                const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signin", {
                    body: JSON.stringify(credentials),
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                const finalRes = await res.json()
                console.log("finalRes :", finalRes);

                if (finalRes.message == "success") {
                    return{
                        name: finalRes.user.name,
                        email: finalRes.user.email,
                        realTokenFromBackEnd: finalRes.token
                    }
                }

                return null
            },

        })


    ],


    callbacks: {
        jwt(params) {

            if (params.user) {
                
                params.token.realTokenFromBackEnd = params.user.realTokenFromBackEnd
            }
            
            console.log("params from jwt" ,params);

            return params.token
            

        },

        session(params) {

            console.log("params from session",params);
            
            
            return params.session
        },
        
    },


pages: {
    signIn : "/login"
},

secret : process.env.BETTER_AUTH_SECRET

}