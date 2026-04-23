# Next.js Tutorial Project

This is a practice project built while following the **CodeEvolution Next.js tutorial** and expanding it into a broader App Router playground. It combines routing patterns, Clerk authentication, Prisma-powered data fetching, server actions, and several page and layout experiments.

## Overview

The app is organized as a collection of small examples that demonstrate how Next.js App Router features work in real projects. It includes public pages, authenticated routes, admin-only actions, nested layouts, dynamic routes, route handlers, and examples of client and server components working together.

## What This Project Covers (What I learnt)

- Next.js App Router page, layout, and route organization
- Dynamic routes such as `photo-feed/[id]`, `articles/[articleId]`, and `product/[productId]`
- Route groups and special routing patterns such as `(.)`, `(…)`, `@modal`, and `@slot` patterns
- Clerk authentication with sign in, sign up, user profile, and admin role management
- Protected routes and middleware/proxy-based auth checks
- Prisma + SQLite data access for products and data fetching demos
- Server actions for updating and removing Clerk user roles
- Route Handlers for API-style endpoints
- Client and server component examples
- Loading, error, and not-found UI patterns
- Tailwind CSS styling across multiple demo pages

## Main Features

- Photo feed with direct detail pages and modal previews
- Authentication flow with Clerk
- User profile page and admin panel
- Admin role assignment and removal using Clerk metadata
- Product CRUD and form submission examples backed by Prisma + SQLite
- Blog pages, dashboard pages, and nested route examples
- Render demos showing server-only and client-only behavior
- Comments and other route handler examples
- Parallel route and intercepting route demos

## Notable Routes

- `/` - landing page
- `/photo-feed` - photo feed gallery
- `/photo-feed/[id]` - photo detail page
- `/authentication/sign-in` - Clerk sign in
- `/authentication/sign-up` - Clerk sign up
- `/authentication/user-profile` - Clerk user profile
- `/authentication/admin` - admin panel for user roles
- `/dataFetching/products-db` - Prisma product list
- `/dataFetching/products-db/[id]` - product detail/edit view
- `/dataFetching/react-form` - product form submission demo
- `/dataFetching/react-form/api` - form POST route handler
- `/dataFetching/users-client` - client-side data fetching demo
- `/dataFetching/users-server` - server-side data fetching demo
- `/dashboard` - dashboard example
- `/blog` - blog index
- `/blog/first` and `/blog/second` - nested blog pages
- `/comments` - comments route handler demo
- `/renderDemo/server-route` - server component demo
- `/renderDemo/client-route` - client component demo
- `/renderDemo/dashboard` - render demo dashboard
- `/complex-dashboard` - parallel route dashboard demo
- `/routeHandlers/*` - route handler examples

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Clerk
- Prisma
- SQLite

## Local Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up your environment variables in `.env`.

3. Generate the Prisma client and start the dev server:
   ```bash
   npm run dev
   ```

4. Open:
   `http://localhost:3000`

## Build Notes

The build script runs Prisma generation before the Next.js build so production deployments have the generated client available:

```bash
npm run build
```

## Environment Variables

Required variables include:

- `DATABASE_URL`
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`
- `NEXT_PUBLIC_CLERK_SIGN_IN_URL`
- `NEXT_PUBLIC_CLERK_SIGN_UP_URL`

## Project Notes

- `.env` should stay local and never be committed.
- `.next` should not be tracked in git.
- Some demo routes are intentionally verbose to show how App Router patterns work.

## Acknowledgment

Original tutorial source: **CodeEvolution** on YouTube.

This repository is for learning and experimentation.