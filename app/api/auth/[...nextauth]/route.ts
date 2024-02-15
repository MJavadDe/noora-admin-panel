import NextAuth from "next-auth/next"
import { authOptions } from "./config"

const configure = NextAuth(authOptions)

export {configure as GET,configure as POST}