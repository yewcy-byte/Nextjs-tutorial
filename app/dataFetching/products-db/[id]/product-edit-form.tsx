"use client"

import {Submit} from "@/components/submit";
import { useActionState } from "react";
import { FormState, editProduct } from "../../actions/products";
import { getProduct } from "../../prisma-db";
import { Product } from "@/app/dataFetching/products-db/page";



export default function EditProductForm({product}: {product: Product}) {

    const editProductWithId = editProduct.bind(null, product.id);

    const initialState: FormState = {
        errors: {},
    };

 const [state, formAction, isPending] = useActionState(
    editProductWithId, initialState);


  return (
    <div>
      <h1>Edit Product</h1>
      <form action ={formAction}>
        <input type ="hidden" name="id" value={product.id} />
       
        <div>
          <label htmlFor="name">Name:</label>
          {state.errors.title && (
            <p className="text-red-500">{state.errors.title}</p>
          )}
          <input
            type="text"
            name="title"
            defaultValue={product.title}

          />

        </div>
        <div>
          <label htmlFor="price">Price:</label>
           {state.errors.price && (
            <p className="text-red-500">{state.errors.price}</p>
          )}
          <input
            type="number"
            name="price"
            defaultValue={product.price}
          />
        </div>
              <div>
          <label htmlFor="description">Description:</label>
           {state.errors.description && (
            <p className="text-red-500">{state.errors.description}</p>
          )}
          <input
            type="text"
            name="description"
            defaultValue={product.description || ""}
          />
        </div>
    {/*} <Submit /> */}
     <button
        type="submit"
        className="block w-full p-2 text-white bg-blue-500 rounded disabled:bg-gray-500"
        disabled={isPending}
      >
        Edit Product
      </button>

      </form>
    </div>
  );

}