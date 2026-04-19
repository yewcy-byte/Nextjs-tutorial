"use client";

import {useEffect} from "react";

export default function ErrorPage({error}: {error: Error}){
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-center">
                <h1 className="text-2xl font-bold text-red-500">Error</h1>
                <p className="text-gray-700">{error.message}</p>
            </div>
        </div>
    );
}