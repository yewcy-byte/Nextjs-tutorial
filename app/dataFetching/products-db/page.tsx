import { getProducts } from "@/app/dataFetching/prisma-db";

type Product = {
    id: number;
    title: string;
    price: number;
    description: string | null;
}


export default async function ProductsDBPage() {

const products: Product[] =await getProducts();


return(
    <div className="p-4 max-w-7x1 mx-auto">
        <h2>
            Products
        </h2>
        <div>
            {products.map((product) => (
                <div key={product.id} className="border p-4 mb-4">
                    <h3 className="text-lg font-bold">{product.title}</h3>
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
