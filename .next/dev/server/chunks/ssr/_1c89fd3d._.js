module.exports = [
"[project]/utils/server-utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "serverSideFunction",
    ()=>serverSideFunction
]);
const serverSideFunction = ()=>{
    console.log("Using multiple libraries", "Using environment variables", "Interacting with database", "Processing confidential information");
    return "server result";
};
}),
"[project]/app/renderDemo/client-route/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClientRoutePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$server$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/server-utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
function ClientRoutePage() {
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$server$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serverSideFunction"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
        children: [
            " Client Route Page ",
            result
        ]
    }, void 0, true, {
        fileName: "[project]/app/renderDemo/client-route/page.tsx",
        lineNumber: 9,
        columnNumber: 12
    }, this);
}
}),
];

//# sourceMappingURL=_1c89fd3d._.js.map