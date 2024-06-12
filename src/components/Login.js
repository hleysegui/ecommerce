"use client"

import React, { useRef } from "react";
import Props from 'prop-types';
import Link from "next/link";
import { signIn } from "next-auth/react";

const Login = (props) => {

    const userName = useRef("")
    const pass = useRef("")


    const onSubmit = async (e) => {
        e.preventDefault()

        console.log(userName)
        console.log(pass)

       const res = await signIn("credentials", {
            username: "ashlub",
            password: "azerty123456!",
            redirect: true,
            callbackUrl: props.callbackUrl ?? "http://localhost:3000"
        }) 
    }

    return (
        <div>
            <div>
                Login form 
            </div>
            <form onClick={onSubmit} >
                    <label>
                        Username
                        <input name="username" ref={userName}  type="text" />
                    </label>
                    <label>
                        Password
                        <input name="password" ref={pass} type="password" />
                    </label>
                
       
                    <button type="submit">Sign in</button>
                    <Link href={props.callbackUrl ?? "/"}> Cancel</Link>
             
            </form> 
        </div>
    )
}

Login.props = {
    callbackUrl: Props.string
}



export default Login