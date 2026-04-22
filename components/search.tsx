import Form from "next/form";




export const Search = () => {
    return(
        <Form action="dataFetching/products-db" className="flex gap-2">
            <input
                name="query"
                className="border p-2 rounded w-full"
                placeholder="Search..."
            />

        <button
        type="submit"
        className="ml-2 p-2 text-white bg-blue-500 rounded"
        >Search</button>
    </Form>
    
    );

    };