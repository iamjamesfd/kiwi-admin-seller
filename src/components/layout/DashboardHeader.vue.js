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
var props = defineProps(['title']);
var __VLS_fnComponent = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    props: ['title'],
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex items-center px-6 py-4 justify-between shadow bg-white sticky top-0 z-50") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)(__assign({ class: ("text-xl text-black") }));
    (props['title']);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex gap-3 text-black") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex items-center justify-center border w-10 h-10 rounded-lg") }));
    // @ts-ignore
    var __VLS_0 = {}
        .Icon;
    ({}.Icon);
    ({}.Icon);
    __VLS_components.Icon;
    __VLS_components.Icon;
    // @ts-ignore
    [vue_1.Icon, vue_1.Icon,];
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ icon: ("f7:bell") }, { class: ("w-[24px] h-[24px]") })));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ icon: ("f7:bell") }, { class: ("w-[24px] h-[24px]") })], __VLS_functionalComponentArgsRest(__VLS_1), false));
    ({}(__assign({ icon: ("f7:bell") }, { class: ("w-[24px] h-[24px]") })));
    var __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex items-center justify-center border w-10 h-10 rounded-lg") }));
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
    var __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6(__assign({ icon: ("mage:message-dots") }, { class: ("w-[24px] h-[24px]") })));
    var __VLS_8 = __VLS_7.apply(void 0, __spreadArray([__assign({ icon: ("mage:message-dots") }, { class: ("w-[24px] h-[24px]") })], __VLS_functionalComponentArgsRest(__VLS_7), false));
    ({}(__assign({ icon: ("mage:message-dots") }, { class: ("w-[24px] h-[24px]") })));
    var __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['px-6'];
        __VLS_styleScopedClasses['py-4'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['shadow'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['sticky'];
        __VLS_styleScopedClasses['top-0'];
        __VLS_styleScopedClasses['z-50'];
        __VLS_styleScopedClasses['text-xl'];
        __VLS_styleScopedClasses['text-black'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['gap-3'];
        __VLS_styleScopedClasses['text-black'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['w-10'];
        __VLS_styleScopedClasses['h-10'];
        __VLS_styleScopedClasses['rounded-lg'];
        __VLS_styleScopedClasses['w-[24px]'];
        __VLS_styleScopedClasses['h-[24px]'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['w-10'];
        __VLS_styleScopedClasses['h-10'];
        __VLS_styleScopedClasses['rounded-lg'];
        __VLS_styleScopedClasses['w-[24px]'];
        __VLS_styleScopedClasses['h-[24px]'];
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
