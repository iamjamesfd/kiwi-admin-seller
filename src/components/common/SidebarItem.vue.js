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
var props = defineProps(["name", "icon", "collapsed", "linkName"]);
var __VLS_fnComponent = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    props: ["name", "icon", "collapsed", "linkName"],
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
    // CSS variable injection 
    // CSS variable injection end 
    var __VLS_resolvedLocalAndGlobalComponents;
    // @ts-ignore
    var __VLS_0 = {}
        .RouterLink;
    ({}.RouterLink);
    ({}.RouterLink);
    __VLS_components.RouterLink;
    __VLS_components.RouterLink;
    // @ts-ignore
    [RouterLink, RouterLink,];
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign(__assign({ to: (({ name: props.linkName })) }, { class: ("flex relative items-center gap-3 text-[#9B9B9B] py-4 pl-[60px] text-[15px] hover:bg-[#1E1E23] border-l-[5px] border-transparent h-[54px]") }), { class: (({ '!px-0 justify-center': props.collapsed })) })));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign(__assign({ to: (({ name: props.linkName })) }, { class: ("flex relative items-center gap-3 text-[#9B9B9B] py-4 pl-[60px] text-[15px] hover:bg-[#1E1E23] border-l-[5px] border-transparent h-[54px]") }), { class: (({ '!px-0 justify-center': props.collapsed })) })], __VLS_functionalComponentArgsRest(__VLS_1), false));
    ({}(__assign(__assign({ to: (({ name: props.linkName })) }, { class: ("flex relative items-center gap-3 text-[#9B9B9B] py-4 pl-[60px] text-[15px] hover:bg-[#1E1E23] border-l-[5px] border-transparent h-[54px]") }), { class: (({ '!px-0 justify-center': props.collapsed })) })));
    __VLS_styleScopedClasses = ({ '!px-0 justify-center': props.collapsed });
    // @ts-ignore
    var __VLS_6 = {}
        .Icon;
    ({}.Icon);
    ({}.Icon);
    __VLS_components.Icon;
    __VLS_components.Icon;
    // @ts-ignore
    [vue_1.Icon, vue_1.Icon,];
    // @ts-ignore
    var __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6(__assign({ icon: ((props.icon)) }, { class: ("absolute left-5 w-[24px] h-[24px] transition-all duration-500 delay-[100ms]") })));
    var __VLS_8 = __VLS_7.apply(void 0, __spreadArray([__assign({ icon: ((props.icon)) }, { class: ("absolute left-5 w-[24px] h-[24px] transition-all duration-500 delay-[100ms]") })], __VLS_functionalComponentArgsRest(__VLS_7), false));
    ({}(__assign({ icon: ((props.icon)) }, { class: ("absolute left-5 w-[24px] h-[24px] transition-all duration-500 delay-[100ms]") })));
    var __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    // @ts-ignore
    var __VLS_12 = {}
        .Transition;
    ({}.Transition);
    ({}.Transition);
    __VLS_components.Transition;
    __VLS_components.Transition;
    // @ts-ignore
    [Transition, Transition,];
    // @ts-ignore
    var __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ name: ("fade-out"), }));
    var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([{ name: ("fade-out"), }], __VLS_functionalComponentArgsRest(__VLS_13), false));
    ({}({ name: ("fade-out"), }));
    if (!props.collapsed) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: ("duration-500") }));
        (props.name);
    }
    (__VLS_17.slots).default;
    var __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    (__VLS_5.slots).default;
    var __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['relative'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['gap-3'];
        __VLS_styleScopedClasses['text-[#9B9B9B]'];
        __VLS_styleScopedClasses['py-4'];
        __VLS_styleScopedClasses['pl-[60px]'];
        __VLS_styleScopedClasses['text-[15px]'];
        __VLS_styleScopedClasses['hover:bg-[#1E1E23]'];
        __VLS_styleScopedClasses['border-l-[5px]'];
        __VLS_styleScopedClasses['border-transparent'];
        __VLS_styleScopedClasses['h-[54px]'];
        __VLS_styleScopedClasses['absolute'];
        __VLS_styleScopedClasses['left-5'];
        __VLS_styleScopedClasses['w-[24px]'];
        __VLS_styleScopedClasses['h-[24px]'];
        __VLS_styleScopedClasses['transition-all'];
        __VLS_styleScopedClasses['duration-500'];
        __VLS_styleScopedClasses['delay-[100ms]'];
        __VLS_styleScopedClasses['duration-500'];
    }
    var __VLS_slots;
    return __VLS_slots;
    var __VLS_componentsOption = {};
    var __VLS_name;
    var __VLS_defineComponent;
    var __VLS_internalComponent = __VLS_defineComponent({
        setup: function () {
            return __assign(__assign({ $props: __VLS_makeOptional(props) }, props), { Icon: vue_1.Icon });
        },
    });
}
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return __assign({ $props: __VLS_makeOptional(props) }, props);
    },
});
;
