import { getProducts } from "@/app/dataFetching/prisma-db";
import { ProductDetail } from "./[id]/product-detail";


export type Product = {
    id: number;
    title: string;
    price: number;
    description: string | null;
}


export default async function ProductsDBPage({searchParams}: {searchParams: Promise<{ query?: string }> }) {

const { query } = await searchParams;
const products: Product[] =await getProducts(query);

return <ProductDetail products={products} />;
}
