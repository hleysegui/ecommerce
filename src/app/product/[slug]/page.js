// Return a list of `params` to populate the [slug] dynamic segment
import ProductDetails from "@/components/products/ProductDetails"
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"

const api = new WooCommerceRestApi({
    url: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL,
    consumerKey: process.env.WC_CONSUMER_KEY,
    consumerSecret: process.env.WC_CONSUMER_SECRET,
    version: "wc/v3"
})

export async function generateStaticParams() {

  const products = await api.get('products')

  return products.data.map((product) => ({
    slug: product.slug
  }))

}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default async function ProductPage({ params }) {

  const { slug } = params

  const data = await getProduct(slug)
  
  return (
   <div>
      <p key={data.data.id}>Informations produit : {data.data[0].id} {data.data[0].slug} {data.data[0].date_created}</p>
   </div>
    
  )
}

async function getProduct(slug) {
  const res = await api.get(`products/?slug=${slug}`)

  return res
}