(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_448361._.js", {

"[project]/components/common/header.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>Header
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$locals$7d$__ = __turbopack_import__("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-client] (ecmascript) {locals}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
// Supabase client
const supabase = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$locals$7d$__["createClient"](("TURBOPACK compile-time value", "https://golmptyxjzpsbyznhcrj.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdvbG1wdHl4anpwc2J5em5oY3JqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEwMDQ0NDEsImV4cCI6MjA1NjU4MDQ0MX0.xoW1whCVkGwiXLOx5sPxDclYYUXu-0c7CwigDqj7hyg"));
// getStorageUrl yardımcı fonksiyonu
const getStorageUrl = (path)=>{
    if (!path) return '';
    if (path.startsWith('http')) {
        return path;
    }
    return supabase.storage.from('site-images').getPublicUrl(path).data.publicUrl;
};
function Header() {
    _s();
    const [destinations, setDestinations] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({});
    const [regionImages, setRegionImages] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({});
    const [isLoading, setIsLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](true);
    const [hoveredRegion, setHoveredRegion] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [tourTypes, setTourTypes] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
    const [logoSettings, setLogoSettings] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [mobileMenuOpen, setMobileMenuOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [activeDropdown, setActiveDropdown] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [isMounted, setIsMounted] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    // Gezi türü menüsünü gösterip göstermemeyi kontrol eder
    const showTourTypeMenu = false; // Dropdown'u gizlemek için false olarak ayarlandı
    // Destinasyonları ve bölge görsellerini çek
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        async function fetchData() {
            try {
                // Destinasyonları çek
                const { data: toursData, error: toursError } = await supabase.from('tours').select('*').eq('destination_status', true).order('region');
                if (toursError) throw toursError;
                // Bölge görsellerini çek
                const { data: imagesData, error: imagesError } = await supabase.from('region_images').select('region, image_path');
                if (imagesError) throw imagesError;
                // Turları grupla
                if (toursData) {
                    const grouped = toursData.reduce((acc, tour)=>{
                        if (!acc[tour.region]) {
                            acc[tour.region] = [];
                        }
                        acc[tour.region].push(tour);
                        return acc;
                    }, {});
                    setDestinations(grouped);
                }
                // Bölge görsellerini map'le
                if (imagesData) {
                    const imageMap = imagesData.reduce((acc, img)=>{
                        acc[img.region] = img.image_path;
                        return acc;
                    }, {});
                    setRegionImages(imageMap);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally{
                setIsLoading(false);
            }
        }
        fetchData();
    }, []);
    // Gezi türlerini çek
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        async function fetchTourTypes() {
            try {
                const { data, error } = await supabase.from('tour_type_settings').select('type, type_icon_svg, header_title').order('type');
                if (error) throw error;
                if (data) setTourTypes(data);
            } catch (error) {
                console.error('Error fetching tour types:', error);
            }
        }
        fetchTourTypes();
    }, []);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        async function fetchLogoSettings() {
            try {
                const { data, error } = await supabase.from('logo_settings').select('*').single();
                if (error) throw error;
                if (data) setLogoSettings(data);
            } catch (error) {
                console.error('Error fetching logo:', error);
            }
        }
        fetchLogoSettings();
    }, []);
    // Component mount kontrolü
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        setIsMounted(true);
        return ()=>{
            setMobileMenuOpen(false);
        };
    }, []);
    // Hydration sorunlarını önlemek için
    if (!isMounted) {
        return null;
    }
    // Toggle dropdown in mobile view
    const toggleDropdown = (dropdown)=>{
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("header", {
                className: "jsx-dd8128955a27adfc" + " " + "desktop-header fixed top-0 left-0 right-0 z-[100] bg-transparent pointer-events-auto",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "jsx-dd8128955a27adfc" + " " + "max-w-[1920px] mx-auto px-4 py-6",
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "jsx-dd8128955a27adfc" + " " + "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "shrink-0",
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: logoSettings ? getStorageUrl(logoSettings.logo_path) : '/images/logo.png',
                                    alt: "İnci DMC",
                                    width: 120,
                                    height: 40,
                                    className: "h-10 w-auto",
                                    priority: true
                                }, void 0, false, {
                                    fileName: "<[project]/components/common/header.tsx>",
                                    lineNumber: 189,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/components/common/header.tsx>",
                                lineNumber: 188,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("nav", {
                                className: "jsx-dd8128955a27adfc" + " " + "absolute left-1/2 -translate-x-1/2",
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("ul", {
                                    className: "jsx-dd8128955a27adfc" + " " + "flex items-center gap-8",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                                            className: "jsx-dd8128955a27adfc",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/tours",
                                                className: "text-white font-semibold text-lg hover:text-emerald-400 transition-colors",
                                                children: "Tüm Turlar"
                                            }, void 0, false, {
                                                fileName: "<[project]/components/common/header.tsx>",
                                                lineNumber: 202,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/components/common/header.tsx>",
                                            lineNumber: 202,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                                            className: "jsx-dd8128955a27adfc" + " " + "relative group",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                    className: "jsx-dd8128955a27adfc" + " " + "flex items-center gap-2 text-white font-semibold text-lg hover:text-emerald-400 transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                            className: "jsx-dd8128955a27adfc",
                                                            children: "Destinasyonlar"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/common/header.tsx>",
                                                            lineNumber: 207,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            className: "jsx-dd8128955a27adfc" + " " + "w-4 h-4 transition-transform duration-300 group-hover:rotate-180",
                                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: "2",
                                                                d: "M19 9l-7 7-7-7",
                                                                className: "jsx-dd8128955a27adfc"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/common/header.tsx>",
                                                                lineNumber: 209,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/common/header.tsx>",
                                                            lineNumber: 208,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/components/common/header.tsx>",
                                                    lineNumber: 206,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "jsx-dd8128955a27adfc" + " " + "absolute h-10 w-full -bottom-10 invisible"
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/common/header.tsx>",
                                                    lineNumber: 214,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    style: {
                                                        top: "80px"
                                                    },
                                                    className: "jsx-dd8128955a27adfc" + " " + "fixed invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg flex w-[75vw]",
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                            className: "jsx-dd8128955a27adfc" + " " + "w-full p-12",
                                                            children: isLoading ? // Loading state
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                className: "jsx-dd8128955a27adfc" + " " + "grid grid-cols-3 gap-8",
                                                                children: [
                                                                    ...Array(3)
                                                                ].map((_, i)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                        className: "jsx-dd8128955a27adfc" + " " + "animate-pulse space-y-4",
                                                                        children: [
                                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                                className: "jsx-dd8128955a27adfc" + " " + "h-6 bg-gray-200 rounded w-32"
                                                                            }, void 0, false, {
                                                                                fileName: "<[project]/components/common/header.tsx>",
                                                                                lineNumber: 226,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                                className: "jsx-dd8128955a27adfc" + " " + "space-y-2",
                                                                                children: [
                                                                                    ...Array(3)
                                                                                ].map((_, j)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                                        className: "jsx-dd8128955a27adfc" + " " + "h-4 bg-gray-100 rounded w-48"
                                                                                    }, j, false, {
                                                                                        fileName: "<[project]/components/common/header.tsx>",
                                                                                        lineNumber: 229,
                                                                                        columnNumber: 35
                                                                                    }, this))
                                                                            }, void 0, false, {
                                                                                fileName: "<[project]/components/common/header.tsx>",
                                                                                lineNumber: 227,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, i, true, {
                                                                        fileName: "<[project]/components/common/header.tsx>",
                                                                        lineNumber: 225,
                                                                        columnNumber: 29
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/common/header.tsx>",
                                                                lineNumber: 223,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                className: "jsx-dd8128955a27adfc" + " " + "grid grid-cols-3 gap-8",
                                                                children: Object.entries(destinations).map(([region, tours])=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                        onMouseEnter: ()=>setHoveredRegion(region),
                                                                        onMouseLeave: ()=>setHoveredRegion(null),
                                                                        className: "jsx-dd8128955a27adfc" + " " + "min-w-[250px]",
                                                                        children: [
                                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h4", {
                                                                                className: "jsx-dd8128955a27adfc" + " " + "font-bold text-lg mb-4 text-gray-700 border-b pb-2",
                                                                                children: region
                                                                            }, void 0, false, {
                                                                                fileName: "<[project]/components/common/header.tsx>",
                                                                                lineNumber: 244,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                                className: "jsx-dd8128955a27adfc" + " " + "space-y-2",
                                                                                children: tours.map((tour)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                        href: `/tours/${tour.slug}`,
                                                                                        className: "flex items-center justify-between text-gray-600 hover:text-emerald-500 transition-colors font-medium py-1",
                                                                                        children: [
                                                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                                                                className: "jsx-dd8128955a27adfc",
                                                                                                children: tour.title
                                                                                            }, void 0, false, {
                                                                                                fileName: "<[project]/components/common/header.tsx>",
                                                                                                lineNumber: 254,
                                                                                                columnNumber: 37
                                                                                            }, this),
                                                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
                                                                                                fill: "none",
                                                                                                stroke: "currentColor",
                                                                                                viewBox: "0 0 24 24",
                                                                                                className: "jsx-dd8128955a27adfc" + " " + "w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity",
                                                                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                                                                                                    strokeLinecap: "round",
                                                                                                    strokeLinejoin: "round",
                                                                                                    strokeWidth: "2",
                                                                                                    d: "M9 5l7 7-7 7",
                                                                                                    className: "jsx-dd8128955a27adfc"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "<[project]/components/common/header.tsx>",
                                                                                                    lineNumber: 257,
                                                                                                    columnNumber: 39
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "<[project]/components/common/header.tsx>",
                                                                                                lineNumber: 255,
                                                                                                columnNumber: 37
                                                                                            }, this)
                                                                                        ]
                                                                                    }, tour.id, true, {
                                                                                        fileName: "<[project]/components/common/header.tsx>",
                                                                                        lineNumber: 249,
                                                                                        columnNumber: 35
                                                                                    }, this))
                                                                            }, void 0, false, {
                                                                                fileName: "<[project]/components/common/header.tsx>",
                                                                                lineNumber: 247,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, region, true, {
                                                                        fileName: "<[project]/components/common/header.tsx>",
                                                                        lineNumber: 238,
                                                                        columnNumber: 29
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/common/header.tsx>",
                                                                lineNumber: 236,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/common/header.tsx>",
                                                            lineNumber: 220,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                            className: "jsx-dd8128955a27adfc" + " " + "w-1/3 relative overflow-hidden bg-[#f1dbc4]",
                                                            children: hoveredRegion && regionImages[hoveredRegion] ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                src: supabase.storage.from('site-images').getPublicUrl(regionImages[hoveredRegion]).data.publicUrl,
                                                                alt: `${hoveredRegion} bölgesi`,
                                                                fill: true,
                                                                className: "object-cover transition-all duration-500 hover:scale-110"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/common/header.tsx>",
                                                                lineNumber: 272,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                className: "jsx-dd8128955a27adfc" + " " + "w-full h-full flex items-center justify-center p-8",
                                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    src: "/images/world-map.jpg",
                                                                    alt: "World Map",
                                                                    fill: true,
                                                                    className: "object-cover transition-all duration-500 hover:scale-110",
                                                                    sizes: "(max-width: 1200px) 33vw, 400px",
                                                                    priority: true
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/components/common/header.tsx>",
                                                                    lineNumber: 283,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/common/header.tsx>",
                                                                lineNumber: 282,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/common/header.tsx>",
                                                            lineNumber: 270,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/components/common/header.tsx>",
                                                    lineNumber: 217,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/components/common/header.tsx>",
                                            lineNumber: 205,
                                            columnNumber: 17
                                        }, this),
                                        showTourTypeMenu && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                                            className: "jsx-dd8128955a27adfc" + " " + "relative group",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                    className: "jsx-dd8128955a27adfc" + " " + "flex items-center gap-2 text-white font-semibold text-lg hover:text-emerald-400 transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                            className: "jsx-dd8128955a27adfc",
                                                            children: "Gezi türü"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/common/header.tsx>",
                                                            lineNumber: 301,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            className: "jsx-dd8128955a27adfc" + " " + "w-4 h-4 transition-transform duration-300 group-hover:rotate-180",
                                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: "2",
                                                                d: "M19 9l-7 7-7-7",
                                                                className: "jsx-dd8128955a27adfc"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/common/header.tsx>",
                                                                lineNumber: 303,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/common/header.tsx>",
                                                            lineNumber: 302,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/components/common/header.tsx>",
                                                    lineNumber: 300,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "jsx-dd8128955a27adfc" + " " + "absolute h-10 w-full -bottom-10 invisible"
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/common/header.tsx>",
                                                    lineNumber: 308,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    style: {
                                                        top: "80px"
                                                    },
                                                    className: "jsx-dd8128955a27adfc" + " " + "fixed invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 left-1/2 transform -translate-x-1/2 mt-2 bg-white shadow-lg rounded-lg w-[75vw]",
                                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "jsx-dd8128955a27adfc" + " " + "p-8",
                                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                            className: "jsx-dd8128955a27adfc" + " " + "grid grid-cols-7 gap-4",
                                                            children: tourTypes.map((type)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: `/tourtype?type=${type.type}`,
                                                                    className: "flex flex-col items-center gap-4 p-6 rounded-xl hover:bg-gray-50 transition-colors group",
                                                                    children: [
                                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                            dangerouslySetInnerHTML: {
                                                                                __html: type.type_icon_svg.replace(/script/gi, '')
                                                                            },
                                                                            className: "jsx-dd8128955a27adfc" + " " + "text-gray-600 group-hover:text-emerald-500 transition-colors"
                                                                        }, void 0, false, {
                                                                            fileName: "<[project]/components/common/header.tsx>",
                                                                            lineNumber: 321,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                                            className: "jsx-dd8128955a27adfc" + " " + "text-sm font-medium text-gray-700 group-hover:text-emerald-500 text-center transition-colors",
                                                                            children: type.header_title
                                                                        }, void 0, false, {
                                                                            fileName: "<[project]/components/common/header.tsx>",
                                                                            lineNumber: 328,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, type.type, true, {
                                                                    fileName: "<[project]/components/common/header.tsx>",
                                                                    lineNumber: 315,
                                                                    columnNumber: 29
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/common/header.tsx>",
                                                            lineNumber: 313,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/common/header.tsx>",
                                                        lineNumber: 312,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/common/header.tsx>",
                                                    lineNumber: 311,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/components/common/header.tsx>",
                                            lineNumber: 299,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                                            className: "jsx-dd8128955a27adfc",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/opportunity",
                                                className: "text-white font-semibold text-lg hover:text-emerald-400 transition-colors",
                                                children: "Fırsatlar"
                                            }, void 0, false, {
                                                fileName: "<[project]/components/common/header.tsx>",
                                                lineNumber: 341,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/components/common/header.tsx>",
                                            lineNumber: 340,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                                            className: "jsx-dd8128955a27adfc",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/blog",
                                                className: "text-white font-semibold text-lg hover:text-emerald-400 transition-colors",
                                                children: "Bloglar"
                                            }, void 0, false, {
                                                fileName: "<[project]/components/common/header.tsx>",
                                                lineNumber: 351,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/components/common/header.tsx>",
                                            lineNumber: 350,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/components/common/header.tsx>",
                                    lineNumber: 201,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/components/common/header.tsx>",
                                lineNumber: 200,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "jsx-dd8128955a27adfc" + " " + "flex items-center gap-6",
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/acenta-giris",
                                    className: "flex items-center gap-3 px-6 py-3 bg-emerald-500 text-white rounded-full  hover:bg-emerald-600 transition-all duration-300 group",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                            className: "jsx-dd8128955a27adfc" + " " + "text-lg font-semibold",
                                            children: "Acenta Girişi"
                                        }, void 0, false, {
                                            fileName: "<[project]/components/common/header.tsx>",
                                            lineNumber: 369,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            className: "jsx-dd8128955a27adfc" + " " + "w-5 h-5 transform group-hover:translate-x-1 transition-transform",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M17 8l4 4m0 0l-4 4m4-4H3",
                                                className: "jsx-dd8128955a27adfc"
                                            }, void 0, false, {
                                                fileName: "<[project]/components/common/header.tsx>",
                                                lineNumber: 376,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/components/common/header.tsx>",
                                            lineNumber: 370,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/components/common/header.tsx>",
                                    lineNumber: 364,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/components/common/header.tsx>",
                                lineNumber: 362,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/components/common/header.tsx>",
                        lineNumber: 186,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/components/common/header.tsx>",
                    lineNumber: 185,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/components/common/header.tsx>",
                lineNumber: 184,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("header", {
                className: "jsx-dd8128955a27adfc" + " " + "mobile-header fixed top-0 left-0 right-0 z-[101] bg-transparent pointer-events-auto",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "jsx-dd8128955a27adfc" + " " + "p-4 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "z-50",
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: logoSettings ? getStorageUrl(logoSettings.logo_path) : '/images/logo.png',
                                    alt: "İnci DMC",
                                    width: 100,
                                    height: 35,
                                    className: "h-8 w-auto",
                                    priority: true
                                }, void 0, false, {
                                    fileName: "<[project]/components/common/header.tsx>",
                                    lineNumber: 394,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/components/common/header.tsx>",
                                lineNumber: 393,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),
                                className: "jsx-dd8128955a27adfc" + " " + "z-50 text-white p-2",
                                children: mobileMenuOpen ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    className: "jsx-dd8128955a27adfc" + " " + "w-6 h-6",
                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: "M6 18L18 6M6 6l12 12",
                                        className: "jsx-dd8128955a27adfc"
                                    }, void 0, false, {
                                        fileName: "<[project]/components/common/header.tsx>",
                                        lineNumber: 411,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/components/common/header.tsx>",
                                    lineNumber: 410,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    className: "jsx-dd8128955a27adfc" + " " + "w-6 h-6",
                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: "M4 6h16M4 12h16M4 18h16",
                                        className: "jsx-dd8128955a27adfc"
                                    }, void 0, false, {
                                        fileName: "<[project]/components/common/header.tsx>",
                                        lineNumber: 415,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/components/common/header.tsx>",
                                    lineNumber: 414,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/components/common/header.tsx>",
                                lineNumber: 405,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/components/common/header.tsx>",
                        lineNumber: 391,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        style: {
                            transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
                            transition: 'transform 0.3s ease-in-out, visibility 0.3s ease-in-out'
                        },
                        className: "jsx-dd8128955a27adfc" + " " + `fixed inset-0 bg-[#1A2A1A] z-40 ${mobileMenuOpen ? 'visible' : 'invisible'}`,
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "jsx-dd8128955a27adfc" + " " + "flex flex-col h-full pt-20 px-6 overflow-y-auto",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("nav", {
                                    className: "jsx-dd8128955a27adfc" + " " + "flex-1",
                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("ul", {
                                        className: "jsx-dd8128955a27adfc" + " " + "space-y-6",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                                                className: "jsx-dd8128955a27adfc",
                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/tours",
                                                    className: "text-white text-2xl font-semibold block py-2",
                                                    onClick: ()=>setMobileMenuOpen(false),
                                                    children: "Tüm Turlar"
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/common/header.tsx>",
                                                    lineNumber: 433,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/components/common/header.tsx>",
                                                lineNumber: 432,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                                                className: "jsx-dd8128955a27adfc",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                        onClick: ()=>toggleDropdown('destinations'),
                                                        className: "jsx-dd8128955a27adfc" + " " + "flex items-center justify-between w-full text-white text-2xl font-semibold py-2",
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                                className: "jsx-dd8128955a27adfc",
                                                                children: "Destinasyonlar"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/common/header.tsx>",
                                                                lineNumber: 448,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                viewBox: "0 0 24 24",
                                                                className: "jsx-dd8128955a27adfc" + " " + `w-6 h-6 transition-transform duration-300 ${activeDropdown === 'destinations' ? 'rotate-180' : ''}`,
                                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: "2",
                                                                    d: "M19 9l-7 7-7-7",
                                                                    className: "jsx-dd8128955a27adfc"
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/components/common/header.tsx>",
                                                                    lineNumber: 455,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/common/header.tsx>",
                                                                lineNumber: 449,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/components/common/header.tsx>",
                                                        lineNumber: 444,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "jsx-dd8128955a27adfc" + " " + `mt-2 space-y-4 pl-4 ${activeDropdown === 'destinations' ? 'block' : 'hidden'}`,
                                                        children: Object.entries(destinations).map(([region, tours])=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                className: "jsx-dd8128955a27adfc" + " " + "mb-4",
                                                                children: [
                                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h4", {
                                                                        className: "jsx-dd8128955a27adfc" + " " + "text-emerald-400 text-xl font-semibold mb-2",
                                                                        children: region
                                                                    }, void 0, false, {
                                                                        fileName: "<[project]/components/common/header.tsx>",
                                                                        lineNumber: 463,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("ul", {
                                                                        className: "jsx-dd8128955a27adfc" + " " + "space-y-2 pl-2",
                                                                        children: tours.map((tour)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                                                                                className: "jsx-dd8128955a27adfc",
                                                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                    href: `/tours/${tour.slug}`,
                                                                                    className: "text-white/80 hover:text-white block py-1",
                                                                                    onClick: ()=>setMobileMenuOpen(false),
                                                                                    children: tour.title
                                                                                }, void 0, false, {
                                                                                    fileName: "<[project]/components/common/header.tsx>",
                                                                                    lineNumber: 467,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, tour.id, false, {
                                                                                fileName: "<[project]/components/common/header.tsx>",
                                                                                lineNumber: 466,
                                                                                columnNumber: 29
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "<[project]/components/common/header.tsx>",
                                                                        lineNumber: 464,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, region, true, {
                                                                fileName: "<[project]/components/common/header.tsx>",
                                                                lineNumber: 462,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/common/header.tsx>",
                                                        lineNumber: 460,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/components/common/header.tsx>",
                                                lineNumber: 443,
                                                columnNumber: 17
                                            }, this),
                                            showTourTypeMenu && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                                                className: "jsx-dd8128955a27adfc",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                        onClick: ()=>toggleDropdown('tourTypes'),
                                                        className: "jsx-dd8128955a27adfc" + " " + "flex items-center justify-between w-full text-white text-2xl font-semibold py-2",
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                                className: "jsx-dd8128955a27adfc",
                                                                children: "Gezi türü"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/common/header.tsx>",
                                                                lineNumber: 489,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                viewBox: "0 0 24 24",
                                                                className: "jsx-dd8128955a27adfc" + " " + `w-6 h-6 transition-transform duration-300 ${activeDropdown === 'tourTypes' ? 'rotate-180' : ''}`,
                                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: "2",
                                                                    d: "M19 9l-7 7-7-7",
                                                                    className: "jsx-dd8128955a27adfc"
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/components/common/header.tsx>",
                                                                    lineNumber: 496,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/common/header.tsx>",
                                                                lineNumber: 490,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/components/common/header.tsx>",
                                                        lineNumber: 485,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "jsx-dd8128955a27adfc" + " " + `mt-2 grid grid-cols-2 gap-4 pl-4 ${activeDropdown === 'tourTypes' ? 'block' : 'hidden'}`,
                                                        children: tourTypes.map((type)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: `/tourtype?type=${type.type}`,
                                                                className: "flex flex-col items-center p-4 bg-white/10 rounded-lg",
                                                                onClick: ()=>setMobileMenuOpen(false),
                                                                children: [
                                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                        dangerouslySetInnerHTML: {
                                                                            __html: type.type_icon_svg.replace(/script/gi, '')
                                                                        },
                                                                        className: "jsx-dd8128955a27adfc" + " " + "text-emerald-400 mb-2"
                                                                    }, void 0, false, {
                                                                        fileName: "<[project]/components/common/header.tsx>",
                                                                        lineNumber: 509,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                                        className: "jsx-dd8128955a27adfc" + " " + "text-white text-center",
                                                                        children: type.header_title
                                                                    }, void 0, false, {
                                                                        fileName: "<[project]/components/common/header.tsx>",
                                                                        lineNumber: 515,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, type.type, true, {
                                                                fileName: "<[project]/components/common/header.tsx>",
                                                                lineNumber: 503,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/common/header.tsx>",
                                                        lineNumber: 501,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/components/common/header.tsx>",
                                                lineNumber: 484,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                                                className: "jsx-dd8128955a27adfc",
                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/opportunity",
                                                    className: "text-white text-2xl font-semibold block py-2",
                                                    onClick: ()=>setMobileMenuOpen(false),
                                                    children: "Fırsatlar"
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/common/header.tsx>",
                                                    lineNumber: 523,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/components/common/header.tsx>",
                                                lineNumber: 522,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                                                className: "jsx-dd8128955a27adfc",
                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/blog",
                                                    className: "text-white text-2xl font-semibold block py-2",
                                                    onClick: ()=>setMobileMenuOpen(false),
                                                    children: "Bloglar"
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/common/header.tsx>",
                                                    lineNumber: 533,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/components/common/header.tsx>",
                                                lineNumber: 532,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/components/common/header.tsx>",
                                        lineNumber: 431,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/components/common/header.tsx>",
                                    lineNumber: 430,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "jsx-dd8128955a27adfc" + " " + "py-8 border-t border-white/20 mt-8",
                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/acenta-giris",
                                        className: "flex items-center justify-center gap-3 px-6 py-4 bg-emerald-500 text-white rounded-full w-full",
                                        onClick: ()=>setMobileMenuOpen(false),
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                className: "jsx-dd8128955a27adfc" + " " + "text-lg font-semibold",
                                                children: "Acenta Girişi"
                                            }, void 0, false, {
                                                fileName: "<[project]/components/common/header.tsx>",
                                                lineNumber: 551,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                className: "jsx-dd8128955a27adfc" + " " + "w-5 h-5",
                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M17 8l4 4m0 0l-4 4m4-4H3",
                                                    className: "jsx-dd8128955a27adfc"
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/common/header.tsx>",
                                                    lineNumber: 558,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/components/common/header.tsx>",
                                                lineNumber: 552,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/components/common/header.tsx>",
                                        lineNumber: 546,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/components/common/header.tsx>",
                                    lineNumber: 545,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/components/common/header.tsx>",
                            lineNumber: 429,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/components/common/header.tsx>",
                        lineNumber: 422,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/components/common/header.tsx>",
                lineNumber: 390,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "dd8128955a27adfc",
                children: ".desktop-header{display:block}.mobile-header{display:none}@media(max-width:1023px){.desktop-header{display:none!important}.mobile-header{display:block!important}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true);
}
_s(Header, "V/lk7p8RdoWhV6rslF1TcpNtP1s=");
_c = Header;
var _c;
__turbopack_refresh__.register(_c, "Header");

})()),
"[project]/components/stats-section.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>StatsSection
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$countup$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-countup/build/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$locals$7d$__ = __turbopack_import__("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-client] (ecmascript) {locals}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
// Supabase client
const supabase = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$locals$7d$__["createClient"](("TURBOPACK compile-time value", "https://golmptyxjzpsbyznhcrj.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdvbG1wdHl4anpwc2J5em5oY3JqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEwMDQ0NDEsImV4cCI6MjA1NjU4MDQ0MX0.xoW1whCVkGwiXLOx5sPxDclYYUXu-0c7CwigDqj7hyg"));
function StatsSection() {
    _s();
    const [stats, setStats] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
    const [isLoading, setIsLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](true);
    const [sectionInfo, setSectionInfo] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    // Stats verilerini çek
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        let isMounted = true; // Component mount durumunu takip et
        async function fetchStats() {
            try {
                const { data, error } = await supabase.from('stats').select('*').eq('is_active', true).order('display_order');
                if (error) {
                    console.error('Error fetching stats:', error);
                    return;
                }
                if (data && isMounted) {
                    console.log('Fetched stats:', data); // Debug için
                    setStats(data);
                    setSectionInfo(data.find((item)=>item.display_order === 1) || null);
                }
            } catch (error) {
                console.error('Error in fetchStats:', error);
            } finally{
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        }
        fetchStats();
        // Cleanup function
        return ()=>{
            isMounted = false;
        };
    }, []); // Boş dependency array
    // SVG render helper'ı güncelle
    const renderSVG = (svg)=>{
        try {
            // SVG string'i temizle
            let cleanSvg = svg.trim().replace(/script/gi, '') // script taglerini kaldır
            .replace(/\n/g, '') // yeni satırları kaldır
            .replace(/\s+/g, ' '); // fazla boşlukları tek boşluğa indir
            // SVG tag kontrolü
            if (!cleanSvg.startsWith('<svg')) {
                console.error('Invalid SVG format - missing opening tag:', svg);
                return '';
            }
            if (!cleanSvg.endsWith('</svg>')) {
                console.error('Invalid SVG format - missing closing tag:', svg);
                return '';
            }
            // SVG boyut kontrolü ve düzeltmesi
            if (!cleanSvg.includes('class="') && !cleanSvg.includes('class=\'')) {
                // class attribute yoksa ekle
                cleanSvg = cleanSvg.replace('<svg', '<svg class="w-16 h-16"');
            }
            // viewBox kontrolü
            if (!cleanSvg.includes('viewBox="')) {
                cleanSvg = cleanSvg.replace('<svg', '<svg viewBox="0 0 24 24"');
            }
            // Temel SVG attributelerini kontrol et ve ekle
            const basicAttrs = {
                'fill': 'none',
                'stroke': 'currentColor',
                'stroke-width': '1.5',
                'xmlns': 'http://www.w3.org/2000/svg'
            };
            Object.entries(basicAttrs).forEach(([attr, value])=>{
                if (!cleanSvg.includes(`${attr}="`)) {
                    cleanSvg = cleanSvg.replace('<svg', `<svg ${attr}="${value}"`);
                }
            });
            // size-6 class'ını w-16 h-16 ile değiştir
            cleanSvg = cleanSvg.replace('class="size-6"', 'class="w-16 h-16"');
            return cleanSvg;
        } catch (error) {
            console.error('Error rendering SVG:', error);
            return '';
        }
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("section", {
        className: "relative bg-[#f1dbc4] py-24 lg:py-32 overflow-hidden",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "absolute inset-0 overflow-hidden",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-[#1A2A1A]/5 to-transparent rounded-full blur-3xl"
                    }, void 0, false, {
                        fileName: "<[project]/components/stats-section.tsx>",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-[#1A2A1A]/5 to-transparent rounded-full blur-2xl"
                    }, void 0, false, {
                        fileName: "<[project]/components/stats-section.tsx>",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/components/stats-section.tsx>",
                lineNumber: 128,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "text-center mb-24",
                        children: isLoading ? // Loading state
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "animate-pulse space-y-4",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "h-6 bg-[#1A2A1A]/10 rounded w-48 mx-auto"
                                }, void 0, false, {
                                    fileName: "<[project]/components/stats-section.tsx>",
                                    lineNumber: 139,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "h-12 bg-[#1A2A1A]/10 rounded w-96 mx-auto"
                                }, void 0, false, {
                                    fileName: "<[project]/components/stats-section.tsx>",
                                    lineNumber: 140,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/components/stats-section.tsx>",
                            lineNumber: 138,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                    className: "inline-block text-sm font-medium text-[#1A2A1A]/80 tracking-wider uppercase mb-6",
                                    children: sectionInfo?.title || "RAKAMLARLA BİZ"
                                }, void 0, false, {
                                    fileName: "<[project]/components/stats-section.tsx>",
                                    lineNumber: 144,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h2", {
                                    className: "text-4xl lg:text-6xl font-butler font-bold text-[#1A2A1A] mb-8 leading-tight",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                            className: "block",
                                            children: sectionInfo?.subtitle_first || "Seyahatin"
                                        }, void 0, false, {
                                            fileName: "<[project]/components/stats-section.tsx>",
                                            lineNumber: 148,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                            className: "block mt-2 text-[#243A24]",
                                            children: sectionInfo?.subtitle_second || "Geleceğini Şekillendiriyoruz"
                                        }, void 0, false, {
                                            fileName: "<[project]/components/stats-section.tsx>",
                                            lineNumber: 149,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/components/stats-section.tsx>",
                                    lineNumber: 147,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "h-px w-24 bg-[#1A2A1A]/20 mx-auto"
                                }, void 0, false, {
                                    fileName: "<[project]/components/stats-section.tsx>",
                                    lineNumber: 153,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "<[project]/components/stats-section.tsx>",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24",
                        children: isLoading ? // Loading state
                        [
                            ...Array(3)
                        ].map((_, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "animate-pulse space-y-4",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "h-16 w-16 bg-[#1A2A1A]/10 rounded-full mx-auto"
                                    }, void 0, false, {
                                        fileName: "<[project]/components/stats-section.tsx>",
                                        lineNumber: 164,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "h-10 bg-[#1A2A1A]/10 rounded w-24 mx-auto"
                                    }, void 0, false, {
                                        fileName: "<[project]/components/stats-section.tsx>",
                                        lineNumber: 165,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "h-6 bg-[#1A2A1A]/10 rounded w-48 mx-auto"
                                    }, void 0, false, {
                                        fileName: "<[project]/components/stats-section.tsx>",
                                        lineNumber: 166,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "h-4 bg-[#1A2A1A]/10 rounded w-32 mx-auto"
                                    }, void 0, false, {
                                        fileName: "<[project]/components/stats-section.tsx>",
                                        lineNumber: 167,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "<[project]/components/stats-section.tsx>",
                                lineNumber: 163,
                                columnNumber: 15
                            }, this)) : stats.map((stat)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "group relative flex flex-col items-center text-center",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "relative mb-8",
                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "text-[#1A2A1A] opacity-80 group-hover:opacity-100 transition-opacity duration-500",
                                            dangerouslySetInnerHTML: {
                                                __html: renderSVG(stat.stat_icon_svg)
                                            }
                                        }, void 0, false, {
                                            fileName: "<[project]/components/stats-section.tsx>",
                                            lineNumber: 178,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/components/stats-section.tsx>",
                                        lineNumber: 177,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "mb-6",
                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "text-6xl lg:text-7xl font-butler font-bold text-[#243A24] tracking-tight",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$countup$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                end: stat.stat_value,
                                                suffix: "+",
                                                duration: 2.5
                                            }, void 0, false, {
                                                fileName: "<[project]/components/stats-section.tsx>",
                                                lineNumber: 189,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/components/stats-section.tsx>",
                                            lineNumber: 188,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/components/stats-section.tsx>",
                                        lineNumber: 187,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                                className: "text-2xl font-butler font-bold text-[#1A2A1A] mb-4",
                                                children: stat.stat_label
                                            }, void 0, false, {
                                                fileName: "<[project]/components/stats-section.tsx>",
                                                lineNumber: 195,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                className: "text-[#1A2A1A]/70 text-lg",
                                                children: stat.stat_description
                                            }, void 0, false, {
                                                fileName: "<[project]/components/stats-section.tsx>",
                                                lineNumber: 198,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/components/stats-section.tsx>",
                                        lineNumber: 194,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "absolute -bottom-8 left-1/2 -translate-x-1/2 w-16 h-px  bg-[#1A2A1A]/10 group-hover:bg-[#1A2A1A]/20  transition-all duration-500"
                                    }, void 0, false, {
                                        fileName: "<[project]/components/stats-section.tsx>",
                                        lineNumber: 204,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, stat.id, true, {
                                fileName: "<[project]/components/stats-section.tsx>",
                                lineNumber: 172,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "<[project]/components/stats-section.tsx>",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/components/stats-section.tsx>",
                lineNumber: 133,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/components/stats-section.tsx>",
        lineNumber: 126,
        columnNumber: 5
    }, this);
}
_s(StatsSection, "Vs24Yw7+tNsqYEypcrQPCuH8qyo=");
_c = StatsSection;
var _c;
__turbopack_refresh__.register(_c, "StatsSection");

})()),
"[project]/app/homepage.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>HomePage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/common/header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$stats$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/stats-section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$locals$7d$__ = __turbopack_import__("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-client] (ecmascript) {locals}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
// Supabase client
const supabase = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$locals$7d$__["createClient"](("TURBOPACK compile-time value", "https://golmptyxjzpsbyznhcrj.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdvbG1wdHl4anpwc2J5em5oY3JqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEwMDQ0NDEsImV4cCI6MjA1NjU4MDQ0MX0.xoW1whCVkGwiXLOx5sPxDclYYUXu-0c7CwigDqj7hyg"));
// Önce getStorageUrl fonksiyonunu ekleyelim (dosyanın üst kısmına)
const getStorageUrl = (path)=>{
    if (!path) return '';
    if (path.startsWith('http')) {
        return path;
    }
    return supabase.storage.from('site-images') // bucket adını güncelledik
    .getPublicUrl(path).data.publicUrl;
};
function HomePage() {
    _s();
    const [heroData, setHeroData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [isLoading, setIsLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](true);
    const [imageUrl, setImageUrl] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]('/images/hero-bg.jpg'); // Fallback görsel
    const [popularTours, setPopularTours] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
    const [isToursLoading, setIsToursLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](true);
    const [featuredSection, setFeaturedSection] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [isFeaturedLoading, setIsFeaturedLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](true);
    const [services, setServices] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
    const [isServicesLoading, setIsServicesLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](true);
    const [sectionData, setSectionData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [selectedService, setSelectedService] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [partners, setPartners] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
    const [isPartnersLoading, setIsPartnersLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](true);
    const [mapSettings, setMapSettings] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [mapLocations, setMapLocations] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
    const [isMapLoading, setIsMapLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](true);
    const [activeLocation, setActiveLocation] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [tourTypes, setTourTypes] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
    const [isTourTypesLoading, setIsTourTypesLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](true);
    const [isMobileView, setIsMobileView] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    // Mobil görünüm state'i
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        // Sayfa yüklendiğinde ve pencere boyutu değiştiğinde kontrol et
        const checkDevice = ()=>{
            const width = window.innerWidth;
            const isMobile = width <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            setIsMobileView(isMobile);
        };
        checkDevice();
        window.addEventListener('resize', checkDevice);
        return ()=>window.removeEventListener('resize', checkDevice);
    }, []);
    // Hero verilerini ve görsel URL'ini çek
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        async function fetchHeroData() {
            try {
                // En son eklenen hero ayarlarını al
                const { data, error } = await supabase.from('hero_settings').select('*').order('created_at', {
                    ascending: false
                }).limit(1).single();
                if (error) {
                    console.error('Error fetching hero data:', error);
                    return;
                }
                if (data) {
                    setHeroData(data);
                    // Görsel URL'ini oluştur
                    if (data.image_path) {
                        const { data: { publicUrl } } = supabase.storage.from('site-images').getPublicUrl(data.image_path);
                        setImageUrl(publicUrl);
                    }
                }
            } catch (error) {
                console.error('Error in fetchHeroData:', error);
            } finally{
                setIsLoading(false);
            }
        }
        fetchHeroData();
    }, []);
    // Popular turları çek
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        async function fetchPopularTours() {
            try {
                const { data, error } = await supabase.from('tours').select('*').eq('popular_tour', true).limit(6).order('created_at', {
                    ascending: false
                });
                if (error) {
                    console.error('Error fetching popular tours:', error);
                    return;
                }
                if (data) {
                    setPopularTours(data);
                }
            } catch (error) {
                console.error('Error in fetchPopularTours:', error);
            } finally{
                setIsToursLoading(false);
            }
        }
        fetchPopularTours();
    }, []);
    // Featured section verilerini çek
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        async function fetchFeaturedSection() {
            try {
                const { data, error } = await supabase.from('featured_section_settings').select('*').eq('is_active', true).order('display_order').limit(1).single();
                if (error) {
                    console.error('Error fetching featured section:', error);
                    return;
                }
                if (data) {
                    setFeaturedSection(data);
                }
            } catch (error) {
                console.error('Error in fetchFeaturedSection:', error);
            } finally{
                setIsFeaturedLoading(false);
            }
        }
        fetchFeaturedSection();
    }, []);
    // Services verilerini çek
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        async function fetchServices() {
            try {
                const { data, error } = await supabase.from('services').select('*').eq('is_active', true).order('display_order');
                if (error) {
                    console.error('Error fetching services:', error);
                    return;
                }
                if (data) {
                    const sectionInfo = data.find((item)=>item.display_order === 1);
                    setSectionData(sectionInfo || null);
                    setServices(data);
                    // İlk servisi seçili olarak ayarla
                    setSelectedService(data[0]);
                }
            } catch (error) {
                console.error('Error in fetchServices:', error);
            } finally{
                setIsServicesLoading(false);
            }
        }
        fetchServices();
    }, []);
    // Partner logolarını çek
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        async function fetchPartners() {
            try {
                const { data, error } = await supabase.from('partners').select('*').eq('is_active', true).order('display_order');
                if (error) {
                    console.error('Error fetching partners:', error);
                    return;
                }
                if (data) {
                    setPartners(data);
                }
            } catch (error) {
                console.error('Error in fetchPartners:', error);
            } finally{
                setIsPartnersLoading(false);
            }
        }
        fetchPartners();
    }, []);
    // Harita verilerini çekmek için useEffect ekleyelim
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        async function fetchMapData() {
            try {
                // Harita ayarlarını çek
                const { data: settingsData, error: settingsError } = await supabase.from('map_settings').select('*').single();
                if (settingsError) throw settingsError;
                if (settingsData) setMapSettings(settingsData);
                // Aktif lokasyonları çek
                const { data: locationsData, error: locationsError } = await supabase.from('map_locations').select('*').eq('is_active', true).order('name');
                if (locationsError) throw locationsError;
                if (locationsData) setMapLocations(locationsData);
            } catch (error) {
                console.error('Error fetching map data:', error);
            } finally{
                setIsMapLoading(false);
            }
        }
        fetchMapData();
    }, []);
    // Gezi türlerini çekmek için useEffect ekleyelim
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        async function fetchTourTypes() {
            try {
                console.log('Fetching tour types...');
                const { data, error } = await supabase.from('tour_type_settings').select('type, type_icon_svg, header_title').order('display_order');
                if (error) {
                    console.error('Error fetching tour types:', error);
                    throw error;
                }
                if (data) {
                    console.log('Tour types fetched:', data);
                    setTourTypes(data);
                } else {
                    console.log('No tour types data returned');
                }
            } catch (error) {
                console.error('Error in fetchTourTypes:', error);
            } finally{
                setIsTourTypesLoading(false);
            }
        }
        fetchTourTypes();
    }, []);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("main", {
        className: "jsx-67200f06211e6dae" + " " + "overflow-x-hidden",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("section", {
                className: "jsx-67200f06211e6dae" + " " + "relative h-[80vh] overflow-hidden",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "jsx-67200f06211e6dae" + " " + "absolute inset-0",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: imageUrl,
                                alt: heroData?.title || "Hero background",
                                fill: true,
                                className: "object-cover",
                                priority: true,
                                sizes: "100vw",
                                quality: 90
                            }, void 0, false, {
                                fileName: "<[project]/app/homepage.tsx>",
                                lineNumber: 386,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "jsx-67200f06211e6dae" + " " + "absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#1A2A1A]"
                            }, void 0, false, {
                                fileName: "<[project]/app/homepage.tsx>",
                                lineNumber: 396,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/app/homepage.tsx>",
                        lineNumber: 385,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "<[project]/app/homepage.tsx>",
                        lineNumber: 400,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "jsx-67200f06211e6dae" + " " + "relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "jsx-67200f06211e6dae" + " " + "absolute inset-0 flex flex-col justify-center",
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "jsx-67200f06211e6dae" + " " + "max-w-4xl text-white px-4 md:px-0",
                                    children: isLoading ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "jsx-67200f06211e6dae" + " " + "animate-pulse",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "jsx-67200f06211e6dae" + " " + "h-16 bg-white/20 rounded w-3/4 mb-4"
                                            }, void 0, false, {
                                                fileName: "<[project]/app/homepage.tsx>",
                                                lineNumber: 409,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "jsx-67200f06211e6dae" + " " + "h-8 bg-white/20 rounded w-1/2"
                                            }, void 0, false, {
                                                fileName: "<[project]/app/homepage.tsx>",
                                                lineNumber: 410,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/app/homepage.tsx>",
                                        lineNumber: 408,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h1", {
                                                className: "jsx-67200f06211e6dae" + " " + "font-butler font-bold text-5xl lg:text-7xl text-white pt-20",
                                                children: heroData?.title || "Anılar yaratmak için seyahat etmek"
                                            }, void 0, false, {
                                                fileName: "<[project]/app/homepage.tsx>",
                                                lineNumber: 414,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                className: "jsx-67200f06211e6dae" + " " + "text-xl mb-6 text-white pt-4",
                                                children: heroData?.subtitle || "Hayalinizdeki seyahati birlikte gerçekleştirelim."
                                            }, void 0, false, {
                                                fileName: "<[project]/app/homepage.tsx>",
                                                lineNumber: 417,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/opportunity",
                                                className: "inline-block underline text-white hover:text-emerald-400 transition",
                                                children: "Tekliflerimizi inceleyin"
                                            }, void 0, false, {
                                                fileName: "<[project]/app/homepage.tsx>",
                                                lineNumber: 420,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "<[project]/app/homepage.tsx>",
                                    lineNumber: 406,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/app/homepage.tsx>",
                                lineNumber: 405,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "jsx-67200f06211e6dae" + " " + "absolute top-1/2 right-4 -translate-y-1/2 bg-white/95 backdrop-blur-md rounded-2xl p-6 max-w-sm w-full shadow-2xl lg:right-0 border border-white/20 hover:shadow-emerald-200/20 transition-shadow duration-300 search-card z-10",
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "jsx-67200f06211e6dae" + " " + "relative z-10",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "jsx-67200f06211e6dae" + " " + "absolute -top-3 -left-3 w-16 h-16 bg-emerald-500/20 rounded-full blur-lg"
                                        }, void 0, false, {
                                            fileName: "<[project]/app/homepage.tsx>",
                                            lineNumber: 435,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "jsx-67200f06211e6dae" + " " + "absolute -bottom-6 -right-6 w-24 h-24 bg-emerald-500/20 rounded-full blur-lg"
                                        }, void 0, false, {
                                            fileName: "<[project]/app/homepage.tsx>",
                                            lineNumber: 436,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "jsx-67200f06211e6dae" + " " + "relative",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h2", {
                                                    className: "jsx-67200f06211e6dae" + " " + "font-butler font-bold text-2xl lg:text-3xl text-gray-800 mb-1",
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                            className: "jsx-67200f06211e6dae" + " " + "text-emerald-600 relative",
                                                            children: [
                                                                "A Global DMC",
                                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
                                                                    viewBox: "0 0 100 10",
                                                                    preserveAspectRatio: "none",
                                                                    className: "jsx-67200f06211e6dae" + " " + "absolute -bottom-1 left-0 w-full h-1",
                                                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                                                                        d: "M0,5 Q50,10 100,5",
                                                                        stroke: "currentColor",
                                                                        strokeWidth: "2",
                                                                        fill: "none",
                                                                        className: "jsx-67200f06211e6dae"
                                                                    }, void 0, false, {
                                                                        fileName: "<[project]/app/homepage.tsx>",
                                                                        lineNumber: 444,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/app/homepage.tsx>",
                                                                    lineNumber: 443,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "<[project]/app/homepage.tsx>",
                                                            lineNumber: 441,
                                                            columnNumber: 19
                                                        }, this),
                                                        " Partner for Your Travel"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/app/homepage.tsx>",
                                                    lineNumber: 440,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "jsx-67200f06211e6dae" + " " + "text-gray-600 mb-5 pt-2 text-sm",
                                                    children: "We operate in about 100 countries globally, giving you a distinct advantage over any one else."
                                                }, void 0, false, {
                                                    fileName: "<[project]/app/homepage.tsx>",
                                                    lineNumber: 448,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/app/homepage.tsx>",
                                            lineNumber: 439,
                                            columnNumber: 15
                                        }, this),
                                        tourTypes && tourTypes.length > 0 ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "jsx-67200f06211e6dae" + " " + "grid grid-cols-3 gap-3 mb-5",
                                            children: isTourTypesLoading ? // Loading state
                                            [
                                                ...Array(3)
                                            ].map((_, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "jsx-67200f06211e6dae" + " " + "animate-pulse",
                                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "jsx-67200f06211e6dae" + " " + "p-3 flex flex-col items-center border border-gray-100 rounded-xl",
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                className: "jsx-67200f06211e6dae" + " " + "w-10 h-10 bg-gray-200 rounded-full mb-2"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/app/homepage.tsx>",
                                                                lineNumber: 461,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                className: "jsx-67200f06211e6dae" + " " + "h-3 bg-gray-200 rounded w-16"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/app/homepage.tsx>",
                                                                lineNumber: 462,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/app/homepage.tsx>",
                                                        lineNumber: 460,
                                                        columnNumber: 25
                                                    }, this)
                                                }, index, false, {
                                                    fileName: "<[project]/app/homepage.tsx>",
                                                    lineNumber: 459,
                                                    columnNumber: 23
                                                }, this)) : // Dinamik gezi türleri - İlk 3 tanesini göster
                                            tourTypes.slice(0, 3).map((type)=>{
                                                console.log('Rendering tour type:', type);
                                                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/tourtype?type=${type.type}`,
                                                    className: "group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-md hover:-translate-y-1",
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                            className: "jsx-67200f06211e6dae" + " " + "absolute inset-0 bg-gradient-to-br from-emerald-50 to-emerald-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/app/homepage.tsx>",
                                                            lineNumber: 476,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                            className: "jsx-67200f06211e6dae" + " " + "relative p-3 flex flex-col items-center border border-gray-100 rounded-xl group-hover:border-emerald-200 transition-colors duration-300",
                                                            children: [
                                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                    className: "jsx-67200f06211e6dae" + " " + "w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm mb-2 group-hover:bg-emerald-500 transition-colors duration-300",
                                                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                        dangerouslySetInnerHTML: {
                                                                            __html: type.type_icon_svg ? type.type_icon_svg.replace(/script/gi, '') : ''
                                                                        },
                                                                        className: "jsx-67200f06211e6dae" + " " + "w-5 h-5 text-gray-500 group-hover:text-white transition-colors duration-300"
                                                                    }, void 0, false, {
                                                                        fileName: "<[project]/app/homepage.tsx>",
                                                                        lineNumber: 480,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/app/homepage.tsx>",
                                                                    lineNumber: 479,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                                    className: "jsx-67200f06211e6dae" + " " + "text-xs font-medium text-gray-700 group-hover:text-emerald-700 transition-colors duration-300",
                                                                    children: type.header_title
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/app/homepage.tsx>",
                                                                    lineNumber: 487,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "<[project]/app/homepage.tsx>",
                                                            lineNumber: 478,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, type.type, true, {
                                                    fileName: "<[project]/app/homepage.tsx>",
                                                    lineNumber: 471,
                                                    columnNumber: 25
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "<[project]/app/homepage.tsx>",
                                            lineNumber: 455,
                                            columnNumber: 17
                                        }, this) : null,
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/tours",
                                            className: "relative block w-full py-3 px-5 bg-emerald-500 text-white text-center rounded-xl hover:bg-emerald-600 transition-all duration-300 shadow-lg hover:shadow-emerald-300/50 overflow-hidden group transform hover:-translate-y-1",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                    className: "jsx-67200f06211e6dae" + " " + "relative z-10 flex items-center justify-center gap-2 font-medium text-sm",
                                                    children: [
                                                        "Teklifimizi inceleyin",
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            className: "jsx-67200f06211e6dae" + " " + "w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300",
                                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M14 5l7 7m0 0l-7 7m7-7H3",
                                                                className: "jsx-67200f06211e6dae"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/app/homepage.tsx>",
                                                                lineNumber: 506,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "<[project]/app/homepage.tsx>",
                                                            lineNumber: 505,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/app/homepage.tsx>",
                                                    lineNumber: 503,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "jsx-67200f06211e6dae" + " " + "absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-600 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                                }, void 0, false, {
                                                    fileName: "<[project]/app/homepage.tsx>",
                                                    lineNumber: 509,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/app/homepage.tsx>",
                                            lineNumber: 499,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "jsx-67200f06211e6dae" + " " + "absolute -top-2 -right-2 w-4 h-4",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                    className: "jsx-67200f06211e6dae" + " " + "absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"
                                                }, void 0, false, {
                                                    fileName: "<[project]/app/homepage.tsx>",
                                                    lineNumber: 514,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                    className: "jsx-67200f06211e6dae" + " " + "relative inline-flex rounded-full h-4 w-4 bg-emerald-500"
                                                }, void 0, false, {
                                                    fileName: "<[project]/app/homepage.tsx>",
                                                    lineNumber: 515,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/app/homepage.tsx>",
                                            lineNumber: 513,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/app/homepage.tsx>",
                                    lineNumber: 433,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/app/homepage.tsx>",
                                lineNumber: 432,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/app/homepage.tsx>",
                        lineNumber: 403,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/app/homepage.tsx>",
                lineNumber: 383,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "jsx-67200f06211e6dae" + " " + "relative h-24 bg-[#1A2A1A]"
            }, void 0, false, {
                fileName: "<[project]/app/homepage.tsx>",
                lineNumber: 523,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("section", {
                className: "jsx-67200f06211e6dae" + " " + `relative bg-[#f1dbc4] pt-18 pb-[150px] ${isMobileView ? 'min-h-[800px]' : 'min-h-[1600px]'} overflow-hidden`,
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        style: {
                            backgroundColor: '#f1dbc4'
                        },
                        className: "jsx-67200f06211e6dae" + " " + "absolute inset-0 w-full",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            style: {
                                minHeight: '1600px'
                            },
                            className: "jsx-67200f06211e6dae" + " " + "relative w-full h-full",
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/images/backgroundup.png",
                                alt: "",
                                fill: true,
                                className: "object-cover",
                                priority: true,
                                quality: 100,
                                sizes: "100vw",
                                style: {
                                    objectPosition: 'top',
                                    objectFit: 'cover',
                                    width: '100%',
                                    height: '100%',
                                    minHeight: '1600px',
                                    display: 'block',
                                    backgroundColor: '#f1dbc4'
                                }
                            }, void 0, false, {
                                fileName: "<[project]/app/homepage.tsx>",
                                lineNumber: 530,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/app/homepage.tsx>",
                            lineNumber: 529,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/app/homepage.tsx>",
                        lineNumber: 528,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "jsx-67200f06211e6dae" + " " + "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-40",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "jsx-67200f06211e6dae" + " " + "text-center mb-16",
                                children: isFeaturedLoading ? // Loading state
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "jsx-67200f06211e6dae" + " " + "animate-pulse space-y-4",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "jsx-67200f06211e6dae" + " " + "h-4 bg-emerald-400/20 rounded w-40 mx-auto"
                                        }, void 0, false, {
                                            fileName: "<[project]/app/homepage.tsx>",
                                            lineNumber: 558,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "jsx-67200f06211e6dae" + " " + "h-8 bg-white/20 rounded w-64 mx-auto"
                                        }, void 0, false, {
                                            fileName: "<[project]/app/homepage.tsx>",
                                            lineNumber: 559,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "jsx-67200f06211e6dae" + " " + "h-4 bg-white/20 rounded max-w-2xl mx-auto"
                                        }, void 0, false, {
                                            fileName: "<[project]/app/homepage.tsx>",
                                            lineNumber: 560,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/app/homepage.tsx>",
                                    lineNumber: 557,
                                    columnNumber: 15
                                }, this) : featuredSection ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                            className: "jsx-67200f06211e6dae" + " " + "text-sm font-semibold text-emerald-400 tracking-wider uppercase",
                                            children: featuredSection.subtitle
                                        }, void 0, false, {
                                            fileName: "<[project]/app/homepage.tsx>",
                                            lineNumber: 564,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h2", {
                                            className: "jsx-67200f06211e6dae" + " " + "font-butler font-bold text-4xl text-white",
                                            children: featuredSection.title
                                        }, void 0, false, {
                                            fileName: "<[project]/app/homepage.tsx>",
                                            lineNumber: 567,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                            className: "jsx-67200f06211e6dae" + " " + "mt-4 text-xl text-white/80 max-w-2xl mx-auto",
                                            children: featuredSection.description
                                        }, void 0, false, {
                                            fileName: "<[project]/app/homepage.tsx>",
                                            lineNumber: 570,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true) : // Fallback içerik
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                            className: "jsx-67200f06211e6dae" + " " + "text-sm font-semibold text-emerald-400 tracking-wider uppercase",
                                            children: "Öne Çıkan Turlarımız"
                                        }, void 0, false, {
                                            fileName: "<[project]/app/homepage.tsx>",
                                            lineNumber: 577,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h2", {
                                            className: "jsx-67200f06211e6dae" + " " + "font-butler font-bold text-4xl text-white",
                                            children: "En sevdiğimiz geziler"
                                        }, void 0, false, {
                                            fileName: "<[project]/app/homepage.tsx>",
                                            lineNumber: 580,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                            className: "jsx-67200f06211e6dae" + " " + "mt-4 text-xl text-white/80 max-w-2xl mx-auto",
                                            children: "Tüm gezilerimiz cazip fiyatlıdır ve rezervasyon yaptırmak kolaydır. Beklenmeyen ekstralar olmadan komple seyahatler sunuyoruz."
                                        }, void 0, false, {
                                            fileName: "<[project]/app/homepage.tsx>",
                                            lineNumber: 583,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "<[project]/app/homepage.tsx>",
                                lineNumber: 554,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "jsx-67200f06211e6dae" + " " + "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16",
                                children: isToursLoading ? // Loading state
                                [
                                    ...Array(6)
                                ].map((_, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "jsx-67200f06211e6dae" + " " + "animate-pulse",
                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "jsx-67200f06211e6dae" + " " + "bg-white/5 rounded-2xl h-[500px]"
                                        }, void 0, false, {
                                            fileName: "<[project]/app/homepage.tsx>",
                                            lineNumber: 596,
                                            columnNumber: 19
                                        }, this)
                                    }, index, false, {
                                        fileName: "<[project]/app/homepage.tsx>",
                                        lineNumber: 595,
                                        columnNumber: 17
                                    }, this)) : popularTours.length > 0 ? popularTours.map((tour)=>{
                                    const heroImage = tour.tour_images?.find((img)=>img.image_type === 'hero');
                                    const imagePath = heroImage?.storage_path || tour.hero_image_path;
                                    // Para birimi sembolünü belirle
                                    const currencySymbol = tour.base_price_currency === 'USD' ? '$' : tour.base_price_currency === 'EUR' ? '€' : tour.base_price_currency === 'TRY' ? '₺' : '€'; // Varsayılan olarak euro sembolü
                                    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "jsx-67200f06211e6dae" + " " + "group relative overflow-hidden rounded-2xl h-[500px] shadow-lg transition-all duration-500 hover:shadow-2xl",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "jsx-67200f06211e6dae" + " " + "absolute inset-0 w-full h-full",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: getStorageUrl(imagePath),
                                                        alt: heroImage?.alt_text || tour.title,
                                                        fill: true,
                                                        className: "object-cover transition-all duration-700 group-hover:scale-105"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/app/homepage.tsx>",
                                                        lineNumber: 614,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "jsx-67200f06211e6dae" + " " + "absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-500"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/app/homepage.tsx>",
                                                        lineNumber: 621,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/app/homepage.tsx>",
                                                lineNumber: 613,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "jsx-67200f06211e6dae" + " " + "absolute inset-0 flex flex-col justify-between p-10 text-white",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "jsx-67200f06211e6dae" + " " + "flex justify-between items-start",
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                                className: "jsx-67200f06211e6dae" + " " + "bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-medium border border-white/20",
                                                                children: tour.region
                                                            }, void 0, false, {
                                                                fileName: "<[project]/app/homepage.tsx>",
                                                                lineNumber: 628,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                                className: "jsx-67200f06211e6dae" + " " + "bg-emerald-500/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-medium",
                                                                children: [
                                                                    tour.duration,
                                                                    " Gün"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "<[project]/app/homepage.tsx>",
                                                                lineNumber: 631,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/app/homepage.tsx>",
                                                        lineNumber: 627,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "jsx-67200f06211e6dae" + " " + "space-y-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500",
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                                                className: "jsx-67200f06211e6dae" + " " + "text-2xl lg:text-3xl font-bold leading-tight group-hover:text-emerald-300 transition-colors duration-300",
                                                                children: tour.title
                                                            }, void 0, false, {
                                                                fileName: "<[project]/app/homepage.tsx>",
                                                                lineNumber: 639,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                className: "jsx-67200f06211e6dae" + " " + "text-white/80 text-sm lg:text-base line-clamp-3 mb-2",
                                                                children: tour.short_description || "Eşsiz manzaralar ve unutulmaz deneyimler sunan premium tur paketimiz."
                                                            }, void 0, false, {
                                                                fileName: "<[project]/app/homepage.tsx>",
                                                                lineNumber: 644,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                className: "jsx-67200f06211e6dae" + " " + "flex items-center justify-between pt-5 border-t border-white/10",
                                                                children: [
                                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                        className: "jsx-67200f06211e6dae" + " " + "flex flex-col",
                                                                        children: [
                                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                                                className: "jsx-67200f06211e6dae" + " " + "text-xs text-white/60 uppercase",
                                                                                children: "Başlangıç Fiyatı"
                                                                            }, void 0, false, {
                                                                                fileName: "<[project]/app/homepage.tsx>",
                                                                                lineNumber: 651,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                                                className: "jsx-67200f06211e6dae" + " " + "text-2xl font-bold text-emerald-400",
                                                                                children: [
                                                                                    Intl.NumberFormat('tr-TR').format(tour.base_price || 0),
                                                                                    " ",
                                                                                    currencySymbol
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "<[project]/app/homepage.tsx>",
                                                                                lineNumber: 652,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "<[project]/app/homepage.tsx>",
                                                                        lineNumber: 650,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: `/tours/${tour.slug}`,
                                                                        className: "group/btn flex items-center gap-2 bg-white/10 hover:bg-emerald-500/70 backdrop-blur-sm px-6 py-3 rounded-lg transition-all duration-300 border border-white/10 hover:border-emerald-400/50",
                                                                        children: [
                                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                                                className: "jsx-67200f06211e6dae" + " " + "text-sm font-medium",
                                                                                children: "Detaylar"
                                                                            }, void 0, false, {
                                                                                fileName: "<[project]/app/homepage.tsx>",
                                                                                lineNumber: 661,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
                                                                                fill: "none",
                                                                                stroke: "currentColor",
                                                                                viewBox: "0 0 24 24",
                                                                                className: "jsx-67200f06211e6dae" + " " + "w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300",
                                                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                                                                                    strokeLinecap: "round",
                                                                                    strokeLinejoin: "round",
                                                                                    strokeWidth: 2,
                                                                                    d: "M14 5l7 7m0 0l-7 7m7-7H3",
                                                                                    className: "jsx-67200f06211e6dae"
                                                                                }, void 0, false, {
                                                                                    fileName: "<[project]/app/homepage.tsx>",
                                                                                    lineNumber: 663,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "<[project]/app/homepage.tsx>",
                                                                                lineNumber: 662,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "<[project]/app/homepage.tsx>",
                                                                        lineNumber: 657,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "<[project]/app/homepage.tsx>",
                                                                lineNumber: 649,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/app/homepage.tsx>",
                                                        lineNumber: 637,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/app/homepage.tsx>",
                                                lineNumber: 625,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "jsx-67200f06211e6dae" + " " + "absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-emerald-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                                            }, void 0, false, {
                                                fileName: "<[project]/app/homepage.tsx>",
                                                lineNumber: 671,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, tour.id, true, {
                                        fileName: "<[project]/app/homepage.tsx>",
                                        lineNumber: 611,
                                        columnNumber: 19
                                    }, this);
                                }) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "jsx-67200f06211e6dae" + " " + "col-span-3 text-center text-gray-500",
                                    children: "Henüz popüler tur bulunmuyor."
                                }, void 0, false, {
                                    fileName: "<[project]/app/homepage.tsx>",
                                    lineNumber: 676,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/app/homepage.tsx>",
                                lineNumber: 591,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "jsx-67200f06211e6dae" + " " + "text-center mt-16",
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/tours",
                                    className: "group inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 text-white rounded-full  transition-all duration-300 hover:bg-emerald-600 transform hover:-translate-y-1",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                            className: "jsx-67200f06211e6dae",
                                            children: "TÜM TURLARI GÖRÜNTÜLE"
                                        }, void 0, false, {
                                            fileName: "<[project]/app/homepage.tsx>",
                                            lineNumber: 689,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            className: "jsx-67200f06211e6dae" + " " + "w-5 h-5 transform group-hover:translate-x-1 transition-transform",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "2",
                                                d: "M17 8l4 4m0 0l-4 4m4-4H3",
                                                className: "jsx-67200f06211e6dae"
                                            }, void 0, false, {
                                                fileName: "<[project]/app/homepage.tsx>",
                                                lineNumber: 696,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/app/homepage.tsx>",
                                            lineNumber: 690,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/app/homepage.tsx>",
                                    lineNumber: 684,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/app/homepage.tsx>",
                                lineNumber: 683,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/app/homepage.tsx>",
                        lineNumber: 552,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/app/homepage.tsx>",
                lineNumber: 526,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("section", {
                className: "jsx-67200f06211e6dae" + " " + "relative bg-[#f1dbc4] pt-20 pb-36 z-20",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "jsx-67200f06211e6dae" + " " + "container mx-auto px-4 relative",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "jsx-67200f06211e6dae" + " " + "text-center mb-20",
                            children: isServicesLoading ? // Loading state
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "jsx-67200f06211e6dae" + " " + "animate-pulse space-y-4",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "jsx-67200f06211e6dae" + " " + "h-8 bg-white/20 rounded w-40 mx-auto"
                                    }, void 0, false, {
                                        fileName: "<[project]/app/homepage.tsx>",
                                        lineNumber: 716,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "jsx-67200f06211e6dae" + " " + "h-12 bg-white/20 rounded w-64 mx-auto"
                                    }, void 0, false, {
                                        fileName: "<[project]/app/homepage.tsx>",
                                        lineNumber: 717,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/app/homepage.tsx>",
                                lineNumber: 715,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "jsx-67200f06211e6dae" + " " + "inline-block mb-4",
                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                            className: "jsx-67200f06211e6dae" + " " + "text-sm font-semibold text-[#1A2A1A] tracking-[0.2em] uppercase bg-white/10 px-6 py-2 rounded-full backdrop-blur-sm border border-white/20",
                                            children: sectionData?.section_subtitle || "HİZMETLERİMİZ"
                                        }, void 0, false, {
                                            fileName: "<[project]/app/homepage.tsx>",
                                            lineNumber: 722,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/app/homepage.tsx>",
                                        lineNumber: 721,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h2", {
                                        className: "jsx-67200f06211e6dae" + " " + "font-butler font-bold text-4xl",
                                        children: sectionData?.section_title || "Premium Seyahat Deneyimi"
                                    }, void 0, false, {
                                        fileName: "<[project]/app/homepage.tsx>",
                                        lineNumber: 726,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "jsx-67200f06211e6dae" + " " + "w-24 h-1 bg-[#1A2A1A] mx-auto mt-6 rounded-full"
                                    }, void 0, false, {
                                        fileName: "<[project]/app/homepage.tsx>",
                                        lineNumber: 729,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "<[project]/app/homepage.tsx>",
                            lineNumber: 712,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "jsx-67200f06211e6dae" + " " + "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 mb-20",
                            children: isServicesLoading ? // Loading state
                            [
                                ...Array(7)
                            ].map((_, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "jsx-67200f06211e6dae" + " " + "animate-pulse",
                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "jsx-67200f06211e6dae" + " " + "bg-white/20 rounded-3xl h-[200px]"
                                    }, void 0, false, {
                                        fileName: "<[project]/app/homepage.tsx>",
                                        lineNumber: 740,
                                        columnNumber: 19
                                    }, this)
                                }, index, false, {
                                    fileName: "<[project]/app/homepage.tsx>",
                                    lineNumber: 739,
                                    columnNumber: 17
                                }, this)) : services.map((service)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                    onClick: ()=>setSelectedService(service),
                                    className: "jsx-67200f06211e6dae" + " " + `group cursor-pointer flex flex-col items-center p-8 
                    backdrop-blur-lg rounded-3xl border shadow-xl
                    transform hover:scale-105 hover:-translate-y-1
                    transition-all duration-300 ease-out
                    active:scale-95 active:shadow-inner
                    ${selectedService?.id === service.id ? 'bg-white/30 border-white/20 shadow-2xl' : 'bg-white/20 border-white/10'}`,
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "jsx-67200f06211e6dae" + " " + `mb-4 p-4 rounded-2xl transition-colors duration-300
                    ${selectedService?.id === service.id ? 'bg-white/60 text-emerald-600' : 'bg-white/40 text-[#1A2A1A]'}`,
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                dangerouslySetInnerHTML: {
                                                    __html: service.icon_svg
                                                },
                                                className: "jsx-67200f06211e6dae" + " " + "w-12 h-12"
                                            }, void 0, false, {
                                                fileName: "<[project]/app/homepage.tsx>",
                                                lineNumber: 764,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/app/homepage.tsx>",
                                            lineNumber: 758,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                            className: "jsx-67200f06211e6dae" + " " + `font-butler font-bold text-base mb-2 transition-colors
                    ${selectedService?.id === service.id ? 'text-emerald-600' : 'text-[#1A2A1A]'}`,
                                            children: service.name
                                        }, void 0, false, {
                                            fileName: "<[project]/app/homepage.tsx>",
                                            lineNumber: 769,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                            className: "jsx-67200f06211e6dae" + " " + "text-sm text-[#1A2A1A]/80 text-center",
                                            children: service.short_description
                                        }, void 0, false, {
                                            fileName: "<[project]/app/homepage.tsx>",
                                            lineNumber: 777,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, service.id, true, {
                                    fileName: "<[project]/app/homepage.tsx>",
                                    lineNumber: 745,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "<[project]/app/homepage.tsx>",
                            lineNumber: 735,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "jsx-67200f06211e6dae" + " " + "grid md:grid-cols-2 gap-16 items-center",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "jsx-67200f06211e6dae" + " " + "space-y-8",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                            className: "jsx-67200f06211e6dae" + " " + "font-butler font-bold text-4xl font-bold text-[#1A2A1A] leading-tight",
                                            children: [
                                                selectedService?.name || "Profesyonel Seyahat",
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                    className: "jsx-67200f06211e6dae" + " " + "block",
                                                    children: "Hizmetleri"
                                                }, void 0, false, {
                                                    fileName: "<[project]/app/homepage.tsx>",
                                                    lineNumber: 790,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/app/homepage.tsx>",
                                            lineNumber: 788,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                            className: "jsx-67200f06211e6dae" + " " + "text-lg text-[#1A2A1A]/80 leading-relaxed",
                                            children: selectedService?.long_description || "Seyahatinizin her aşamasında yanınızdayız. Otel rezervasyonlarından, ulaşım planlamasına, rehberlik hizmetlerinden, özel aktivite organizasyonlarına kadar tüm ihtiyaçlarınızı karşılıyoruz."
                                        }, void 0, false, {
                                            fileName: "<[project]/app/homepage.tsx>",
                                            lineNumber: 792,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/app/homepage.tsx>",
                                    lineNumber: 787,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "jsx-67200f06211e6dae" + " " + "relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: selectedService?.image_path ? supabase.storage.from('site-images').getPublicUrl(selectedService.image_path).data.publicUrl : "/images/services/travel-service.jpg",
                                            alt: selectedService?.name || "Seyahat Hizmetleri",
                                            fill: true,
                                            className: "object-cover"
                                        }, void 0, false, {
                                            fileName: "<[project]/app/homepage.tsx>",
                                            lineNumber: 798,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "jsx-67200f06211e6dae" + " " + "absolute inset-0 bg-gradient-to-t from-[#1A2A1A]/60 via-[#1A2A1A]/20 to-transparent"
                                        }, void 0, false, {
                                            fileName: "<[project]/app/homepage.tsx>",
                                            lineNumber: 809,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "jsx-67200f06211e6dae" + " " + "absolute bottom-8 left-8 right-8 p-6 bg-white/80 backdrop-blur-sm rounded-2xl",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "jsx-67200f06211e6dae" + " " + "flex items-center gap-4",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "jsx-67200f06211e6dae" + " " + "w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-white",
                                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            className: "jsx-67200f06211e6dae" + " " + "w-6 h-6",
                                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: "2",
                                                                d: "M5 13l4 4L19 7",
                                                                className: "jsx-67200f06211e6dae"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/app/homepage.tsx>",
                                                                lineNumber: 814,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "<[project]/app/homepage.tsx>",
                                                            lineNumber: 813,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "<[project]/app/homepage.tsx>",
                                                        lineNumber: 812,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "jsx-67200f06211e6dae",
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h4", {
                                                                className: "jsx-67200f06211e6dae" + " " + "text-[#1A2A1A] font-bold",
                                                                children: "Memnuniyet Garantisi"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/app/homepage.tsx>",
                                                                lineNumber: 818,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                className: "jsx-67200f06211e6dae" + " " + "text-[#1A2A1A]/60 text-sm",
                                                                children: "En iyi hizmeti sunmak için buradayız"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/app/homepage.tsx>",
                                                                lineNumber: 819,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/app/homepage.tsx>",
                                                        lineNumber: 817,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/app/homepage.tsx>",
                                                lineNumber: 811,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/app/homepage.tsx>",
                                            lineNumber: 810,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/app/homepage.tsx>",
                                    lineNumber: 797,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/app/homepage.tsx>",
                            lineNumber: 786,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/app/homepage.tsx>",
                    lineNumber: 710,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/app/homepage.tsx>",
                lineNumber: 709,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("section", {
                className: "jsx-67200f06211e6dae" + " " + "relative bg-[#f1dbc4] py-20 lg:py-32",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "jsx-67200f06211e6dae" + " " + "absolute inset-0 z-0",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/images/background.png",
                            alt: "",
                            fill: true,
                            className: "object-cover opacity-100",
                            priority: true,
                            quality: 100
                        }, void 0, false, {
                            fileName: "<[project]/app/homepage.tsx>",
                            lineNumber: 832,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/app/homepage.tsx>",
                        lineNumber: 831,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "jsx-67200f06211e6dae" + " " + "max-w-7xl mx-auto px-4 relative z-10",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "jsx-67200f06211e6dae" + " " + "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 min-h-[600px] lg:min-h-[800px]",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "jsx-67200f06211e6dae" + " " + "relative h-[450px] md:h-[600px] lg:h-full order-2 lg:order-1",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "jsx-67200f06211e6dae" + " " + "rounded-[30px] overflow-hidden h-full relative shadow-2xl",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/images/blog/japonya.jpg",
                                                alt: "Antelope Canyon",
                                                fill: true,
                                                className: "object-cover rounded-[30px] transform hover:scale-105 transition-transform duration-700",
                                                priority: true,
                                                style: {
                                                    borderRadius: '30px'
                                                }
                                            }, void 0, false, {
                                                fileName: "<[project]/app/homepage.tsx>",
                                                lineNumber: 849,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/app/homepage.tsx>",
                                            lineNumber: 848,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "jsx-67200f06211e6dae" + " " + "absolute top-1/2 -translate-y-1/2 right-0 w-[60%] translate-x-[15%] hidden md:block",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "jsx-67200f06211e6dae" + " " + "rounded-[30px] overflow-hidden aspect-[3/4] shadow-2xl relative ring-4 ring-white/10 backdrop-blur",
                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/images/blog/japonya2.jpg",
                                                    alt: "Golden Gate Bridge",
                                                    fill: true,
                                                    className: "object-cover rounded-[30px] transform hover:scale-105 transition-transform duration-700",
                                                    style: {
                                                        borderRadius: '30px'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "<[project]/app/homepage.tsx>",
                                                    lineNumber: 862,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/app/homepage.tsx>",
                                                lineNumber: 861,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/app/homepage.tsx>",
                                            lineNumber: 860,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/app/homepage.tsx>",
                                    lineNumber: 846,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "jsx-67200f06211e6dae" + " " + "order-1 lg:order-2 flex flex-col justify-center",
                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "jsx-67200f06211e6dae" + " " + "space-y-8",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "jsx-67200f06211e6dae" + " " + "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                        className: "jsx-67200f06211e6dae" + " " + "inline-block text-emerald-400 text-sm font-semibold tracking-wider uppercase",
                                                        children: "SEYAHAT REHBERİ"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/app/homepage.tsx>",
                                                        lineNumber: 877,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                                        className: "jsx-67200f06211e6dae" + " " + "font-butler font-bold text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight",
                                                        children: [
                                                            "Japonya'nın Zamansız Güzelliğini Keşfet",
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                                className: "jsx-67200f06211e6dae" + " " + "block mt-2 text-emerald-400",
                                                                children: "bilmeniz gerekenler"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/app/homepage.tsx>",
                                                                lineNumber: 883,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/app/homepage.tsx>",
                                                        lineNumber: 880,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/app/homepage.tsx>",
                                                lineNumber: 876,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                className: "jsx-67200f06211e6dae" + " " + "text-white/90 text-lg leading-relaxed",
                                                children: "Sakura ağaçlarıyla bezeli sokaklardan geleneksel tapınaklara, Japonya'nın hem modern hem tarihî yüzünü keşfedeceğiniz unutulmaz bir yolculuğa hazır olun!"
                                            }, void 0, false, {
                                                fileName: "<[project]/app/homepage.tsx>",
                                                lineNumber: 887,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/blog",
                                                className: "inline-flex items-center gap-3 px-8 py-4 bg-emerald-500/10 text-emerald-400 rounded-full  hover:bg-emerald-500 hover:text-white transition-all duration-300 group",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                        className: "jsx-67200f06211e6dae",
                                                        children: "Blog'a Git"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/app/homepage.tsx>",
                                                        lineNumber: 896,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        className: "jsx-67200f06211e6dae" + " " + "w-5 h-5 transform group-hover:translate-x-1 transition-transform",
                                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M17 8l4 4m0 0l-4 4m4-4H3",
                                                            className: "jsx-67200f06211e6dae"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/app/homepage.tsx>",
                                                            lineNumber: 903,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "<[project]/app/homepage.tsx>",
                                                        lineNumber: 897,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/app/homepage.tsx>",
                                                lineNumber: 891,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/app/homepage.tsx>",
                                        lineNumber: 875,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/app/homepage.tsx>",
                                    lineNumber: 874,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/app/homepage.tsx>",
                            lineNumber: 844,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/app/homepage.tsx>",
                        lineNumber: 843,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/app/homepage.tsx>",
                lineNumber: 829,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("section", {
                className: "jsx-67200f06211e6dae" + " " + "relative bg-[#f1dbc4] py-24",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "jsx-67200f06211e6dae" + " " + "container mx-auto px-4",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "jsx-67200f06211e6dae" + " " + "text-center mb-20",
                            children: isMapLoading ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "jsx-67200f06211e6dae" + " " + "animate-pulse space-y-4",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "jsx-67200f06211e6dae" + " " + "h-4 bg-gray-200 rounded w-40 mx-auto"
                                    }, void 0, false, {
                                        fileName: "<[project]/app/homepage.tsx>",
                                        lineNumber: 919,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "jsx-67200f06211e6dae" + " " + "h-8 bg-gray-200 rounded w-64 mx-auto"
                                    }, void 0, false, {
                                        fileName: "<[project]/app/homepage.tsx>",
                                        lineNumber: 920,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/app/homepage.tsx>",
                                lineNumber: 918,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "jsx-67200f06211e6dae" + " " + "relative inline-block mb-3",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "jsx-67200f06211e6dae" + " " + "absolute -bottom-1 -left-1 w-12 h-12 bg-emerald-500/10 rounded-full blur-xl"
                                            }, void 0, false, {
                                                fileName: "<[project]/app/homepage.tsx>",
                                                lineNumber: 927,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "jsx-67200f06211e6dae" + " " + "absolute -top-1 -right-1 w-12 h-12 bg-emerald-500/10 rounded-full blur-xl"
                                            }, void 0, false, {
                                                fileName: "<[project]/app/homepage.tsx>",
                                                lineNumber: 928,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/app/homepage.tsx>",
                                        lineNumber: 925,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h2", {
                                        className: "jsx-67200f06211e6dae" + " " + "font-butler font-bold text-4xl md:text-5xl text-gray-900 mt-4 mb-3 relative inline-block",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                className: "jsx-67200f06211e6dae" + " " + "relative",
                                                children: [
                                                    "Dünya Genelinde",
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
                                                        viewBox: "0 0 200 8",
                                                        preserveAspectRatio: "none",
                                                        className: "jsx-67200f06211e6dae" + " " + "absolute -bottom-2 left-0 w-full h-1.5",
                                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                                                            d: "M0,5 Q50,2 100,5 T200,5",
                                                            stroke: "#10b981",
                                                            strokeWidth: "2",
                                                            fill: "none",
                                                            className: "jsx-67200f06211e6dae"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/app/homepage.tsx>",
                                                            lineNumber: 936,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "<[project]/app/homepage.tsx>",
                                                        lineNumber: 935,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/app/homepage.tsx>",
                                                lineNumber: 933,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                className: "jsx-67200f06211e6dae" + " " + "text-emerald-700",
                                                children: " Hizmet Verdiğimiz"
                                            }, void 0, false, {
                                                fileName: "<[project]/app/homepage.tsx>",
                                                lineNumber: 939,
                                                columnNumber: 19
                                            }, this),
                                            " Destinasyonlar"
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/app/homepage.tsx>",
                                        lineNumber: 932,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "jsx-67200f06211e6dae" + " " + "mt-6 relative",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                className: "jsx-67200f06211e6dae" + " " + "text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-light italic",
                                                children: [
                                                    '"Dünyayı Keşfetmeye ',
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                        className: "jsx-67200f06211e6dae" + " " + "font-medium text-emerald-700 not-italic",
                                                        children: "Bir İnci"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/app/homepage.tsx>",
                                                        lineNumber: 945,
                                                        columnNumber: 41
                                                    }, this),
                                                    ' Yeter"'
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/app/homepage.tsx>",
                                                lineNumber: 944,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "jsx-67200f06211e6dae" + " " + "flex items-center justify-center mt-8",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "jsx-67200f06211e6dae" + " " + "w-16 h-0.5 bg-gray-300 rounded-full"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/app/homepage.tsx>",
                                                        lineNumber: 950,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "jsx-67200f06211e6dae" + " " + "mx-4",
                                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
                                                            fill: "currentColor",
                                                            viewBox: "0 0 20 20",
                                                            className: "jsx-67200f06211e6dae" + " " + "w-6 h-6 text-emerald-500",
                                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                                                                fillRule: "evenodd",
                                                                d: "M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z",
                                                                clipRule: "evenodd",
                                                                className: "jsx-67200f06211e6dae"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/app/homepage.tsx>",
                                                                lineNumber: 953,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "<[project]/app/homepage.tsx>",
                                                            lineNumber: 952,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "<[project]/app/homepage.tsx>",
                                                        lineNumber: 951,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "jsx-67200f06211e6dae" + " " + "w-16 h-0.5 bg-gray-300 rounded-full"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/app/homepage.tsx>",
                                                        lineNumber: 956,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/app/homepage.tsx>",
                                                lineNumber: 949,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/app/homepage.tsx>",
                                        lineNumber: 943,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "<[project]/app/homepage.tsx>",
                            lineNumber: 916,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "jsx-67200f06211e6dae" + " " + "relative max-w-7xl mx-auto",
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "jsx-67200f06211e6dae" + " " + "relative",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: getStorageUrl(mapSettings?.map_image_path) || '/images/turkey-map.png',
                                        alt: "Türkiye Haritası",
                                        width: 2000,
                                        height: 1200,
                                        className: "w-full h-auto rounded-xl "
                                    }, void 0, false, {
                                        fileName: "<[project]/app/homepage.tsx>",
                                        lineNumber: 967,
                                        columnNumber: 15
                                    }, this),
                                    mapLocations.map((location)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            style: {
                                                left: `${location.x_position}%`,
                                                top: `${location.y_position}%`
                                            },
                                            className: "jsx-67200f06211e6dae" + " " + "absolute group",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                    onClick: ()=>setActiveLocation(location.id === activeLocation ? null : location.id),
                                                    className: "jsx-67200f06211e6dae" + " " + "relative z-10 flex items-center justify-center transition-all duration-300 transform group-hover:scale-110",
                                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
                                                        fill: "currentColor",
                                                        viewBox: "0 0 20 20",
                                                        className: "jsx-67200f06211e6dae" + " " + "w-8 h-8 text-emerald-600 drop-shadow-lg group-hover:text-emerald-500 transition-colors duration-300",
                                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                                                            fillRule: "evenodd",
                                                            d: "M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z",
                                                            clipRule: "evenodd",
                                                            className: "jsx-67200f06211e6dae"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/app/homepage.tsx>",
                                                            lineNumber: 995,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "<[project]/app/homepage.tsx>",
                                                        lineNumber: 990,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "<[project]/app/homepage.tsx>",
                                                    lineNumber: 986,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "jsx-67200f06211e6dae" + " " + `absolute z-20 bottom-full left-1/2 -translate-x-1/2 mb-4 w-72 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 ${activeLocation === location.id ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`,
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                            className: "jsx-67200f06211e6dae" + " " + "p-5",
                                                            children: [
                                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                    className: "jsx-67200f06211e6dae" + " " + "mb-3",
                                                                    children: [
                                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                                                            className: "jsx-67200f06211e6dae" + " " + "font-butler text-xl text-gray-800 font-bold",
                                                                            children: location.name
                                                                        }, void 0, false, {
                                                                            fileName: "<[project]/app/homepage.tsx>",
                                                                            lineNumber: 1015,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                            className: "jsx-67200f06211e6dae" + " " + "w-12 h-0.5 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full mt-2"
                                                                        }, void 0, false, {
                                                                            fileName: "<[project]/app/homepage.tsx>",
                                                                            lineNumber: 1018,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "<[project]/app/homepage.tsx>",
                                                                    lineNumber: 1014,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                    className: "jsx-67200f06211e6dae" + " " + "text-sm leading-relaxed text-gray-600 mb-4",
                                                                    children: location.description
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/app/homepage.tsx>",
                                                                    lineNumber: 1021,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: `/destination/${location.slug || location.id}`,
                                                                    className: "inline-flex items-center gap-1 text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors",
                                                                    children: [
                                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                                            className: "jsx-67200f06211e6dae",
                                                                            children: "Keşfet"
                                                                        }, void 0, false, {
                                                                            fileName: "<[project]/app/homepage.tsx>",
                                                                            lineNumber: 1029,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
                                                                            fill: "none",
                                                                            stroke: "currentColor",
                                                                            viewBox: "0 0 24 24",
                                                                            className: "jsx-67200f06211e6dae" + " " + "w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300",
                                                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                strokeWidth: 2,
                                                                                d: "M14 5l7 7m0 0l-7 7m7-7H3",
                                                                                className: "jsx-67200f06211e6dae"
                                                                            }, void 0, false, {
                                                                                fileName: "<[project]/app/homepage.tsx>",
                                                                                lineNumber: 1031,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "<[project]/app/homepage.tsx>",
                                                                            lineNumber: 1030,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "<[project]/app/homepage.tsx>",
                                                                    lineNumber: 1025,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "<[project]/app/homepage.tsx>",
                                                            lineNumber: 1012,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                            onClick: (e)=>{
                                                                e.stopPropagation();
                                                                setActiveLocation(null);
                                                            },
                                                            className: "jsx-67200f06211e6dae" + " " + "absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors",
                                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                viewBox: "0 0 24 24",
                                                                className: "jsx-67200f06211e6dae" + " " + "w-3 h-3",
                                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: 2,
                                                                    d: "M6 18L18 6M6 6l12 12",
                                                                    className: "jsx-67200f06211e6dae"
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/app/homepage.tsx>",
                                                                    lineNumber: 1045,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "<[project]/app/homepage.tsx>",
                                                                lineNumber: 1044,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "<[project]/app/homepage.tsx>",
                                                            lineNumber: 1037,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/app/homepage.tsx>",
                                                    lineNumber: 1004,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, location.id, true, {
                                            fileName: "<[project]/app/homepage.tsx>",
                                            lineNumber: 977,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/app/homepage.tsx>",
                                lineNumber: 966,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/app/homepage.tsx>",
                            lineNumber: 964,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/app/homepage.tsx>",
                    lineNumber: 914,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/app/homepage.tsx>",
                lineNumber: 913,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("section", {
                className: "jsx-67200f06211e6dae" + " " + "relative h-48 overflow-hidden bg-[#fefefe]",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "jsx-67200f06211e6dae" + " " + "absolute inset-0 flex justify-center",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            style: {
                                minWidth: '2400px'
                            },
                            className: "jsx-67200f06211e6dae" + " " + "relative w-full",
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/images/partner-section-bg.png",
                                alt: "",
                                fill: true,
                                className: "object-contain",
                                priority: true,
                                style: {
                                    maxHeight: '192px',
                                    backgroundColor: '#f1dbc4'
                                }
                            }, void 0, false, {
                                fileName: "<[project]/app/homepage.tsx>",
                                lineNumber: 1063,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/app/homepage.tsx>",
                            lineNumber: 1062,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/app/homepage.tsx>",
                        lineNumber: 1061,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "jsx-67200f06211e6dae" + " " + "relative h-full flex items-center max-w-[1920px] mx-auto",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "jsx-67200f06211e6dae" + " " + "flex animate-scroll",
                            children: isPartnersLoading ? // Loading state
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "jsx-67200f06211e6dae" + " " + "flex min-w-max items-center",
                                children: [
                                    ...Array(5)
                                ].map((_, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "jsx-67200f06211e6dae" + " " + "w-[120px] h-[40px] bg-gray-200 animate-pulse mx-8"
                                    }, index, false, {
                                        fileName: "<[project]/app/homepage.tsx>",
                                        lineNumber: 1085,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "<[project]/app/homepage.tsx>",
                                lineNumber: 1083,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "jsx-67200f06211e6dae" + " " + "flex min-w-max items-center",
                                        children: partners.map((partner)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: supabase.storage.from('site-images').getPublicUrl(partner.logo_path).data.publicUrl,
                                                alt: partner.name,
                                                width: 120,
                                                height: 40,
                                                className: "object-contain brightness-0 invert mx-8"
                                            }, partner.id, false, {
                                                fileName: "<[project]/app/homepage.tsx>",
                                                lineNumber: 1093,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "<[project]/app/homepage.tsx>",
                                        lineNumber: 1091,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "jsx-67200f06211e6dae" + " " + "flex min-w-max items-center",
                                        children: partners.map((partner)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: supabase.storage.from('site-images').getPublicUrl(partner.logo_path).data.publicUrl,
                                                alt: partner.name,
                                                width: 120,
                                                height: 40,
                                                className: "object-contain brightness-0 invert mx-8"
                                            }, `${partner.id}-2`, false, {
                                                fileName: "<[project]/app/homepage.tsx>",
                                                lineNumber: 1109,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "<[project]/app/homepage.tsx>",
                                        lineNumber: 1107,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "jsx-67200f06211e6dae" + " " + "flex min-w-max items-center",
                                        children: partners.map((partner)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: supabase.storage.from('site-images').getPublicUrl(partner.logo_path).data.publicUrl,
                                                alt: partner.name,
                                                width: 120,
                                                height: 40,
                                                className: "object-contain brightness-0 invert mx-8"
                                            }, `${partner.id}-3`, false, {
                                                fileName: "<[project]/app/homepage.tsx>",
                                                lineNumber: 1125,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "<[project]/app/homepage.tsx>",
                                        lineNumber: 1123,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "<[project]/app/homepage.tsx>",
                            lineNumber: 1080,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/app/homepage.tsx>",
                        lineNumber: 1078,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/app/homepage.tsx>",
                lineNumber: 1058,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$stats$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "<[project]/app/homepage.tsx>",
                lineNumber: 1145,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "67200f06211e6dae",
                children: "@media(max-width:767px){.search-card{display:none!important}}@media(max-width:1023px){.mobile-header{display:block!important;z-index:9999!important}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/app/homepage.tsx>",
        lineNumber: 381,
        columnNumber: 5
    }, this);
}
_s(HomePage, "shWTBlL0CypZufmX7RKaGEOpxZ4=");
_c = HomePage;
var _c;
__turbopack_refresh__.register(_c, "HomePage");

})()),
"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),
}]);

//# sourceMappingURL=_448361._.js.map