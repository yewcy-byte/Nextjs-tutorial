type Author ={
    id : number;
    name : string;
}

export async function Author ({id} : {id : number}){
    await new Promise ((resolve) => setTimeout(resolve,1000));
    const response = await fetch (`https://jsonplaceholder.typicode.com/users/${id}`);

    const user = await response.json();

    return(
        <div className = "p-4 bg-white shadow-md rounded-lg text-gray-700">
            <div className = "font-thin tracking-tighter">Written by :</div>

            <div className = "font-bold">{user.name}</div>
        </div>
    );

}

