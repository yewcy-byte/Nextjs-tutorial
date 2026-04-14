
import {Metadata} from "next";


import {ErrorWrapper} from "./error-wrapper";

import { ThemeProvider } from "./renderDemo/components/theme-provider";

import React from 'react';

import "./globals.css";


export const metadata : Metadata = {
title:{
  template:"%s | template",
  default:"Next js tutorial default",
}
};


export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body>
          <header style = {{backgroundColor:"lightblue", padding:"1rem", alignItems:"center", justifyContent:"center", display:"flex"}}>
            <p style= {{backgroundColor:"blue", borderRadius: "20px" , color:"white", padding:"10px", width:"50px", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.5)" , cursor:"pointer"}}>Header</p>
          </header>

      <ErrorWrapper> {children}</ErrorWrapper>
      
      


<footer style = {{backgroundColor:"ghostwhite", padding:"1rem", alignItems:"center", justifyContent:"center", display:"flex"}}>
  <p style= {{backgroundColor:"grey", borderRadius: "20px" , color:"white", padding:"10px", width:"50px", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.5)" , cursor:"pointer"}}>Footer</p>
</footer>

</body>
</ThemeProvider>

    </html>
  );
}
