import Image from "next/image";
import styles from "./page.module.css";
import { auth } from "../../auth";
import SigninButton from "@/components/SigninButton";
import Products from "@/components/products";
import { getProductsData } from "@/utils/wc-get-products";

export default async function Home({products}) {

  products = await getProductsData()

  return (
    <>
    <div>
      <SigninButton/>
    </div>
    <main>
      <div>
        <p>Liste des produits : </p>
        <Products products={products}/>
      </div>
    </main>
    
    </>
  )
}

