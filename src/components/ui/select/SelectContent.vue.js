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
var _1 = require(".");
var utils_1 = require("@/lib/utils");
var _a = await Promise.resolve().then(function () { return require('vue'); }), defineProps = _a.defineProps, defineSlots = _a.defineSlots, defineEmits = _a.defineEmits, defineExpose = _a.defineExpose, defineModel = _a.defineModel, defineOptions = _a.defineOptions, withDefaults = _a.withDefaults;
defineOptions({
    inheritAttrs: false,
});
var __VLS_typeProps;
var props = withDefaults(defineProps(), {
    position: 'popper',
});
var emits = defineEmits();
var delegatedProps = (0, vue_1.computed)(function () {
    var _ = props.class, delegated = __rest(props, ["class"]);
    return delegated;
});
var forwarded = (0, radix_vue_1.useForwardPropsEmits)(delegatedProps, emits);
var __VLS_withDefaultsArg = (function (t) { return t; })({
    position: 'popper',
});
var __VLS_fnComponent = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    emits: {},
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
    // @ts-ignore
    var __VLS_0 = {}
        .SelectPortal;
    ({}.SelectPortal);
    ({}.SelectPortal);
    __VLS_components.SelectPortal;
    __VLS_components.SelectPortal;
    // @ts-ignore
    [radix_vue_1.SelectPortal, radix_vue_1.SelectPortal,];
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_1), false));
    ({}({}));
    // @ts-ignore
    var __VLS_6 = {}
        .SelectContent;
    ({}.SelectContent);
    ({}.SelectContent);
    __VLS_components.SelectContent;
    __VLS_components.SelectContent;
    // @ts-ignore
    [radix_vue_1.SelectContent, radix_vue_1.SelectContent,];
    // @ts-ignore
    var __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6(__assign(__assign({}, (__assign(__assign({}, __VLS_ctx.forwarded), __VLS_ctx.$attrs))), { class: ((__VLS_ctx.cn('relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border border-slate-200 bg-white text-slate-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50', __VLS_ctx.position === 'popper'
            && 'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1', props.class))) })));
    var __VLS_8 = __VLS_7.apply(void 0, __spreadArray([__assign(__assign({}, (__assign(__assign({}, __VLS_ctx.forwarded), __VLS_ctx.$attrs))), { class: ((__VLS_ctx.cn('relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border border-slate-200 bg-white text-slate-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50', __VLS_ctx.position === 'popper'
                && 'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1', props.class))) })], __VLS_functionalComponentArgsRest(__VLS_7), false));
    ({}(__assign(__assign({}, (__assign(__assign({}, __VLS_ctx.forwarded), __VLS_ctx.$attrs))), { class: ((__VLS_ctx.cn('relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border border-slate-200 bg-white text-slate-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50', __VLS_ctx.position === 'popper'
            && 'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1', props.class))) })));
    __VLS_styleScopedClasses = ((0, utils_1.cn)('relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border border-slate-200 bg-white text-slate-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50', position === 'popper'
        && 'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1', props.class));
    // @ts-ignore
    var __VLS_12 = {}
        .SelectScrollUpButton;
    ({}.SelectScrollUpButton);
    __VLS_components.SelectScrollUpButton;
    // @ts-ignore
    [_1.SelectScrollUpButton,];
    // @ts-ignore
    var __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({}));
    var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_13), false));
    ({}({}));
    // @ts-ignore
    [forwarded, $attrs, utils_1.cn, position,];
    var __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    // @ts-ignore
    var __VLS_18 = {}
        .SelectViewport;
    ({}.SelectViewport);
    ({}.SelectViewport);
    __VLS_components.SelectViewport;
    __VLS_components.SelectViewport;
    // @ts-ignore
    [radix_vue_1.SelectViewport, radix_vue_1.SelectViewport,];
    // @ts-ignore
    var __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18(__assign({ class: ((__VLS_ctx.cn('p-1', __VLS_ctx.position === 'popper' && 'h-[--radix-select-trigger-height] w-full min-w-[--radix-select-trigger-width]'))) })));
    var __VLS_20 = __VLS_19.apply(void 0, __spreadArray([__assign({ class: ((__VLS_ctx.cn('p-1', __VLS_ctx.position === 'popper' && 'h-[--radix-select-trigger-height] w-full min-w-[--radix-select-trigger-width]'))) })], __VLS_functionalComponentArgsRest(__VLS_19), false));
    ({}(__assign({ class: ((__VLS_ctx.cn('p-1', __VLS_ctx.position === 'popper' && 'h-[--radix-select-trigger-height] w-full min-w-[--radix-select-trigger-width]'))) })));
    __VLS_styleScopedClasses = ((0, utils_1.cn)('p-1', position === 'popper' && 'h-[--radix-select-trigger-height] w-full min-w-[--radix-select-trigger-width]'));
    var __VLS_24 = {};
    // @ts-ignore
    [utils_1.cn, position,];
    (__VLS_23.slots).default;
    var __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
    // @ts-ignore
    var __VLS_25 = {}
        .SelectScrollDownButton;
    ({}.SelectScrollDownButton);
    __VLS_components.SelectScrollDownButton;
    // @ts-ignore
    [_1.SelectScrollDownButton,];
    // @ts-ignore
    var __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({}));
    var __VLS_27 = __VLS_26.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_26), false));
    ({}({}));
    var __VLS_30 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
    (__VLS_11.slots).default;
    var __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    (__VLS_5.slots).default;
    var __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
    var __VLS_componentsOption = {};
    var __VLS_name;
    var __VLS_defineComponent;
    var __VLS_internalComponent = __VLS_defineComponent({
        setup: function () {
            return {
                SelectContent: radix_vue_1.SelectContent,
                SelectPortal: radix_vue_1.SelectPortal,
                SelectViewport: radix_vue_1.SelectViewport,
                SelectScrollDownButton: _1.SelectScrollDownButton,
                SelectScrollUpButton: _1.SelectScrollUpButton,
                cn: utils_1.cn,
                forwarded: forwarded,
            };
        },
        props: {},
        emits: {},
    });
}
var __VLS_component = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {};
    },
    props: {},
    emits: {},
});
exports.default = {};
;
