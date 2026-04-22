"use server";

import { Roles } from '@/components/types/globals';
import {auth, clerkClient} from '@clerk/nextjs/server';

export async function setRole (formData : FormData){
    const {sessionClaims} =await auth()

    if (sessionClaims?.metadata?.role !== "admin") {
        throw new Error("Unauthorized");
    }

    const client = await clerkClient();
    const userId = formData.get("userId") as string;
    const role = formData.get("role") as Roles;


    try {
        await client.users.updateUser(userId, {
            publicMetadata: {role}
        });
    } catch (error) {
        throw new Error("Failed to update user role");

    }
}

export async function removeRole(formDat:FormData){
    
}