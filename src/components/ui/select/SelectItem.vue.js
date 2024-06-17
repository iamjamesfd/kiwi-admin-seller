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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
var vue_1 = require("vue");
var radix_vue_1 = require("radix-vue");
var lucide_vue_next_1 = require("lucide-vue-next");
var utils_1 = require("@/lib/utils");
var _a = await Promise.resolve().then(function () { return require('vue'); }), defineProps = _a.defineProps, defineSlots = _a.defineSlots, defineEmits = _a.defineEmits, defineExpose = _a.defineExpose, defineModel = _a.defineModel, defineOptions = _a.defineOptions, withDefaults = _a.withDefaults;
var __VLS_typeProps;
var props = defineProps();
var delegatedProps = (0, vue_1.computed)(function () {
    var _ = props.class, delegated = __rest(props, ["class"]);
    return delegated;
});
var forwardedProps = (0, radix_vue_1.useForwardProps)(delegatedProps);
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
    var __VLS_0 = {}
        .SelectItem;
    ({}.SelectItem);
    ({}.SelectItem);
    __VLS_components.SelectItem;
    __VLS_components.SelectItem;
    // @ts-ignore
    [radix_vue_1.SelectItem, radix_vue_1.SelectItem,];
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign(__assign({}, (__VLS_ctx.forwardedProps)), { class: ((__VLS_ctx.cn('relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50', props.class))) })));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign(__assign({}, (__VLS_ctx.forwardedProps)), { class: ((__VLS_ctx.cn('relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50', props.class))) })], __VLS_functionalComponentArgsRest(__VLS_1), false));
    ({}(__assign(__assign({}, (__VLS_ctx.forwardedProps)), { class: ((__VLS_ctx.cn('relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50', props.class))) })));
    __VLS_styleScopedClasses = ((0, utils_1.cn)('relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50', props.class));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: ("absolute left-2 flex h-3.5 w-3.5 items-center justify-center") }));
    // @ts-ignore
    var __VLS_6 = {}
        .SelectItemIndicator;
    ({}.SelectItemIndicator);
    ({}.SelectItemIndicator);
    __VLS_components.SelectItemIndicator;
    __VLS_components.SelectItemIndicator;
    // @ts-ignore
    [radix_vue_1.SelectItemIndicator, radix_vue_1.SelectItemIndicator,];
    // @ts-ignore
    var __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
    var __VLS_8 = __VLS_7.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_7), false));
    ({}({}));
    // @ts-ignore
    var __VLS_12 = {}
        .Check;
    ({}.Check);
    __VLS_components.Check;
    // @ts-ignore
    [lucide_vue_next_1.Check,];
    // @ts-ignore
    var __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12(__assign({ class: ("h-4 w-4") })));
    var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([__assign({ class: ("h-4 w-4") })], __VLS_functionalComponentArgsRest(__VLS_13), false));
    ({}(__assign({ class: ("h-4 w-4") })));
    // @ts-ignore
    [forwardedProps, utils_1.cn,];
    var __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    (__VLS_11.slots).default;
    var __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    // @ts-ignore
    var __VLS_18 = {}
        .SelectItemText;
    ({}.SelectItemText);
    ({}.SelectItemText);
    __VLS_components.SelectItemText;
    __VLS_components.SelectItemText;
    // @ts-ignore
    [radix_vue_1.SelectItemText, radix_vue_1.SelectItemText,];
    // @ts-ignore
    var __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({}));
    var __VLS_20 = __VLS_19.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_19), false));
    ({}({}));
    var __VLS_24 = {};
    (__VLS_23.slots).default;
    var __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
    (__VLS_5.slots).default;
    var __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['absolute'];
        __VLS_styleScopedClasses['left-2'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['h-3.5'];
        __VLS_styleScopedClasses['w-3.5'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['h-4'];
        __VLS_styleScopedClasses['w-4'];
    }
    var __VLS_slots;
    return __VLS_slots;
    var __VLS_componentsOption = {};
    var __VLS_name;
    var __VLS_defineComponent;
    var __VLS_internalComponent = __VLS_defineComponent({
        setup: function () {
            return {
                SelectItem: radix_vue_1.SelectItem,
                SelectItemIndicator: radix_vue_1.SelectItemIndicator,
                SelectItemText: radix_vue_1.SelectItemText,
                Check: lucide_vue_next_1.Check,
                cn: utils_1.cn,
                forwardedProps: forwardedProps,
            };
        },
        props: {},
    });
}
var __VLS_component = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {};
    },
    props: {},
});
exports.default = {};
;
