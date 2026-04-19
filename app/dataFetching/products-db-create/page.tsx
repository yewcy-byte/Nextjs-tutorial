"use client"

import {Submit} from "@/components/submit";
import { useActionState } from "react";
import { FormState, createProduct } from "../actions/products";



export default function AddProductPage() {

    const initialState: FormState = {
        errors: {},
    };

 const [state, formAction, isPending] = useActionState(
    createProduct, initialState);


  return (
    <div>
      <h1>Add Product</h1>
      <form action ={formAction}>
        <div>
          <label htmlFor="name">Name:</label>
          {state.errors.title && (
            <p className="text-red-500">{state.errors.title}</p>
          )}
          <input
            type="text"
            name="title"
            
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
          />
        </div>
    {/*} <Submit /> */}
     <button
        type="submit"
        className="block w-full p-2 text-white bg-blue-500 rounded disabled:bg-gray-500"
        disabled={isPending}
      >
        Add Product
      </button>

      </form>
    </div>
  );

}