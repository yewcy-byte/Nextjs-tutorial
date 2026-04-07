import Link from "next/link";





export default function products(){

    const productId = 100;
    return <>
    
    <h1>All Products</h1>
    <h2>
<Link href="/product/1">Product 1</Link>

    </h2>

<h2>
<Link href="/product/2">Product 2</Link>

    </h2>
<h2>
<Link href="/product/3" replace /*jump straight to home*/>Product 3</Link>

    </h2>

    <h2>
<Link href={`product/${productId}`}>Product {productId}</Link>

    </h2>


<Link href="/">Home</Link>

</>
}