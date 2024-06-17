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
        .SelectTrigger;
    ({}.SelectTrigger);
    ({}.SelectTrigger);
    __VLS_components.SelectTrigger;
    __VLS_components.SelectTrigger;
    // @ts-ignore
    [radix_vue_1.SelectTrigger, radix_vue_1.SelectTrigger,];
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign(__assign({}, (__VLS_ctx.forwardedProps)), { class: ((__VLS_ctx.cn('flex h-10 w-full items-center justify-between rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus:ring-slate-300', props.class))) })));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign(__assign({}, (__VLS_ctx.forwardedProps)), { class: ((__VLS_ctx.cn('flex h-10 w-full items-center justify-between rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus:ring-slate-300', props.class))) })], __VLS_functionalComponentArgsRest(__VLS_1), false));
    ({}(__assign(__assign({}, (__VLS_ctx.forwardedProps)), { class: ((__VLS_ctx.cn('flex h-10 w-full items-center justify-between rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus:ring-slate-300', props.class))) })));
    __VLS_styleScopedClasses = ((0, utils_1.cn)('flex h-10 w-full items-center justify-between rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus:ring-slate-300', props.class));
    var __VLS_6 = {};
    // @ts-ignore
    [forwardedProps, utils_1.cn,];
    // @ts-ignore
    var __VLS_7 = {}
        .SelectIcon;
    ({}.SelectIcon);
    ({}.SelectIcon);
    __VLS_components.SelectIcon;
    __VLS_components.SelectIcon;
    // @ts-ignore
    [radix_vue_1.SelectIcon, radix_vue_1.SelectIcon,];
    // @ts-ignore
    var __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({ asChild: (true), }));
    var __VLS_9 = __VLS_8.apply(void 0, __spreadArray([{ asChild: (true), }], __VLS_functionalComponentArgsRest(__VLS_8), false));
    ({}({ asChild: (true), }));
    // @ts-ignore
    var __VLS_13 = {}
        .ChevronDown;
    ({}.ChevronDown);
    __VLS_components.ChevronDown;
    // @ts-ignore
    [lucide_vue_next_1.ChevronDown,];
    // @ts-ignore
    var __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13(__assign({ class: ("w-4 h-4 opacity-50") })));
    var __VLS_15 = __VLS_14.apply(void 0, __spreadArray([__assign({ class: ("w-4 h-4 opacity-50") })], __VLS_functionalComponentArgsRest(__VLS_14), false));
    ({}(__assign({ class: ("w-4 h-4 opacity-50") })));
    var __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_13, __VLS_15);
    (__VLS_12.slots).default;
    var __VLS_12 = __VLS_pickFunctionalComponentCtx(__VLS_7, __VLS_9);
    (__VLS_5.slots).default;
    var __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['w-4'];
        __VLS_styleScopedClasses['h-4'];
        __VLS_styleScopedClasses['opacity-50'];
    }
    var __VLS_slots;
    return __VLS_slots;
    var __VLS_componentsOption = {};
    var __VLS_name;
    var __VLS_defineComponent;
    var __VLS_internalComponent = __VLS_defineComponent({
        setup: function () {
            return {
                SelectIcon: radix_vue_1.SelectIcon,
                SelectTrigger: radix_vue_1.SelectTrigger,
                ChevronDown: lucide_vue_next_1.ChevronDown,
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
