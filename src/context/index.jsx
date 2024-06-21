"use client"
import { createContext, useContext, useEffect, useMemo, useState } from "react";

export const AppContext = createContext([
    {},
    () => {}
])

export function AppWrapper({children}) {

    const [cart, setCart] = useState(null)

    useEffect(() => {
        if(process.browser) {
            let shoppingCart = window.localStorage.getItem("cart")
            shoppingCart = null != shoppingCart ? JSON.stringify(shoppingCart) : ''
            setCart(cart)
        }
    })

    useEffect(() => {
        if(process.browser) {
            window.localStorage.setItem("cart", JSON.stringify(cart))
        }
    }, [cart])

    return (
        <AppContext.Provider value={[cart, setCart]}>
            {children}
        </AppContext.Provider>
    )
}

/* export function useAppContext() {
    return useContext(AppContext)
} */