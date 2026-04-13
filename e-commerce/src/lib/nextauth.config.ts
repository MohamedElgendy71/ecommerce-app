import { NextAuthOptions } from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const nextAuthConfig: NextAuthOptions = {
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {}
            },

            async authorize(credentials, req) {
                const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signin", {
                    body: JSON.stringify(credentials),
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                
                const finalRes = await res.json()
                console.log("finalRes :", finalRes);

                if (finalRes.message === "success") {
                    // التعديل هنا: أضفنا id وعملنا cast للـ Object بـ 'any' عشان يتخطى التعارض
                    return {
                        id: finalRes.user._id || finalRes.user.id || "1", // NextAuth لازم يشوف id
                        name: finalRes.user.name,
                        email: finalRes.user.email,
                        realTokenFromBackEnd: finalRes.token
                    } as any;
                }

                return null
            },
        })
    ],

    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                // بننقل التوكن من اليوزر للـ token اللي هيتخزن في الكوكيز
                token.realTokenFromBackEnd = (user as any).realTokenFromBackEnd
            }
            return token
        },

        async session({ session, token }) {
            // بننقل التوكن من الـ token للـ session عشان تقدر تشوفه في الفرونت إند
            if (session.user) {
                (session as any).realTokenFromBackEnd = token.realTokenFromBackEnd
            }
            return session
        },
    },

    pages: {
        signIn: "/login"
    },

    // تأكد إنك مسمي المتغير ده صح في الـ .env
    secret : process.env.BETTER_AUTH_SECRET 
}