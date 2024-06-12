"use server"

import { cookies } from "next/headers"

export default async function crsfToken () {

        const res = await cookies()
        console.log(res)
        const csrfTokenValue = res.get('authjs.csrf-token').value
        //const csrfToken = csrfTokenValue.replace(/[|]/g , "%")
        const csrfToken = csrfTokenValue.split(/[|]/g)[0]

        return csrfToken
}