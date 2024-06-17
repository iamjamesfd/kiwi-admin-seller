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
var vue_1 = require("vue");
var vue_quill_1 = require("@vueup/vue-quill");
var vue_2 = require("@iconify/vue");
// import { variants } from '@/store'
var DashboardHeader_vue_1 = require("@/components/layout/DashboardHeader.vue");
require("@vueup/vue-quill/dist/vue-quill.snow.css");
var _a = await Promise.resolve().then(function () { return require('vue'); }), defineProps = _a.defineProps, defineSlots = _a.defineSlots, defineEmits = _a.defineEmits, defineExpose = _a.defineExpose, defineModel = _a.defineModel, defineOptions = _a.defineOptions, withDefaults = _a.withDefaults;
var editorContent = (0, vue_1.ref)('');
var editorOptions = (0, vue_1.ref)({
    modules: {
        toolbar: {
            container: [
                ['undo', 'redo'],
                [{ header: [1, 2, 3, 4, false] }],
                ['bold', 'italic', 'underline'],
                [{ list: 'ordered' }, { list: 'bullet' }],
                [{ align: '' }, { align: 'center' }, { align: 'right' }],
                ['image']
            ],
            handlers: {
                undo: function () {
                    this.quill.history.undo();
                },
                redo: function () {
                    this.quill.history.redo();
                }
            }
        },
        history: {
            delay: 1000,
            maxStack: 100,
            userOnly: true
        }
    },
    placeholder: 'Tavsif yozish...',
    theme: 'snow' // or 'bubble'
});
(0, vue_1.onMounted)(function () {
    // Add custom buttons to the toolbar
    var undoButton = document.querySelector('.ql-undo');
    var redoButton = document.querySelector('.ql-redo');
    if (undoButton) {
        undoButton.innerHTML =
            "<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'><g fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'><path d='m8 5l-5 5l5 5'/><path d='M3 10h8c5.523 0 10 4.477 10 10v1'/></g></svg";
    }
    if (redoButton) {
        redoButton.innerHTML =
            "<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'><g fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'><path d='m16 5l5 5l-5 5'/><path d='M21 10h-8C7.477 10 3 14.477 3 20v1'/></g></svg>";
    }
});
var isDeliveryAvalible = (0, vue_1.ref)(null);
var variants = (0, vue_1.ref)(null);
var addVariant = function () {
    variants.value.innerHTML += '<h1>hello world</h1>';
};
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
    // @ts-ignore
    [DashboardHeader_vue_1.default,];
    // @ts-ignore
    var __VLS_0 = __VLS_asFunctionalComponent(DashboardHeader_vue_1.default, new DashboardHeader_vue_1.default({ title: ("Mahsulotlar"), }));
    var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([{ title: ("Mahsulotlar"), }], __VLS_functionalComponentArgsRest(__VLS_0), false));
    ({}({ title: ("Mahsulotlar"), }));
    var __VLS_4 = __VLS_pickFunctionalComponentCtx(DashboardHeader_vue_1.default, __VLS_1);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("grid grid-cols-12 gap-6 p-5 text-black") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("col-span-7 rounded-lg bg-white p-7") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)(__assign({ class: ("text-xl mb-8") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)(__assign({ class: ("mb-2") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: ("text-[#DA2C2C]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)(__assign({ type: ("text"), placeholder: ("Mahsulot nomini kiriting") }, { class: ("w-full p-3 mb-8 rounded-lg border outline-none") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)(__assign({ class: ("mb-2") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: ("text-[#DA2C2C]") }));
    // @ts-ignore
    var __VLS_5 = {}
        .QuillEditor;
    ({}.QuillEditor);
    ({}.QuillEditor);
    __VLS_components.QuillEditor;
    __VLS_components.QuillEditor;
    // @ts-ignore
    [vue_quill_1.QuillEditor, vue_quill_1.QuillEditor,];
    // @ts-ignore
    var __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ modelValue: ((__VLS_ctx.editorContent)), options: ((__VLS_ctx.editorOptions)), }));
    var __VLS_7 = __VLS_6.apply(void 0, __spreadArray([{ modelValue: ((__VLS_ctx.editorContent)), options: ((__VLS_ctx.editorOptions)), }], __VLS_functionalComponentArgsRest(__VLS_6), false));
    ({}({ modelValue: ((__VLS_ctx.editorContent)), options: ((__VLS_ctx.editorOptions)), }));
    // @ts-ignore
    [editorContent, editorOptions,];
    var __VLS_10 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("col-span-7 p-7 bg-white rounded-lg") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)(__assign({ class: ("mb-2") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: ("text-[#DA2C2C]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("text-[#3A93FF] text-[12px] font-light mb-6") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex gap-2 flex-wrap") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("rounded-lg border-[2px] border-dashed text-[#7F7F7F]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)(__assign(__assign({ type: ("file") }, { class: ("hidden") }), { id: ("image") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)(__assign({ for: ("image") }, { class: ("h-[100px] w-[90px] flex flex-col justify-center items-center") }));
    // @ts-ignore
    var __VLS_11 = {}
        .Icon;
    ({}.Icon);
    ({}.Icon);
    __VLS_components.Icon;
    __VLS_components.Icon;
    // @ts-ignore
    [vue_2.Icon, vue_2.Icon,];
    // @ts-ignore
    var __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11(__assign({ icon: ("akar-icons:cloud-upload") }, { class: ("w-6 h-6") })));
    var __VLS_13 = __VLS_12.apply(void 0, __spreadArray([__assign({ icon: ("akar-icons:cloud-upload") }, { class: ("w-6 h-6") })], __VLS_functionalComponentArgsRest(__VLS_12), false));
    ({}(__assign({ icon: ("akar-icons:cloud-upload") }, { class: ("w-6 h-6") })));
    var __VLS_16 = __VLS_pickFunctionalComponentCtx(__VLS_11, __VLS_13);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("text-[12px] text-[#7F7F7F] text-center") }));
    var _loop_1 = function (x) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("rounded-lg border-[2px] border-dashed text-[#7F7F7F]") }, { key: ((x)) }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)(__assign(__assign({ type: ("file") }, { class: ("hidden") }), { id: (('image_' + x)) }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)(__assign({ for: (('image_' + x)) }, { class: ("h-[100px] w-[90px] flex flex-col justify-center items-center") }));
        // @ts-ignore
        var __VLS_17 = {}
            .Icon;
        ({}.Icon);
        ({}.Icon);
        __VLS_components.Icon;
        __VLS_components.Icon;
        // @ts-ignore
        [vue_2.Icon, vue_2.Icon,];
        // @ts-ignore
        var __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17(__assign({ icon: ("ph:plus-bold") }, { class: ("w-6 h-6") })));
        var __VLS_19 = __VLS_18.apply(void 0, __spreadArray([__assign({ icon: ("ph:plus-bold") }, { class: ("w-6 h-6") })], __VLS_functionalComponentArgsRest(__VLS_18), false));
        ({}(__assign({ icon: ("ph:plus-bold") }, { class: ("w-6 h-6") })));
        var __VLS_22 = __VLS_pickFunctionalComponentCtx(__VLS_17, __VLS_19);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("text-[12px] text-[#7F7F7F] text-center") }));
    };
    for (var _i = 0, _a = __VLS_getVForSourceType((9)); _i < _a.length; _i++) {
        var x = _a[_i][0];
        _loop_1(x);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("col-span-7 p-7 bg-white rounded-lg") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)(__assign({ class: ("mb-2") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: ("text-[#DA2C2C]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex items-center mb-8 justify-between border px-4 py-[14px] rounded-[10px]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    // @ts-ignore
    var __VLS_23 = {}
        .Icon;
    ({}.Icon);
    ({}.Icon);
    __VLS_components.Icon;
    __VLS_components.Icon;
    // @ts-ignore
    [vue_2.Icon, vue_2.Icon,];
    // @ts-ignore
    var __VLS_24 = __VLS_asFunctionalComponent(__VLS_23, new __VLS_23({ icon: ("icon-park:down"), }));
    var __VLS_25 = __VLS_24.apply(void 0, __spreadArray([{ icon: ("icon-park:down"), }], __VLS_functionalComponentArgsRest(__VLS_24), false));
    ({}({ icon: ("icon-park:down"), }));
    var __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_23, __VLS_25);
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)(__assign({ class: ("mb-2") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: ("text-[#DA2C2C]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)(__assign({ type: ("text"), placeholder: ("Misol uchun: oyoq kiyim") }, { class: ("w-full p-3 mb-8 rounded-lg border outline-none") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex justify-between items-center") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)(__assign({ class: ("switch") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("checkbox"), });
    (__VLS_ctx.isDeliveryAvalible);
    // @ts-ignore
    [isDeliveryAvalible,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: ("slider") }));
    if (__VLS_ctx.isDeliveryAvalible) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex flex-wrap gap-8 mt-5") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)(__assign({ class: ("mb-2 text-sm") }));
        // @ts-ignore
        [isDeliveryAvalible,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)(__assign({ type: ("text"), placeholder: ("Xizmat narxini kiriting") }, { class: ("w-[254px] block p-3 rounded-lg border outline-none") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex gap-4 relative top-10") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)(__assign({ class: ("switch") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("checkbox"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: ("slider") }));
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("col-span-7 p-7 bg-white rounded-lg") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)(__assign({ class: ("text-xl mb-8") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ref: ("variants"), });
    // @ts-ignore
    (__VLS_ctx.variants);
    // @ts-ignore
    [variants,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ onClick: (__VLS_ctx.addVariant) }, { class: ("flex items-center text-[#2563EB] gap-3 cursor-default") }));
    // @ts-ignore
    var __VLS_29 = {}
        .Icon;
    ({}.Icon);
    ({}.Icon);
    __VLS_components.Icon;
    __VLS_components.Icon;
    // @ts-ignore
    [vue_2.Icon, vue_2.Icon,];
    // @ts-ignore
    var __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, new __VLS_29({ icon: ("ph:plus-bold"), }));
    var __VLS_31 = __VLS_30.apply(void 0, __spreadArray([{ icon: ("ph:plus-bold"), }], __VLS_functionalComponentArgsRest(__VLS_30), false));
    ({}({ icon: ("ph:plus-bold"), }));
    // @ts-ignore
    [addVariant,];
    var __VLS_34 = __VLS_pickFunctionalComponentCtx(__VLS_29, __VLS_31);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("col-span-7 p-7 bg-white rounded-lg flex gap-4 flex-wrap") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)(__assign({ class: ("mb-2") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: ("text-[#DA2C2C]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex items-center gap-2 max-w-[300px]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)(__assign({ type: ("text"), placeholder: ("Narxini kiriting") }, { class: ("w-full p-3 rounded-[10px] border outline-none") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)(__assign({ class: ("bg-white border font-light p-4 rounded-lg text-sm") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)(__assign({ class: ("mb-2") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: ("text-[#DA2C2C]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)(__assign({ type: ("text"), placeholder: ("Chegirmani kiriting %") }, { class: ("w-full p-3 rounded-[10px] border outline-none") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)(__assign({ class: ("mb-2") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: ("text-[#DA2C2C]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)(__assign({ type: ("number"), placeholder: ("Mahsulot sonini kiriting") }, { class: ("w-full p-3 rounded-[10px] border outline-none bg-white") }));
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['grid'];
        __VLS_styleScopedClasses['grid-cols-12'];
        __VLS_styleScopedClasses['gap-6'];
        __VLS_styleScopedClasses['p-5'];
        __VLS_styleScopedClasses['text-black'];
        __VLS_styleScopedClasses['col-span-7'];
        __VLS_styleScopedClasses['rounded-lg'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['p-7'];
        __VLS_styleScopedClasses['text-xl'];
        __VLS_styleScopedClasses['mb-8'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['text-[#DA2C2C]'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['p-3'];
        __VLS_styleScopedClasses['mb-8'];
        __VLS_styleScopedClasses['rounded-lg'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['outline-none'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['text-[#DA2C2C]'];
        __VLS_styleScopedClasses['col-span-7'];
        __VLS_styleScopedClasses['p-7'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['rounded-lg'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['text-[#DA2C2C]'];
        __VLS_styleScopedClasses['text-[#3A93FF]'];
        __VLS_styleScopedClasses['text-[12px]'];
        __VLS_styleScopedClasses['font-light'];
        __VLS_styleScopedClasses['mb-6'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['gap-2'];
        __VLS_styleScopedClasses['flex-wrap'];
        __VLS_styleScopedClasses['rounded-lg'];
        __VLS_styleScopedClasses['border-[2px]'];
        __VLS_styleScopedClasses['border-dashed'];
        __VLS_styleScopedClasses['text-[#7F7F7F]'];
        __VLS_styleScopedClasses['hidden'];
        __VLS_styleScopedClasses['h-[100px]'];
        __VLS_styleScopedClasses['w-[90px]'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['w-6'];
        __VLS_styleScopedClasses['h-6'];
        __VLS_styleScopedClasses['text-[12px]'];
        __VLS_styleScopedClasses['text-[#7F7F7F]'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['rounded-lg'];
        __VLS_styleScopedClasses['border-[2px]'];
        __VLS_styleScopedClasses['border-dashed'];
        __VLS_styleScopedClasses['text-[#7F7F7F]'];
        __VLS_styleScopedClasses['hidden'];
        __VLS_styleScopedClasses['h-[100px]'];
        __VLS_styleScopedClasses['w-[90px]'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['w-6'];
        __VLS_styleScopedClasses['h-6'];
        __VLS_styleScopedClasses['text-[12px]'];
        __VLS_styleScopedClasses['text-[#7F7F7F]'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['col-span-7'];
        __VLS_styleScopedClasses['p-7'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['rounded-lg'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['text-[#DA2C2C]'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['mb-8'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['px-4'];
        __VLS_styleScopedClasses['py-[14px]'];
        __VLS_styleScopedClasses['rounded-[10px]'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['text-[#DA2C2C]'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['p-3'];
        __VLS_styleScopedClasses['mb-8'];
        __VLS_styleScopedClasses['rounded-lg'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['outline-none'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['switch'];
        __VLS_styleScopedClasses['slider'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-wrap'];
        __VLS_styleScopedClasses['gap-8'];
        __VLS_styleScopedClasses['mt-5'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['w-[254px]'];
        __VLS_styleScopedClasses['block'];
        __VLS_styleScopedClasses['p-3'];
        __VLS_styleScopedClasses['rounded-lg'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['outline-none'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['gap-4'];
        __VLS_styleScopedClasses['relative'];
        __VLS_styleScopedClasses['top-10'];
        __VLS_styleScopedClasses['switch'];
        __VLS_styleScopedClasses['slider'];
        __VLS_styleScopedClasses['col-span-7'];
        __VLS_styleScopedClasses['p-7'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['rounded-lg'];
        __VLS_styleScopedClasses['text-xl'];
        __VLS_styleScopedClasses['mb-8'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['text-[#2563EB]'];
        __VLS_styleScopedClasses['gap-3'];
        __VLS_styleScopedClasses['cursor-default'];
        __VLS_styleScopedClasses['col-span-7'];
        __VLS_styleScopedClasses['p-7'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['rounded-lg'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['gap-4'];
        __VLS_styleScopedClasses['flex-wrap'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['text-[#DA2C2C]'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['gap-2'];
        __VLS_styleScopedClasses['max-w-[300px]'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['p-3'];
        __VLS_styleScopedClasses['rounded-[10px]'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['outline-none'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['font-light'];
        __VLS_styleScopedClasses['p-4'];
        __VLS_styleScopedClasses['rounded-lg'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['text-[#DA2C2C]'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['p-3'];
        __VLS_styleScopedClasses['rounded-[10px]'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['outline-none'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['text-[#DA2C2C]'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['p-3'];
        __VLS_styleScopedClasses['rounded-[10px]'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['outline-none'];
        __VLS_styleScopedClasses['bg-white'];
    }
    var __VLS_slots;
    return __VLS_slots;
    var __VLS_componentsOption = {};
    var __VLS_name;
    var __VLS_defineComponent;
    var __VLS_internalComponent = __VLS_defineComponent({
        setup: function () {
            return {
                QuillEditor: vue_quill_1.QuillEditor,
                Icon: vue_2.Icon,
                DashboardHeader: DashboardHeader_vue_1.default,
                editorContent: editorContent,
                editorOptions: editorOptions,
                isDeliveryAvalible: isDeliveryAvalible,
                variants: variants,
                addVariant: addVariant,
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
