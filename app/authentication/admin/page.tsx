import { clerkClient } from "@clerk/nextjs/server";
import { removeRole, setRole } from "./actions";

type AdminPageProps = {
    searchParams?: Promise<{
        error?: string;
        success?: string;
    }>;
};

export default async function AdminPage({ searchParams }: AdminPageProps){
    const client = await clerkClient();
    const params = searchParams ? await searchParams : undefined;
    const errorMessage = params?.error;
    const successMessage = params?.success;

    const userList = (await (client.users.getUserList())).data;


    return(
        <>
            {errorMessage && (
                <div className="mb-4 rounded border border-red-300 bg-red-100 px-4 py-3 text-red-800">
                    {errorMessage}
                </div>
            )}
            {successMessage && (
                <div className="mb-4 rounded border border-green-300 bg-green-100 px-4 py-3 text-green-800">
                    {successMessage}
                </div>
            )}
            {
                userList.map((user) => {
                    return(
                    <div key={user.id} className={"bg-amber-200 flex justify-between gap-4 p-4"}>
                        <div>{user.firstName}{user.lastName}</div>
                        <div>{user.emailAddresses.find(
                         (email) => email.id === user.primaryEmailAddressId   
                        )?.emailAddress
                    }</div>

                    <div className={"bg-amber-600 p-4"}>{user.publicMetadata.role as string}</div>

                      <div>
                        <form action={setRole}>
                            <input type="hidden" value={user.id} name="id" />
                            <input type="hidden" value="admin" name="role" />
                            <button type="submit" className="bg-blue-600 text-white hover:bg-blue-700 cursor-pointer p-3"> Make Admin</button>
                        </form>
                        </div>  

                         <div>
                        <form action={setRole}>
                            <input type="hidden" value={user.id} name="id" />
                            <input type="hidden" value="moderator" name="role" />
                            <button type="submit" className="bg-blue-600 text-white hover:bg-blue-700 cursor-pointer p-3"> 
                                Mod him!</button>
                        </form>
                        </div>  

                         <div>
                        <form action={removeRole}>
                            <input type="hidden" value={user.id} name="id" />
                            <button type="submit" className="bg-blue-600 text-white hover:bg-blue-700 cursor-pointer p-3"> 
                                Strip him of his Role!</button>
                        </form>
                        </div>  
                    </div>       
                    )
                 
                })
            }
        
        </>
    )
}