import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function getMyToken() {


  const myCookies = await cookies()

  const tokenFromCookies =
    myCookies.get("next-auth.session-token")?.value ||
    myCookies.get("__Secure-next-auth.session-token")?.value

    if (tokenFromCookies == null) {

      return null
      
    }

  const myTokenAfterDecoded = await decode({
    token: tokenFromCookies ,
    secret: process.env.BETTER_AUTH_SECRET!
  })

  

  console.log("myTokenAfterDecoded", myTokenAfterDecoded);
  console.log("realTokenFromBackEnd", myTokenAfterDecoded?.realTokenFromBackEnd);

  return myTokenAfterDecoded?.realTokenFromBackEnd || null

}