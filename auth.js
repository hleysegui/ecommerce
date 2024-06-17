import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials"
import { use } from "react"
import { headers } from "next/headers"

export const { handlers, signIn, signOut, auth } = NextAuth({
    secret: process.env.AUTH_SECRET,
    debug: process.env.NODE_ENV === 'development',
    pages: {
        signIn: '/signIn'    
    },
    providers: [
    GitHub({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET
    }), 
    Credentials({
        credentials: {
            username: {},
            password: {},
        },
        async authorize(credentials, req) {

            const userData = {
                username: credentials.username,
                password: credentials.password,
            }

            const res = await fetch("http://localhost:8888/ecommerce/backend/wp-json/jwt-auth/v1/token", {
                method: 'POST',
                body: JSON.stringify(userData),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await res.json()

            const user = data.data

            if(!res.ok) {
                throw new Error(user.message)
            }

            if(res.ok && user) {
                return user
            }

            return null 
            
        }
    })
],
    callbacks: {
        async jwt({ token, user, account, profile }) {
        if (account && user) {
            return {
            ...token,
            accessToken: user.token,
            refreshToken: user.refreshToken,
            };
        }

        return token; 
        },

       async session({ session, token }) {
        if(session?.user) {
            session.user.accessToken = token.accessToken;
        }
        //session.user.userId = user.userId
            
        return session;
        }, 
    },
})