# Next.js Tutorial Project

This project was built by following the **CodeEvolution Next.js tutorial** on YouTube.  
It is a small photo feed app created to practice core Next.js concepts using the App Router.

## What I Learned

Through this project, I learned how to:

- Build pages using the **Next.js App Router** (`app/` directory)
- Create **nested routes** and **dynamic routes** (for example: `photos/[id]`)
- Pass and read dynamic route parameters in page components
- Use TypeScript for safer code with custom types (for example: image metadata typing)
- Display optimized images using **`next/image`**
- Organize reusable data in a separate module (`metadata.ts`)
- Render detail pages based on selected data
- Structure components and pages with clean folder conventions
- Style pages using utility classes (Tailwind CSS)

## Features

- Photo feed section
- Individual photo detail pages by ID
- Typed metadata for each photo (name, source, photographer, location)
- Responsive image rendering with Next.js Image component

## Tech Stack

- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**

## Project Structure (Simplified)

- `app/photo-feed/metadata.ts` – photo metadata and types
- `app/photo-feed/photos/[id]/page.tsx` – dynamic photo detail page
- `app/...` – route-based page structure using App Router

## Run Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Open:
   `http://localhost:3000`

## Acknowledgment

Tutorial source: **CodeEvolution** (YouTube).  
This project is for learning and practice purposes.