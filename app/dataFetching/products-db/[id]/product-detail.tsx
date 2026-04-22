"use client";

import { getProducts } from "@/app/dataFetching/prisma-db";
import Link from "next/link";
import { removeProduct } from "../../actions/products";
import { useOptimistic } from "react";
import Form from "next/form";



export type Product = {
    id: number;
    title: string;
    price: number;
    description: string | null;
}


export const ProductDetail = ({products} : {products: Product[]}) => {


const [optimisticProducts, updateOptimisticProducts] =  useOptimistic(products, 
    (currentProducts, productId) => {
    return currentProducts.filter((product) => product.id !== productId);
})


const removeProductById = async (productId: number) => {
    updateOptimisticProducts(productId);
    await removeProduct(productId);
}


return(
    <div className="p-4 max-w-7x1 mx-auto">
        <h2>
            Products
        </h2>
        <div>
            {optimisticProducts.map((product) => (
                <div key={product.id} className="border p-4 mb-4">
                    <h3 className="text-lg font-bold">{product.title}</h3>
                    <Link href={`/dataFetching/products-db/${product.id}`} className="text-blue-500 hover:underline">Edit Product</Link>
                   
                   
                   <Form action={removeProductById.bind(null, product.id)}  className="inline">
                        <button type = "submit" className = "bg-red-500 text-white p-2 rounded hover:bg-red-600">Delete</button>
                    </Form>

                    <p className="text-gray-600">${product.price}</p>
                    {product.description && (
                        <p className="text-gray-700">{product.description}</p>
                    )}
                </div>
            ))}
        </div>
    </div>
)
}
