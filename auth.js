import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials"
import { use } from "react"

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
            console.log('data', data)

            //const user = data.data

            const user = {
                id: data.data.id, 
                email: data.data.email, 
                token: data.data.token, 
                nicename: data.data.nicename,
                displayName: data.data.displayName,
                firstName: data.data.firstName,
                lastName: data.data.lastName
            }

            //console.log('autorize', user)

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
        async signIn({user}) {
            if(user.id) {
                return true
            }
            return false
        },
        async jwt({ token, user, account, profile }) {

        if (account && user) {
            return {
            ...token,
            accessToken: user.token,
            refreshToken: user.refreshToken,
            id: user.id,
            displayName: user.displayName
            };
        }

        return token; 
        },

       async session({ session, token, user }) {

        if(session?.user) {
            session.user.accessToken = token.accessToken;
            session.user.id = token.id
            session.user.displayName = token.displayName
        }
            
        return session;
        }, 
    },
})