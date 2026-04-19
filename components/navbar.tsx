


import {NavLinks} from "./nav-links";
import {NavSearch} from "./nav-search";
import Secondblog from "@/app/blog/second/page";

export const navbar = () =>{
    console.log("Navbar rendered");

    


    return(
        <div>
            <NavLinks/>
            <NavSearch/>
        </div>

    );
}

