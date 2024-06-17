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
Object.defineProperty(exports, "__esModule", { value: true });
var _a = await Promise.resolve().then(function () { return require('vue'); }), defineProps = _a.defineProps, defineSlots = _a.defineSlots, defineEmits = _a.defineEmits, defineExpose = _a.defineExpose, defineModel = _a.defineModel, defineOptions = _a.defineOptions, withDefaults = _a.withDefaults;
var props = defineProps(['head', 'body']);
// console.table(props.body[3])
var __VLS_fnComponent = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    props: ['head', 'body'],
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.table, __VLS_intrinsicElements.table)(__assign({ class: ("w-full") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.thead, __VLS_intrinsicElements.thead)(__assign({ class: ("text-center text-sm") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({});
    for (var _i = 0, _a = __VLS_getVForSourceType((props.head)); _i < _a.length; _i++) {
        var x = _a[_i][0];
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ key: ((x)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("py-2") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (x.label);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.tbody, __VLS_intrinsicElements.tbody)({});
    for (var _b = 0, _c = __VLS_getVForSourceType((props.body)); _b < _c.length; _b++) {
        var x = _c[_b][0];
        __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({ key: ((x)), });
        for (var _d = 0, _e = __VLS_getVForSourceType((props.head)); _d < _e.length; _d++) {
            var i = _e[_d][0];
            __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)(__assign({ key: ((i)) }, { class: ("text-center border-b text-black text-sm py-3") }));
            if (i.type == 'image') {
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("w-10 h-10 bg-gray-400 mx-auto rounded") }));
            }
            else {
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
                (i.formatter ? i.formatter(x[i.key]) : x[i.key]);
            }
        }
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['py-2'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['border-b'];
        __VLS_styleScopedClasses['text-black'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['py-3'];
        __VLS_styleScopedClasses['w-10'];
        __VLS_styleScopedClasses['h-10'];
        __VLS_styleScopedClasses['bg-gray-400'];
        __VLS_styleScopedClasses['mx-auto'];
        __VLS_styleScopedClasses['rounded'];
    }
    var __VLS_slots;
    return __VLS_slots;
    var __VLS_componentsOption = {};
    var __VLS_name;
    var __VLS_defineComponent;
    var __VLS_internalComponent = __VLS_defineComponent({
        setup: function () {
            return __assign({ $props: __VLS_makeOptional(props) }, props);
        },
    });
}
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return __assign({ $props: __VLS_makeOptional(props) }, props);
    },
});
;
