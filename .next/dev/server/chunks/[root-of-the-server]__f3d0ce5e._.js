module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/routeHandlers/profile/api/v2/users/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Enhanced v2 endpoint with structured name
__turbopack_context__.s([
    "GET",
    ()=>GET
]);
async function GET() {
    const users = [
        {
            // v1 fields
            id: "550e8400-e29b-41d4-a716-446655440000",
            email: "john@example.com",
            fullName: "John Smith",
            createdAt: "2024-01-15T08:30:00Z",
            // v2 fields
            name: {
                // New structured format
                first: "John",
                last: "Smith"
            },
            status: "active",
            lastLoginAt: "2024-03-15T09:20:00Z",
            profile: {
                avatar: "https://assets.example.com/avatars/john.jpg",
                title: "Senior Developer",
                department: "Engineering"
            },
            preferences: {
                language: "en-US",
                timezone: "America/New_York",
                emailNotifications: true
            }
        },
        {
            id: "7c9e6679-7425-40de-944b-e07fc1f90ae7",
            email: "jane@example.com",
            fullName: "Jane Wilson",
            createdAt: "2024-02-20T14:15:00Z",
            name: {
                first: "Jane",
                last: "Wilson",
                middle: "Elizabeth"
            },
            status: "active",
            lastLoginAt: "2024-03-14T16:45:00Z",
            profile: {
                avatar: null,
                title: "Product Manager",
                department: "Product"
            },
            preferences: {
                language: "en-GB",
                timezone: "Europe/London",
                emailNotifications: false
            }
        }
    ];
    return Response.json(users);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f3d0ce5e._.js.map