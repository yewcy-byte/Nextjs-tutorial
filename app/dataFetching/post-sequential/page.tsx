import { Suspense } from "react";
import { Author } from "./author";

type Post = {
    userId : number;
    id : number;
    title : string;
    body : string;
}

export default async function PostSequential(){

const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts : Post[] = await response.json();

    const filteredPosts = posts.filter((post) => post.id % 10 === 1);
    
        return(
          <div className= "p-4 max-w-7x1 mx-auto">
            <h1 className= "text-2xl font-bold mb-4">Blog Posts</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPosts.map((post) => (
              <div key={post.id} className="p-4 bg-white shadow-md rounded-lg text-gray-700">
                <div className="font-bold">{post.title}</div>
                <div className="text-sm mt-2">{post.body}</div>
                <Suspense  fallback= {
                        <div>Loading author...</div>
                    }>
                    
                    <Author id={post.userId} />
                </Suspense>
                
              </div>
            ))}

            </div>
          </div>  

        );


}