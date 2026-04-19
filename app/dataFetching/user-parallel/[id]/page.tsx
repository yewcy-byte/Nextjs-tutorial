type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

type Album ={
    userId: number;
    id: number;
    title: string;
}

async function getUserPosts(userId : string){
    await new Promise ((resolve) => setTimeout(resolve, 1000));
 const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
 return res.json();
} 

async function getUserAlbums(userId : string){
    await new Promise ((resolve) => setTimeout(resolve, 1000));
 const res = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
 return res.json();
} 

export default async function UserProfile({params}:{params: Promise<{id: string}>;

}){
    const {id} = await params;
    const postsData = getUserPosts(id);
    const albumsData = getUserAlbums(id);

    const [posts, albums] = await Promise.all([postsData, albumsData]);

    return(
        <div className = "p-4 max-w-7x1 mx-auto">
            <h1 className = "text-2xl font-bold mb-4">User {id} Profile</h1>
            <div className = "grid frid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h2 className = "text-xl font-semibold mb-2">Posts</h2>
                    <ul>
                        {posts.map((post: Post) => (
                            <li key={post.id} className = "mb-2">
                                <h3 className = "font-medium">{post.title}</h3>
                                <p className = "text-gray-600">{post.body}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className = "text-xl font-semibold mb-2">Albums</h2>
                    <ul>
                        {albums.map((album: Album) => (
                            <li key={album.id} className = "mb-2">
                                <h3 className = "font-medium">{album.title}</h3>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )

}