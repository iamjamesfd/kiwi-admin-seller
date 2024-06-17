"use strict";
/* __placeholder__ */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("@iconify/vue");
// import { data } from '@/store'
var DashboardHeader_vue_1 = require("@/components/layout/DashboardHeader.vue");
var VirtualTable_vue_1 = require("@/components/common/VirtualTable.vue");
var _a = await Promise.resolve().then(function () { return require('vue'); }), defineProps = _a.defineProps, defineSlots = _a.defineSlots, defineEmits = _a.defineEmits, defineExpose = _a.defineExpose, defineModel = _a.defineModel, defineOptions = _a.defineOptions, withDefaults = _a.withDefaults;
// const head = ['Rasm', 'Mahsulot nomi', 'Mahsulot ID', 'Narxi', 'Sotildi', 'Qoldiq']
var head = [
    { label: "Rasm", key: 'img', type: 'image' },
    { label: "Mahsulot nomi", key: 'name' },
    { label: "Mahsulot ID", key: 'id' },
    { label: "Narxi", key: 'price', formatter: function (val) { return val.price + val.currency; } },
    { label: "Sotildi", key: 'sold' },
    { label: "Qoldiq", key: 'availibleProducts' },
];
var body = [
    { img: null, name: 'Macbook Pro 2019', id: "#" + 1234, price: { currency: 'uzs', price: 123.22 }, sold: 142, availibleProducts: 38 },
    { img: null, name: 'Macbook Pro 2016', id: "#" + 1234, price: { currency: 'uzs', price: 123.42 }, sold: 142, availibleProducts: 38 },
    { img: null, name: 'Macbook Pro 2015', id: "#" + 1234, price: { currency: 'uzs', price: 124253.23 }, sold: 142, availibleProducts: 38 },
    { img: null, name: 'Macbook Pro 2014', id: "#" + 1234, price: { currency: 'usd', price: 123243.22 }, sold: 142, availibleProducts: 38 },
    { img: null, name: 'Macbook Pro 2019', id: "#" + 1234, price: { currency: 'usd', price: 123.22 }, sold: 142, availibleProducts: 38 },
    { img: null, name: 'Macbook Pro 2019', id: "#" + 1234, price: { currency: 'usd', price: 123.22 }, sold: 142, availibleProducts: 38 },
    { img: null, name: 'Macbook Pro 2019', id: "#" + 1234, price: { currency: 'usd', price: 123.22 }, sold: 142, availibleProducts: 38 },
    { img: null, name: 'Macbook Pro 2019', id: "#" + 1234, price: { currency: 'usd', price: 123.22 }, sold: 142, availibleProducts: 38 },
    { img: null, name: 'Macbook Pro 2019', id: "#" + 1234, price: { currency: 'usd', price: 123.22 }, sold: 142, availibleProducts: 38 },
];
var __VLS_fnComponent = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({});
var __VLS_functionalComponentProps;
var __VLS_modelEmitsType = {};
function __VLS_template() {
    var __VLS_ctx;
    /* Components */
    var __VLS_otherComponents;
    var __VLS_own;
    var __VLS_localComponents;
    var __VLS_components;
    var __VLS_styleScopedClasses;
    var __VLS_resolvedLocalAndGlobalComponents;
    // @ts-ignore
    [DashboardHeader_vue_1.default,];
    // @ts-ignore
    var __VLS_0 = __VLS_asFunctionalComponent(DashboardHeader_vue_1.default, new DashboardHeader_vue_1.default({ title: ("Analitika"), }));
    var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([{ title: ("Analitika"), }], __VLS_functionalComponentArgsRest(__VLS_0), false));
    ({}({ title: ("Analitika"), }));
    var __VLS_4 = __VLS_pickFunctionalComponentCtx(DashboardHeader_vue_1.default, __VLS_1);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("grid grid-cols-12 gap-3 p-6") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("bg-white p-5 space-y-2 rounded-[10px] col-span-3") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)(__assign({ class: ("text-sm") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)(__assign({ class: ("text-black text-2xl font-semibold") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: ("text-base") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("text-[#2EC076] text-[12px] flex items-center gap-2") }));
    // @ts-ignore
    var __VLS_5 = {}
        .Icon;
    ({}.Icon);
    ({}.Icon);
    __VLS_components.Icon;
    __VLS_components.Icon;
    // @ts-ignore
    [vue_1.Icon, vue_1.Icon,];
    // @ts-ignore
    var __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5(__assign({ icon: ("iconoir:stat-up") }, { class: ("w-4 h-4") })));
    var __VLS_7 = __VLS_6.apply(void 0, __spreadArray([__assign({ icon: ("iconoir:stat-up") }, { class: ("w-4 h-4") })], __VLS_functionalComponentArgsRest(__VLS_6), false));
    ({}(__assign({ icon: ("iconoir:stat-up") }, { class: ("w-4 h-4") })));
    var __VLS_10 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: ("font-light") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("bg-white p-5 space-y-2 rounded-[10px] col-span-3") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)(__assign({ class: ("text-sm") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)(__assign({ class: ("text-black text-2xl font-semibold") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("text-[#2EC076] text-[12px] flex items-center gap-2") }));
    // @ts-ignore
    var __VLS_11 = {}
        .Icon;
    ({}.Icon);
    ({}.Icon);
    __VLS_components.Icon;
    __VLS_components.Icon;
    // @ts-ignore
    [vue_1.Icon, vue_1.Icon,];
    // @ts-ignore
    var __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11(__assign({ icon: ("iconoir:stat-up") }, { class: ("w-4 h-4") })));
    var __VLS_13 = __VLS_12.apply(void 0, __spreadArray([__assign({ icon: ("iconoir:stat-up") }, { class: ("w-4 h-4") })], __VLS_functionalComponentArgsRest(__VLS_12), false));
    ({}(__assign({ icon: ("iconoir:stat-up") }, { class: ("w-4 h-4") })));
    var __VLS_16 = __VLS_pickFunctionalComponentCtx(__VLS_11, __VLS_13);
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: ("font-light") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("bg-white p-5 space-y-2 rounded-[10px] col-span-3") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)(__assign({ class: ("text-sm") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)(__assign({ class: ("text-black text-2xl font-semibold") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: ("text-base") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("text-[#2EC076] text-[12px] flex items-center gap-2") }));
    // @ts-ignore
    var __VLS_17 = {}
        .Icon;
    ({}.Icon);
    ({}.Icon);
    __VLS_components.Icon;
    __VLS_components.Icon;
    // @ts-ignore
    [vue_1.Icon, vue_1.Icon,];
    // @ts-ignore
    var __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17(__assign({ icon: ("iconoir:stat-up") }, { class: ("w-4 h-4") })));
    var __VLS_19 = __VLS_18.apply(void 0, __spreadArray([__assign({ icon: ("iconoir:stat-up") }, { class: ("w-4 h-4") })], __VLS_functionalComponentArgsRest(__VLS_18), false));
    ({}(__assign({ icon: ("iconoir:stat-up") }, { class: ("w-4 h-4") })));
    var __VLS_22 = __VLS_pickFunctionalComponentCtx(__VLS_17, __VLS_19);
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: ("font-light") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("pt-4 overflow-hidden bg-white rounded-[10px] col-span-9") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex items-center justify-between px-4") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)(__assign({ class: ("text-xl text-black") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)(__assign({ class: ("bg-white border px-3 py-2 rounded-lg text-black text-sm") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({});
    // @ts-ignore
    [VirtualTable_vue_1.default,];
    // @ts-ignore
    var __VLS_23 = __VLS_asFunctionalComponent(VirtualTable_vue_1.default, new VirtualTable_vue_1.default({ head: (__VLS_ctx.head), body: (__VLS_ctx.body), }));
    var __VLS_24 = __VLS_23.apply(void 0, __spreadArray([{ head: (__VLS_ctx.head), body: (__VLS_ctx.body), }], __VLS_functionalComponentArgsRest(__VLS_23), false));
    ({}({ head: (__VLS_ctx.head), body: (__VLS_ctx.body), }));
    // @ts-ignore
    [head, body,];
    var __VLS_27 = __VLS_pickFunctionalComponentCtx(VirtualTable_vue_1.default, __VLS_24);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['grid'];
        __VLS_styleScopedClasses['grid-cols-12'];
        __VLS_styleScopedClasses['gap-3'];
        __VLS_styleScopedClasses['p-6'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['p-5'];
        __VLS_styleScopedClasses['space-y-2'];
        __VLS_styleScopedClasses['rounded-[10px]'];
        __VLS_styleScopedClasses['col-span-3'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['text-black'];
        __VLS_styleScopedClasses['text-2xl'];
        __VLS_styleScopedClasses['font-semibold'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['text-[#2EC076]'];
        __VLS_styleScopedClasses['text-[12px]'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['gap-2'];
        __VLS_styleScopedClasses['w-4'];
        __VLS_styleScopedClasses['h-4'];
        __VLS_styleScopedClasses['font-light'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['p-5'];
        __VLS_styleScopedClasses['space-y-2'];
        __VLS_styleScopedClasses['rounded-[10px]'];
        __VLS_styleScopedClasses['col-span-3'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['text-black'];
        __VLS_styleScopedClasses['text-2xl'];
        __VLS_styleScopedClasses['font-semibold'];
        __VLS_styleScopedClasses['text-[#2EC076]'];
        __VLS_styleScopedClasses['text-[12px]'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['gap-2'];
        __VLS_styleScopedClasses['w-4'];
        __VLS_styleScopedClasses['h-4'];
        __VLS_styleScopedClasses['font-light'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['p-5'];
        __VLS_styleScopedClasses['space-y-2'];
        __VLS_styleScopedClasses['rounded-[10px]'];
        __VLS_styleScopedClasses['col-span-3'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['text-black'];
        __VLS_styleScopedClasses['text-2xl'];
        __VLS_styleScopedClasses['font-semibold'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['text-[#2EC076]'];
        __VLS_styleScopedClasses['text-[12px]'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['gap-2'];
        __VLS_styleScopedClasses['w-4'];
        __VLS_styleScopedClasses['h-4'];
        __VLS_styleScopedClasses['font-light'];
        __VLS_styleScopedClasses['pt-4'];
        __VLS_styleScopedClasses['overflow-hidden'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['rounded-[10px]'];
        __VLS_styleScopedClasses['col-span-9'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['px-4'];
        __VLS_styleScopedClasses['text-xl'];
        __VLS_styleScopedClasses['text-black'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['px-3'];
        __VLS_styleScopedClasses['py-2'];
        __VLS_styleScopedClasses['rounded-lg'];
        __VLS_styleScopedClasses['text-black'];
        __VLS_styleScopedClasses['text-sm'];
    }
    var __VLS_slots;
    return __VLS_slots;
    var __VLS_componentsOption = {};
    var __VLS_name;
    var __VLS_defineComponent;
    var __VLS_internalComponent = __VLS_defineComponent({
        setup: function () {
            return {
                Icon: vue_1.Icon,
                DashboardHeader: DashboardHeader_vue_1.default,
                VirtualTable: VirtualTable_vue_1.default,
                head: head,
                body: body,
            };
        },
    });
}
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {};
    },
});
;
