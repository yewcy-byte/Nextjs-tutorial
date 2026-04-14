import "server-only";

export const serverSideFunction  =()=>{
    console.log(
        "Using multiple libraries",
        "Using environment variables",
        "Interacting with database",
        "Processing confidential information"
    );
    
    
    
    
    return "server result";
};