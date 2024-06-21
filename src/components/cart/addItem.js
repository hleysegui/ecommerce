import { AppContext } from "@/context";
import { AddItemToCart } from "@/utils/cart/addItemToCart";
import postItem from "@/utils/cart/api-add-item";
import { isEmpty } from "lodash";
import React, { useContext, useEffect, useState } from "react";


export const AddItem = ({product}) => {

    const [ cart, setCart ] = useContext(AppContext) 
    const [ isAddedToCart, setIsAddedToCart ] = useState(false)
    const [ loading, setLoading ] = useState(false)

    if(isEmpty(product)) { return null }

    return (
       <>  
           <form action={AddItemToCart}>
                <input defaultValue={product.id} name="productId" type="hidden"></input>
                <button type="submit">add</button>
            </form>
        </>
    )

}

export default AddItem