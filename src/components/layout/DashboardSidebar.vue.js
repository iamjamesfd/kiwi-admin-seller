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
var vue_2 = require("vue");
var SidebarItem_vue_1 = require("../common/SidebarItem.vue");
var _a = await Promise.resolve().then(function () { return require('vue'); }), defineProps = _a.defineProps, defineSlots = _a.defineSlots, defineEmits = _a.defineEmits, defineExpose = _a.defineExpose, defineModel = _a.defineModel, defineOptions = _a.defineOptions, withDefaults = _a.withDefaults;
var sidebarCollapsed = (0, vue_2.ref)(true);
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
    // CSS variable injection 
    // CSS variable injection end 
    var __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("w-[312px] h-screen bg-[#26282D] relative duration-500 overflow-hidden") }, { class: (({ 'w-[72px]': __VLS_ctx.sidebarCollapsed })) }));
    __VLS_styleScopedClasses = ({ 'w-[72px]': sidebarCollapsed });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex justify-end items-center px-8 py-6 mb-10 min-h-24 overflow-hidden relative") }));
    // @ts-ignore
    var __VLS_0 = {}
        .Transition;
    ({}.Transition);
    ({}.Transition);
    __VLS_components.Transition;
    __VLS_components.Transition;
    // @ts-ignore
    [Transition, Transition,];
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ name: ("dissapear"), }));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{ name: ("dissapear"), }], __VLS_functionalComponentArgsRest(__VLS_1), false));
    ({}({ name: ("dissapear"), }));
    if (!__VLS_ctx.sidebarCollapsed) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)(__assign({ class: ("text-[28px] text-white flex-1") }));
        // @ts-ignore
        [sidebarCollapsed, sidebarCollapsed,];
    }
    (__VLS_5.slots).default;
    var __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.sidebarCollapsed = !__VLS_ctx.sidebarCollapsed;
            // @ts-ignore
            [sidebarCollapsed, sidebarCollapsed,];
        } }, { src: ("@/assets/layout-icons/sidebar-toggler.svg"), alt: ("") }), { class: ("w-[24px] h-[24px] duration-200 absolute right-6") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    // @ts-ignore
    [SidebarItem_vue_1.default,];
    // @ts-ignore
    var __VLS_6 = __VLS_asFunctionalComponent(SidebarItem_vue_1.default, new SidebarItem_vue_1.default({ name: ("Mahsulotlar"), linkName: ("products"), icon: ("lucide:box"), collapsed: ((__VLS_ctx.sidebarCollapsed)), }));
    var __VLS_7 = __VLS_6.apply(void 0, __spreadArray([{ name: ("Mahsulotlar"), linkName: ("products"), icon: ("lucide:box"), collapsed: ((__VLS_ctx.sidebarCollapsed)), }], __VLS_functionalComponentArgsRest(__VLS_6), false));
    ({}({ name: ("Mahsulotlar"), linkName: ("products"), icon: ("lucide:box"), collapsed: ((__VLS_ctx.sidebarCollapsed)), }));
    // @ts-ignore
    [sidebarCollapsed,];
    var __VLS_10 = __VLS_pickFunctionalComponentCtx(SidebarItem_vue_1.default, __VLS_7);
    // @ts-ignore
    [SidebarItem_vue_1.default,];
    // @ts-ignore
    var __VLS_11 = __VLS_asFunctionalComponent(SidebarItem_vue_1.default, new SidebarItem_vue_1.default({ name: ("Analitika"), linkName: ("analytics"), icon: ("flowbite:chart-line-up-outline"), collapsed: ((__VLS_ctx.sidebarCollapsed)), }));
    var __VLS_12 = __VLS_11.apply(void 0, __spreadArray([{ name: ("Analitika"), linkName: ("analytics"), icon: ("flowbite:chart-line-up-outline"), collapsed: ((__VLS_ctx.sidebarCollapsed)), }], __VLS_functionalComponentArgsRest(__VLS_11), false));
    ({}({ name: ("Analitika"), linkName: ("analytics"), icon: ("flowbite:chart-line-up-outline"), collapsed: ((__VLS_ctx.sidebarCollapsed)), }));
    // @ts-ignore
    [sidebarCollapsed,];
    var __VLS_15 = __VLS_pickFunctionalComponentCtx(SidebarItem_vue_1.default, __VLS_12);
    // @ts-ignore
    [SidebarItem_vue_1.default,];
    // @ts-ignore
    var __VLS_16 = __VLS_asFunctionalComponent(SidebarItem_vue_1.default, new SidebarItem_vue_1.default({ name: ("Sharhlar"), linkName: ("comments"), icon: ("ph:star"), collapsed: ((__VLS_ctx.sidebarCollapsed)), }));
    var __VLS_17 = __VLS_16.apply(void 0, __spreadArray([{ name: ("Sharhlar"), linkName: ("comments"), icon: ("ph:star"), collapsed: ((__VLS_ctx.sidebarCollapsed)), }], __VLS_functionalComponentArgsRest(__VLS_16), false));
    ({}({ name: ("Sharhlar"), linkName: ("comments"), icon: ("ph:star"), collapsed: ((__VLS_ctx.sidebarCollapsed)), }));
    // @ts-ignore
    [sidebarCollapsed,];
    var __VLS_20 = __VLS_pickFunctionalComponentCtx(SidebarItem_vue_1.default, __VLS_17);
    // @ts-ignore
    [SidebarItem_vue_1.default,];
    // @ts-ignore
    var __VLS_21 = __VLS_asFunctionalComponent(SidebarItem_vue_1.default, new SidebarItem_vue_1.default({ name: ("Obunachilar"), linkName: ("followers"), icon: ("mage:users"), collapsed: ((__VLS_ctx.sidebarCollapsed)), }));
    var __VLS_22 = __VLS_21.apply(void 0, __spreadArray([{ name: ("Obunachilar"), linkName: ("followers"), icon: ("mage:users"), collapsed: ((__VLS_ctx.sidebarCollapsed)), }], __VLS_functionalComponentArgsRest(__VLS_21), false));
    ({}({ name: ("Obunachilar"), linkName: ("followers"), icon: ("mage:users"), collapsed: ((__VLS_ctx.sidebarCollapsed)), }));
    // @ts-ignore
    [sidebarCollapsed,];
    var __VLS_25 = __VLS_pickFunctionalComponentCtx(SidebarItem_vue_1.default, __VLS_22);
    // @ts-ignore
    [SidebarItem_vue_1.default,];
    // @ts-ignore
    var __VLS_26 = __VLS_asFunctionalComponent(SidebarItem_vue_1.default, new SidebarItem_vue_1.default({ name: ("Sozlamalar"), linkName: ("settings"), icon: ("basil:settings-outline"), collapsed: ((__VLS_ctx.sidebarCollapsed)), }));
    var __VLS_27 = __VLS_26.apply(void 0, __spreadArray([{ name: ("Sozlamalar"), linkName: ("settings"), icon: ("basil:settings-outline"), collapsed: ((__VLS_ctx.sidebarCollapsed)), }], __VLS_functionalComponentArgsRest(__VLS_26), false));
    ({}({ name: ("Sozlamalar"), linkName: ("settings"), icon: ("basil:settings-outline"), collapsed: ((__VLS_ctx.sidebarCollapsed)), }));
    // @ts-ignore
    [sidebarCollapsed,];
    var __VLS_30 = __VLS_pickFunctionalComponentCtx(SidebarItem_vue_1.default, __VLS_27);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("w-full px-8 py-6 text-white flex items-center justify-end absolute bottom-0 min-h-28 overflow-hidden") }));
    // @ts-ignore
    var __VLS_31 = {}
        .Transition;
    ({}.Transition);
    ({}.Transition);
    __VLS_components.Transition;
    __VLS_components.Transition;
    // @ts-ignore
    [Transition, Transition,];
    // @ts-ignore
    var __VLS_32 = __VLS_asFunctionalComponent(__VLS_31, new __VLS_31({ name: ("dissapear"), }));
    var __VLS_33 = __VLS_32.apply(void 0, __spreadArray([{ name: ("dissapear"), }], __VLS_functionalComponentArgsRest(__VLS_32), false));
    ({}({ name: ("dissapear"), }));
    if (!__VLS_ctx.sidebarCollapsed) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex items-center gap-3 flex-1") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("w-[50px] h-[50px] bg-gray-400 rounded-full") }));
        // @ts-ignore
        [sidebarCollapsed,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)(__assign({ class: ("text-lg") }));
    }
    (__VLS_36.slots).default;
    var __VLS_36 = __VLS_pickFunctionalComponentCtx(__VLS_31, __VLS_33);
    // @ts-ignore
    var __VLS_37 = {}
        .Icon;
    ({}.Icon);
    ({}.Icon);
    __VLS_components.Icon;
    __VLS_components.Icon;
    // @ts-ignore
    [vue_1.Icon, vue_1.Icon,];
    // @ts-ignore
    var __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37(__assign({ icon: ("iconamoon:menu-kebab-vertical-bold") }, { class: ("w-[24px] h-[24px] absolute right-6") })));
    var __VLS_39 = __VLS_38.apply(void 0, __spreadArray([__assign({ icon: ("iconamoon:menu-kebab-vertical-bold") }, { class: ("w-[24px] h-[24px] absolute right-6") })], __VLS_functionalComponentArgsRest(__VLS_38), false));
    ({}(__assign({ icon: ("iconamoon:menu-kebab-vertical-bold") }, { class: ("w-[24px] h-[24px] absolute right-6") })));
    var __VLS_42 = __VLS_pickFunctionalComponentCtx(__VLS_37, __VLS_39);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['w-[312px]'];
        __VLS_styleScopedClasses['h-screen'];
        __VLS_styleScopedClasses['bg-[#26282D]'];
        __VLS_styleScopedClasses['relative'];
        __VLS_styleScopedClasses['duration-500'];
        __VLS_styleScopedClasses['overflow-hidden'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-end'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['px-8'];
        __VLS_styleScopedClasses['py-6'];
        __VLS_styleScopedClasses['mb-10'];
        __VLS_styleScopedClasses['min-h-24'];
        __VLS_styleScopedClasses['overflow-hidden'];
        __VLS_styleScopedClasses['relative'];
        __VLS_styleScopedClasses['text-[28px]'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['flex-1'];
        __VLS_styleScopedClasses['w-[24px]'];
        __VLS_styleScopedClasses['h-[24px]'];
        __VLS_styleScopedClasses['duration-200'];
        __VLS_styleScopedClasses['absolute'];
        __VLS_styleScopedClasses['right-6'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['px-8'];
        __VLS_styleScopedClasses['py-6'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['justify-end'];
        __VLS_styleScopedClasses['absolute'];
        __VLS_styleScopedClasses['bottom-0'];
        __VLS_styleScopedClasses['min-h-28'];
        __VLS_styleScopedClasses['overflow-hidden'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['gap-3'];
        __VLS_styleScopedClasses['flex-1'];
        __VLS_styleScopedClasses['w-[50px]'];
        __VLS_styleScopedClasses['h-[50px]'];
        __VLS_styleScopedClasses['bg-gray-400'];
        __VLS_styleScopedClasses['rounded-full'];
        __VLS_styleScopedClasses['text-lg'];
        __VLS_styleScopedClasses['w-[24px]'];
        __VLS_styleScopedClasses['h-[24px]'];
        __VLS_styleScopedClasses['absolute'];
        __VLS_styleScopedClasses['right-6'];
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
                SidebarItem: SidebarItem_vue_1.default,
                sidebarCollapsed: sidebarCollapsed,
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
