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
var DashboardHeader_vue_1 = require("@/components/layout/DashboardHeader.vue");
var _a = await Promise.resolve().then(function () { return require('vue'); }), defineProps = _a.defineProps, defineSlots = _a.defineSlots, defineEmits = _a.defineEmits, defineExpose = _a.defineExpose, defineModel = _a.defineModel, defineOptions = _a.defineOptions, withDefaults = _a.withDefaults;
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
    var __VLS_0 = __VLS_asFunctionalComponent(DashboardHeader_vue_1.default, new DashboardHeader_vue_1.default({ title: ("Obunachilar"), }));
    var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([{ title: ("Obunachilar"), }], __VLS_functionalComponentArgsRest(__VLS_0), false));
    ({}({ title: ("Obunachilar"), }));
    var __VLS_4 = __VLS_pickFunctionalComponentCtx(DashboardHeader_vue_1.default, __VLS_1);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex justify-between items-center py-8 px-6 text-black") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("w-10 h-10 rounded bg-[#DA2C2C] text-white grid place-items-center cursor-pointer") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("w-10 h-10 border rounded bg-white grid place-items-center cursor-pointer") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("w-10 h-10 border rounded bg-white grid place-items-center cursor-pointer") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("w-10 h-10 border rounded bg-white grid place-items-center cursor-pointer") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("w-10 h-10 border rounded bg-white grid place-items-center cursor-pointer") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("w-10 h-10 border rounded bg-white grid place-items-center cursor-pointer") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex gap-5") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("w-fit flex items-center gap-2 py-2 px-4 bg-white rounded-lg cursor-pointer") }));
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
    var __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5(__assign({ icon: ("system-uicons:filtering") }, { class: ("w-[24px] h-[24px]") })));
    var __VLS_7 = __VLS_6.apply(void 0, __spreadArray([__assign({ icon: ("system-uicons:filtering") }, { class: ("w-[24px] h-[24px]") })], __VLS_functionalComponentArgsRest(__VLS_6), false));
    ({}(__assign({ icon: ("system-uicons:filtering") }, { class: ("w-[24px] h-[24px]") })));
    var __VLS_10 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    // @ts-ignore
    var __VLS_11 = {}
        .RouterLink;
    ({}.RouterLink);
    ({}.RouterLink);
    __VLS_components.RouterLink;
    __VLS_components.RouterLink;
    // @ts-ignore
    [RouterLink, RouterLink,];
    // @ts-ignore
    var __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11(__assign({ to: ("#") }, { class: ("w-fit flex items-center gap-2 py-2 px-8 bg-[#0EB182] text-white rounded-lg cursor-pointer") })));
    var __VLS_13 = __VLS_12.apply(void 0, __spreadArray([__assign({ to: ("#") }, { class: ("w-fit flex items-center gap-2 py-2 px-8 bg-[#0EB182] text-white rounded-lg cursor-pointer") })], __VLS_functionalComponentArgsRest(__VLS_12), false));
    ({}(__assign({ to: ("#") }, { class: ("w-fit flex items-center gap-2 py-2 px-8 bg-[#0EB182] text-white rounded-lg cursor-pointer") })));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_16.slots).default;
    var __VLS_16 = __VLS_pickFunctionalComponentCtx(__VLS_11, __VLS_13);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("px-6 pb-5") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.table, __VLS_intrinsicElements.table)(__assign({ class: ("w-full bg-white rounded-xl overflow-hidden") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.thead, __VLS_intrinsicElements.thead)(__assign({ class: ("bg-[#F6F5FF] text-black") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)(__assign({ class: ("text-center text-sm") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("my-4") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("my-4") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("my-4") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("my-4") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("my-4") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("my-4") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("my-4") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.tbody, __VLS_intrinsicElements.tbody)({});
    var _loop_1 = function (x) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)(__assign({ class: ("text-center border-b pb-2 text-sm text-black") }, { key: ((x)) }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)(__assign({ class: ("p-3") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (x);
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)(__assign({ class: ("py-3") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)(__assign({ class: ("py-3") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)(__assign({ class: ("py-3") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)(__assign({ class: ("py-3") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)(__assign({ class: ("py-3") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: ("text-[#39BC91]") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)(__assign({ class: ("p-3") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
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
        var __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({ icon: ("iconamoon:menu-kebab-vertical-bold"), }));
        var __VLS_19 = __VLS_18.apply(void 0, __spreadArray([{ icon: ("iconamoon:menu-kebab-vertical-bold"), }], __VLS_functionalComponentArgsRest(__VLS_18), false));
        ({}({ icon: ("iconamoon:menu-kebab-vertical-bold"), }));
        var __VLS_22 = __VLS_pickFunctionalComponentCtx(__VLS_17, __VLS_19);
    };
    for (var _i = 0, _a = __VLS_getVForSourceType((10)); _i < _a.length; _i++) {
        var x = _a[_i][0];
        _loop_1(x);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['py-8'];
        __VLS_styleScopedClasses['px-6'];
        __VLS_styleScopedClasses['text-black'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['w-10'];
        __VLS_styleScopedClasses['h-10'];
        __VLS_styleScopedClasses['rounded'];
        __VLS_styleScopedClasses['bg-[#DA2C2C]'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['grid'];
        __VLS_styleScopedClasses['place-items-center'];
        __VLS_styleScopedClasses['cursor-pointer'];
        __VLS_styleScopedClasses['w-10'];
        __VLS_styleScopedClasses['h-10'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['rounded'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['grid'];
        __VLS_styleScopedClasses['place-items-center'];
        __VLS_styleScopedClasses['cursor-pointer'];
        __VLS_styleScopedClasses['w-10'];
        __VLS_styleScopedClasses['h-10'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['rounded'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['grid'];
        __VLS_styleScopedClasses['place-items-center'];
        __VLS_styleScopedClasses['cursor-pointer'];
        __VLS_styleScopedClasses['w-10'];
        __VLS_styleScopedClasses['h-10'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['rounded'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['grid'];
        __VLS_styleScopedClasses['place-items-center'];
        __VLS_styleScopedClasses['cursor-pointer'];
        __VLS_styleScopedClasses['w-10'];
        __VLS_styleScopedClasses['h-10'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['rounded'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['grid'];
        __VLS_styleScopedClasses['place-items-center'];
        __VLS_styleScopedClasses['cursor-pointer'];
        __VLS_styleScopedClasses['w-10'];
        __VLS_styleScopedClasses['h-10'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['rounded'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['grid'];
        __VLS_styleScopedClasses['place-items-center'];
        __VLS_styleScopedClasses['cursor-pointer'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['gap-5'];
        __VLS_styleScopedClasses['w-fit'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['gap-2'];
        __VLS_styleScopedClasses['py-2'];
        __VLS_styleScopedClasses['px-4'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['rounded-lg'];
        __VLS_styleScopedClasses['cursor-pointer'];
        __VLS_styleScopedClasses['w-[24px]'];
        __VLS_styleScopedClasses['h-[24px]'];
        __VLS_styleScopedClasses['w-fit'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['gap-2'];
        __VLS_styleScopedClasses['py-2'];
        __VLS_styleScopedClasses['px-8'];
        __VLS_styleScopedClasses['bg-[#0EB182]'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['rounded-lg'];
        __VLS_styleScopedClasses['cursor-pointer'];
        __VLS_styleScopedClasses['px-6'];
        __VLS_styleScopedClasses['pb-5'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['rounded-xl'];
        __VLS_styleScopedClasses['overflow-hidden'];
        __VLS_styleScopedClasses['bg-[#F6F5FF]'];
        __VLS_styleScopedClasses['text-black'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['my-4'];
        __VLS_styleScopedClasses['my-4'];
        __VLS_styleScopedClasses['my-4'];
        __VLS_styleScopedClasses['my-4'];
        __VLS_styleScopedClasses['my-4'];
        __VLS_styleScopedClasses['my-4'];
        __VLS_styleScopedClasses['my-4'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['border-b'];
        __VLS_styleScopedClasses['pb-2'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['text-black'];
        __VLS_styleScopedClasses['p-3'];
        __VLS_styleScopedClasses['py-3'];
        __VLS_styleScopedClasses['py-3'];
        __VLS_styleScopedClasses['py-3'];
        __VLS_styleScopedClasses['py-3'];
        __VLS_styleScopedClasses['py-3'];
        __VLS_styleScopedClasses['text-[#39BC91]'];
        __VLS_styleScopedClasses['p-3'];
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
