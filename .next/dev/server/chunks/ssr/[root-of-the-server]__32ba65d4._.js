module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/global-error.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/global-error.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/not-found.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/dataFetching/prisma-db.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addProduct",
    ()=>addProduct,
    "deleteProduct",
    ()=>deleteProduct,
    "getProduct",
    ()=>getProduct,
    "getProducts",
    ()=>getProducts,
    "updateProduct",
    ()=>updateProduct
]);
(()=>{
    const e = new Error("Cannot find module '@/prisma/client'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
const prisma = new PrismaClient();
const seedProducts = async ()=>{
    const count = await prisma.product.count();
    if (count === 0) {
        await prisma.product.createMany({
            data: [
                {
                    title: "Product 1",
                    price: 500,
                    description: "Description 1"
                },
                {
                    title: "Product 2",
                    price: 700,
                    description: "Description 2"
                },
                {
                    title: "Product 3",
                    price: 1000,
                    description: "Description 3"
                }
            ]
        });
    }
};
// Run seed if needed
seedProducts();
async function getProducts(query) {
    await new Promise((resolve)=>setTimeout(resolve, 1500));
    if (query) {
        return prisma.product.findMany({
            where: {
                OR: [
                    {
                        title: {
                            contains: query
                        }
                    },
                    {
                        description: {
                            contains: query
                        }
                    }
                ]
            }
        });
    }
    return prisma.product.findMany();
}
async function getProduct(id) {
    await new Promise((resolve)=>setTimeout(resolve, 1500));
    return prisma.product.findUnique({
        where: {
            id
        }
    });
}
async function addProduct(title, price, description) {
    await new Promise((resolve)=>setTimeout(resolve, 1500));
    return prisma.product.create({
        data: {
            title,
            price,
            description
        }
    });
}
async function updateProduct(id, title, price, description) {
    await new Promise((resolve)=>setTimeout(resolve, 1500));
    return prisma.product.update({
        where: {
            id
        },
        data: {
            title,
            price,
            description
        }
    });
}
async function deleteProduct(id) {
    await new Promise((resolve)=>setTimeout(resolve, 1500));
    return prisma.product.delete({
        where: {
            id
        }
    });
}
}),
"[project]/app/dataFetching/products-db/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductsDBPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dataFetching$2f$prisma$2d$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/dataFetching/prisma-db.ts [app-rsc] (ecmascript)");
;
;
async function ProductsDBPage() {
    const products = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dataFetching$2f$prisma$2d$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProducts"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 max-w-7x1 mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: "Products"
            }, void 0, false, {
                fileName: "[project]/app/dataFetching/products-db/page.tsx",
                lineNumber: 18,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: products.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border p-4 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-bold",
                                children: product.title
                            }, void 0, false, {
                                fileName: "[project]/app/dataFetching/products-db/page.tsx",
                                lineNumber: 24,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600",
                                children: [
                                    "$",
                                    product.price
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dataFetching/products-db/page.tsx",
                                lineNumber: 25,
                                columnNumber: 21
                            }, this),
                            product.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-700",
                                children: product.description
                            }, void 0, false, {
                                fileName: "[project]/app/dataFetching/products-db/page.tsx",
                                lineNumber: 27,
                                columnNumber: 25
                            }, this)
                        ]
                    }, product.id, true, {
                        fileName: "[project]/app/dataFetching/products-db/page.tsx",
                        lineNumber: 23,
                        columnNumber: 17
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/dataFetching/products-db/page.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/dataFetching/products-db/page.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/dataFetching/products-db/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/dataFetching/products-db/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__32ba65d4._.js.map