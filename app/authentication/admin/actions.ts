"use server";

import type { Roles } from '@/components/types/globals';
import { auth, clerkClient } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const ADMIN_PATH = "/authentication/admin";

function redirectWithError(message: string): never {
    redirect(`${ADMIN_PATH}?error=${encodeURIComponent(message)}`);
}

function redirectWithSuccess(message: string): never {
    redirect(`${ADMIN_PATH}?success=${encodeURIComponent(message)}`);
}

async function requireAdmin() {
    const { userId } = await auth();
    if (!userId) {
        redirectWithError("Please sign in first.");
    }

    const client = await clerkClient();
    const currentUser = await client.users.getUser(userId!);
    const role = currentUser.publicMetadata?.role;

    if (role !== "admin") {
        redirectWithError("Only admins can manage roles.");
    }

    return client;
}

export async function setRole(formData: FormData) {
    const client = await requireAdmin();

    const userId = formData.get("id") as string;
    const role = formData.get("role") as Roles;

    if (!userId || !role) {
        redirectWithError("Missing user id or role.");
    }

    if (role !== "admin" && role !== "moderator") {
        redirectWithError("Invalid role.");
    }

    try {
        await client.users.updateUser(userId, {
            publicMetadata: { role }
        });
        revalidatePath(ADMIN_PATH);
        redirectWithSuccess("Role updated successfully.");
    } catch (error) {
        console.error("setRole failed", { userId, role, error });
        redirectWithError("Failed to update user role.");
    }
}

export async function removeRole(formData: FormData) {
    const client = await requireAdmin();
    const id = formData.get("id")?.toString() || "";

    if (!id) {
        redirectWithError("Missing user id.");
    }

    try {
        await client.users.updateUser(id, { publicMetadata: { role: null } });
        revalidatePath(ADMIN_PATH);
        redirectWithSuccess("Role removed successfully.");
    } catch (error) {
        console.error("removeRole failed", { id, error });
        redirectWithError("Failed to remove role.");
    }
}