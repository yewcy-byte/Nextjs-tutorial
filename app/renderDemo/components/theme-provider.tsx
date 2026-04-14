"use client"

import {createContext, useContext} from "react";



type Theme={
  colors:{
    primary : string
    secondary: string
  };
};

const defaultTheme : Theme = {
  colors:{
    primary : "blue",
    secondary: "red"
  }
}


export const ThemeProvider = ({children}:{children: React.ReactNode}) =>{
    return(
        <ThemeContext.Provider value={defaultTheme}>
            {children}
        </ThemeContext.Provider>
    )
}

const ThemeContext =  createContext<Theme>(defaultTheme);

export const useTheme = () => useContext(ThemeContext);
