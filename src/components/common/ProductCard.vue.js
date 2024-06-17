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
var _a = await Promise.resolve().then(function () { return require('vue'); }), defineProps = _a.defineProps, defineSlots = _a.defineSlots, defineEmits = _a.defineEmits, defineExpose = _a.defineExpose, defineModel = _a.defineModel, defineOptions = _a.defineOptions, withDefaults = _a.withDefaults;
var props = defineProps([
    'onSold',
    'id',
    'rating',
    'views',
    'sold',
    'refund',
    'drawback',
    'name',
    'price'
]);
var dropdown_menu_1 = require("@/components/ui/dropdown-menu");
var __VLS_fnComponent = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    props: [
        'onSold',
        'id',
        'rating',
        'views',
        'sold',
        'refund',
        'drawback',
        'name',
        'price'
    ],
});
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("col-span-3 bg-white border-b-2 rounded-lg") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("w-full h-[166px] bg-gray-500 rounded-t-lg") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("p-4 text-sm") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex items-center justify-between") }));
    if (props.onSold) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("px-[10px] py-[6px] cursor-pointer rounded-lg text-[#088178] border border-[#088178]") }));
    }
    if (!props.onSold) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("px-[10px] py-[6px] cursor-pointer rounded-lg border text-[#FF6161] border-[#FF6161]") }));
    }
    // @ts-ignore
    var __VLS_0 = {}
        .DropdownMenu;
    ({}.DropdownMenu);
    ({}.DropdownMenu);
    __VLS_components.DropdownMenu;
    __VLS_components.DropdownMenu;
    // @ts-ignore
    [dropdown_menu_1.DropdownMenu, dropdown_menu_1.DropdownMenu,];
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_1), false));
    ({}({}));
    // @ts-ignore
    var __VLS_6 = {}
        .DropdownMenuTrigger;
    ({}.DropdownMenuTrigger);
    ({}.DropdownMenuTrigger);
    __VLS_components.DropdownMenuTrigger;
    __VLS_components.DropdownMenuTrigger;
    // @ts-ignore
    [dropdown_menu_1.DropdownMenuTrigger, dropdown_menu_1.DropdownMenuTrigger,];
    // @ts-ignore
    var __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ asChild: (true), }));
    var __VLS_8 = __VLS_7.apply(void 0, __spreadArray([{ asChild: (true), }], __VLS_functionalComponentArgsRest(__VLS_7), false));
    ({}({ asChild: (true), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    // @ts-ignore
    var __VLS_12 = {}
        .Icon;
    ({}.Icon);
    ({}.Icon);
    __VLS_components.Icon;
    __VLS_components.Icon;
    // @ts-ignore
    [vue_1.Icon, vue_1.Icon,];
    // @ts-ignore
    var __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12(__assign({ icon: ("iconamoon:menu-kebab-horizontal-bold") }, { class: ("w-6 h-6 text-black") })));
    var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([__assign({ icon: ("iconamoon:menu-kebab-horizontal-bold") }, { class: ("w-6 h-6 text-black") })], __VLS_functionalComponentArgsRest(__VLS_13), false));
    ({}(__assign({ icon: ("iconamoon:menu-kebab-horizontal-bold") }, { class: ("w-6 h-6 text-black") })));
    var __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    (__VLS_11.slots).default;
    var __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    // @ts-ignore
    var __VLS_18 = {}
        .DropdownMenuContent;
    ({}.DropdownMenuContent);
    ({}.DropdownMenuContent);
    __VLS_components.DropdownMenuContent;
    __VLS_components.DropdownMenuContent;
    // @ts-ignore
    [dropdown_menu_1.DropdownMenuContent, dropdown_menu_1.DropdownMenuContent,];
    // @ts-ignore
    var __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18(__assign({ class: ("w-fit rounded-2xl") })));
    var __VLS_20 = __VLS_19.apply(void 0, __spreadArray([__assign({ class: ("w-fit rounded-2xl") })], __VLS_functionalComponentArgsRest(__VLS_19), false));
    ({}(__assign({ class: ("w-fit rounded-2xl") })));
    // @ts-ignore
    var __VLS_24 = {}
        .DropdownMenuGroup;
    ({}.DropdownMenuGroup);
    ({}.DropdownMenuGroup);
    __VLS_components.DropdownMenuGroup;
    __VLS_components.DropdownMenuGroup;
    // @ts-ignore
    [dropdown_menu_1.DropdownMenuGroup, dropdown_menu_1.DropdownMenuGroup,];
    // @ts-ignore
    var __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({}));
    var __VLS_26 = __VLS_25.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_25), false));
    ({}({}));
    // @ts-ignore
    var __VLS_30 = {}
        .DropdownMenuItem;
    ({}.DropdownMenuItem);
    ({}.DropdownMenuItem);
    __VLS_components.DropdownMenuItem;
    __VLS_components.DropdownMenuItem;
    // @ts-ignore
    [dropdown_menu_1.DropdownMenuItem, dropdown_menu_1.DropdownMenuItem,];
    // @ts-ignore
    var __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30(__assign({ class: ("rounded-t-2xl") })));
    var __VLS_32 = __VLS_31.apply(void 0, __spreadArray([__assign({ class: ("rounded-t-2xl") })], __VLS_functionalComponentArgsRest(__VLS_31), false));
    ({}(__assign({ class: ("rounded-t-2xl") })));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_35.slots).default;
    var __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
    // @ts-ignore
    var __VLS_36 = {}
        .DropdownMenuItem;
    ({}.DropdownMenuItem);
    ({}.DropdownMenuItem);
    __VLS_components.DropdownMenuItem;
    __VLS_components.DropdownMenuItem;
    // @ts-ignore
    [dropdown_menu_1.DropdownMenuItem, dropdown_menu_1.DropdownMenuItem,];
    // @ts-ignore
    var __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({}));
    var __VLS_38 = __VLS_37.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_37), false));
    ({}({}));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_41.slots).default;
    var __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
    // @ts-ignore
    var __VLS_42 = {}
        .DropdownMenuItem;
    ({}.DropdownMenuItem);
    ({}.DropdownMenuItem);
    __VLS_components.DropdownMenuItem;
    __VLS_components.DropdownMenuItem;
    // @ts-ignore
    [dropdown_menu_1.DropdownMenuItem, dropdown_menu_1.DropdownMenuItem,];
    // @ts-ignore
    var __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({}));
    var __VLS_44 = __VLS_43.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_43), false));
    ({}({}));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_47.slots).default;
    var __VLS_47 = __VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44);
    // @ts-ignore
    var __VLS_48 = {}
        .DropdownMenuItem;
    ({}.DropdownMenuItem);
    ({}.DropdownMenuItem);
    __VLS_components.DropdownMenuItem;
    __VLS_components.DropdownMenuItem;
    // @ts-ignore
    [dropdown_menu_1.DropdownMenuItem, dropdown_menu_1.DropdownMenuItem,];
    // @ts-ignore
    var __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({}));
    var __VLS_50 = __VLS_49.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_49), false));
    ({}({}));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_53.slots).default;
    var __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50);
    // @ts-ignore
    var __VLS_54 = {}
        .DropdownMenuItem;
    ({}.DropdownMenuItem);
    ({}.DropdownMenuItem);
    __VLS_components.DropdownMenuItem;
    __VLS_components.DropdownMenuItem;
    // @ts-ignore
    [dropdown_menu_1.DropdownMenuItem, dropdown_menu_1.DropdownMenuItem,];
    // @ts-ignore
    var __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54(__assign({ class: ("rounded-b-2xl") })));
    var __VLS_56 = __VLS_55.apply(void 0, __spreadArray([__assign({ class: ("rounded-b-2xl") })], __VLS_functionalComponentArgsRest(__VLS_55), false));
    ({}(__assign({ class: ("rounded-b-2xl") })));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: ('text-[#FF6161]') }));
    (__VLS_59.slots).default;
    var __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_54, __VLS_56);
    (__VLS_29.slots).default;
    var __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
    (__VLS_23.slots).default;
    var __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
    (__VLS_5.slots).default;
    var __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("text-black") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex items-center justify-between py-2 font-light") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)(__assign({ class: ("text-[#666]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (props.id);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex items-center justify-between py-2 font-light") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)(__assign({ class: ("text-[#666]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (props.rating);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex items-center justify-between py-2 font-light") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)(__assign({ class: ("text-[#666]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (props.views);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex items-center justify-between py-2 font-light") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)(__assign({ class: ("text-[#666]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (props.sold);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex items-center justify-between py-2 font-light") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)(__assign({ class: ("text-[#666]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (props.refund);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex items-center justify-between py-2 font-light") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)(__assign({ class: ("text-[#666]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (props.drawback);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)(__assign({ class: ("text-lg mb-4 mt-1") }));
    (props.name);
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)(__assign({ class: ("text-sm") }));
    (props.price);
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['col-span-3'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['border-b-2'];
        __VLS_styleScopedClasses['rounded-lg'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['h-[166px]'];
        __VLS_styleScopedClasses['bg-gray-500'];
        __VLS_styleScopedClasses['rounded-t-lg'];
        __VLS_styleScopedClasses['p-4'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['px-[10px]'];
        __VLS_styleScopedClasses['py-[6px]'];
        __VLS_styleScopedClasses['cursor-pointer'];
        __VLS_styleScopedClasses['rounded-lg'];
        __VLS_styleScopedClasses['text-[#088178]'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['border-[#088178]'];
        __VLS_styleScopedClasses['px-[10px]'];
        __VLS_styleScopedClasses['py-[6px]'];
        __VLS_styleScopedClasses['cursor-pointer'];
        __VLS_styleScopedClasses['rounded-lg'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['text-[#FF6161]'];
        __VLS_styleScopedClasses['border-[#FF6161]'];
        __VLS_styleScopedClasses['w-6'];
        __VLS_styleScopedClasses['h-6'];
        __VLS_styleScopedClasses['text-black'];
        __VLS_styleScopedClasses['w-fit'];
        __VLS_styleScopedClasses['rounded-2xl'];
        __VLS_styleScopedClasses['rounded-t-2xl'];
        __VLS_styleScopedClasses['rounded-b-2xl'];
        __VLS_styleScopedClasses['text-[#FF6161]'];
        __VLS_styleScopedClasses['text-black'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['py-2'];
        __VLS_styleScopedClasses['font-light'];
        __VLS_styleScopedClasses['text-[#666]'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['py-2'];
        __VLS_styleScopedClasses['font-light'];
        __VLS_styleScopedClasses['text-[#666]'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['py-2'];
        __VLS_styleScopedClasses['font-light'];
        __VLS_styleScopedClasses['text-[#666]'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['py-2'];
        __VLS_styleScopedClasses['font-light'];
        __VLS_styleScopedClasses['text-[#666]'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['py-2'];
        __VLS_styleScopedClasses['font-light'];
        __VLS_styleScopedClasses['text-[#666]'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['py-2'];
        __VLS_styleScopedClasses['font-light'];
        __VLS_styleScopedClasses['text-[#666]'];
        __VLS_styleScopedClasses['text-lg'];
        __VLS_styleScopedClasses['mb-4'];
        __VLS_styleScopedClasses['mt-1'];
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
                DropdownMenu: dropdown_menu_1.DropdownMenu,
                DropdownMenuContent: dropdown_menu_1.DropdownMenuContent,
                DropdownMenuGroup: dropdown_menu_1.DropdownMenuGroup,
                DropdownMenuItem: dropdown_menu_1.DropdownMenuItem,
                DropdownMenuTrigger: dropdown_menu_1.DropdownMenuTrigger,
            };
        },
        props: [
            'onSold',
            'id',
            'rating',
            'views',
            'sold',
            'refund',
            'drawback',
            'name',
            'price'
        ],
    });
}
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {};
    },
    props: [
        'onSold',
        'id',
        'rating',
        'views',
        'sold',
        'refund',
        'drawback',
        'name',
        'price'
    ],
});
;
