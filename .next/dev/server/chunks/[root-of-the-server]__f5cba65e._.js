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
"[project]/app/comments/data.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "comments",
    ()=>comments
]);
const comments = [
    {
        id: 1,
        text: "This is the first comment"
    },
    {
        id: 2,
        text: "This is the second comment"
    },
    {
        id: 3,
        text: "This is the third comment"
    }
];
}),
"[project]/app/comments/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$comments$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/comments/data.ts [app-route] (ecmascript)");
const dynamic = "force-dynamic";
;
async function GET(request) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query");
    const filteredComents = query ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$comments$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["comments"].filter((comment)=>comment.text.includes(query)) : __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$comments$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["comments"];
    return Response.json(filteredComents);
}
async function POST(request) {
    const comment = await request.json();
    const newComment = {
        id: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$comments$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["comments"].length + 1,
        text: comment.text
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$comments$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["comments"].push(newComment);
    return new Response(JSON.stringify(newComment), {
        headers: {
            "Content-Type": "application/json"
        },
        status: 201
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f5cba65e._.js.map