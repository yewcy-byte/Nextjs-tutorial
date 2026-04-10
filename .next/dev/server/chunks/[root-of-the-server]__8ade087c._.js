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
"[project]/app/comments/[id]/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DELETE",
    ()=>DELETE,
    "GET",
    ()=>GET,
    "PATCH",
    ()=>PATCH,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$comments$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/comments/data.ts [app-route] (ecmascript)");
const dynamic = "force-dynamic";
;
async function GET(_request, { params }) {
    const { id } = await params;
    const comment = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$comments$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["comments"].find((comment)=>comment.id === parseInt(id));
    return Response.json(comment);
}
async function PATCH(request, { params }) {
    const { id } = await params;
    const body = await request.json();
    const { text } = body;
    const index = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$comments$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["comments"].findIndex((comment)=>comment.id === parseInt(id));
    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$comments$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["comments"][index].text = text;
    //only for display success
    return Response.json(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$comments$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["comments"][index]);
}
async function DELETE(request, { params }) {
    const { id } = await params;
    const index = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$comments$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["comments"].findIndex((comment)=>comment.id === parseInt(id));
    const deletedComment = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$comments$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["comments"][index];
    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$comments$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["comments"].splice(index, 1);
    return Response.json(deletedComment);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8ade087c._.js.map