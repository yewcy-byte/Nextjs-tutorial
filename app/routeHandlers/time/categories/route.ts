export const dynamic = "force-static";


export async function GET(){
    const categories = [
        {id: 1, name: "Work"},
        {id: 2, name: "Personal"},
        {id: 3, name: "Fitness"},
        {id: 4, name: "Hobbies"},
    ];
    return Response.json(categories);
    
}
