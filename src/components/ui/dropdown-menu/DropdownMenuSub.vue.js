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
var radix_vue_1 = require("radix-vue");
var _a = await Promise.resolve().then(function () { return require('vue'); }), defineProps = _a.defineProps, defineSlots = _a.defineSlots, defineEmits = _a.defineEmits, defineExpose = _a.defineExpose, defineModel = _a.defineModel, defineOptions = _a.defineOptions, withDefaults = _a.withDefaults;
var __VLS_typeProps;
var props = defineProps();
var emits = defineEmits();
var forwarded = (0, radix_vue_1.useForwardPropsEmits)(props, emits);
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
        .DropdownMenuSub;
    ({}.DropdownMenuSub);
    ({}.DropdownMenuSub);
    __VLS_components.DropdownMenuSub;
    __VLS_components.DropdownMenuSub;
    // @ts-ignore
    [radix_vue_1.DropdownMenuSub, radix_vue_1.DropdownMenuSub,];
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({}, (__VLS_ctx.forwarded))));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({}, (__VLS_ctx.forwarded))], __VLS_functionalComponentArgsRest(__VLS_1), false));
    ({}(__assign({}, (__VLS_ctx.forwarded))));
    var __VLS_6 = {};
    // @ts-ignore
    [forwarded,];
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
                DropdownMenuSub: radix_vue_1.DropdownMenuSub,
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
