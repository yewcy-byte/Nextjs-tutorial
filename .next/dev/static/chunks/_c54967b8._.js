(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/utils/server-utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "serverSideFunction",
    ()=>serverSideFunction
]);
;
const serverSideFunction = ()=>{
    console.log("Using multiple libraries", "Using environment variables", "Interacting with database", "Processing confidential information");
    return "server result";
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/renderDemo/client-route/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClientRoutePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$server$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/server-utils.ts [app-client] (ecmascript)");
"use client";
;
;
function ClientRoutePage() {
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$server$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverSideFunction"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
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
_c = ClientRoutePage;
var _c;
__turbopack_context__.k.register(_c, "ClientRoutePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_c54967b8._.js.map