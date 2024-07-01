/* __placeholder__ */
import { ref, onMounted } from 'vue';
import { Icon } from '@iconify/vue';
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { options } from '@/store';
import DashboardHeader from '@/components/layout/DashboardHeader.vue';
import VueSelect from '@/components/common/VueSelect.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const editorContent = ref('');
const editorOptions = ref({
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
onMounted(() => {
    // Add custom buttons to the toolbar
    const undoButton = document.querySelector('.ql-undo');
    const redoButton = document.querySelector('.ql-redo');
    if (undoButton) {
        undoButton.innerHTML =
            "<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'><g fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'><path d='m8 5l-5 5l5 5'/><path d='M3 10h8c5.523 0 10 4.477 10 10v1'/></g></svg";
    }
    if (redoButton) {
        redoButton.innerHTML =
            "<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'><g fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'><path d='m16 5l5 5l-5 5'/><path d='M21 10h-8C7.477 10 3 14.477 3 20v1'/></g></svg>";
    }
});
const isDeliveryAvalible = ref(null);
const variants = ref(null);
const addVariant = () => {
    variants.value.innerHTML += '<h1>hello world</h1>';
};
const __VLS_fnComponent = (await import('vue')).defineComponent({});
let __VLS_functionalComponentProps;
const __VLS_modelEmitsType = {};
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    // @ts-ignore
    [DashboardHeader,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(DashboardHeader, new DashboardHeader({ title: ("Mahsulot yaratish"), }));
    const __VLS_1 = __VLS_0({ title: ("Mahsulot yaratish"), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    ({}({ title: ("Mahsulot yaratish"), }));
    const __VLS_4 = __VLS_pickFunctionalComponentCtx(DashboardHeader, __VLS_1);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid grid-cols-12 gap-6 p-5 text-black") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-span-12 min-[750px]:col-span-10 lg:col-span-8 rounded-lg bg-white p-7") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-xl mb-8") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("mb-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-[#DA2C2C]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), placeholder: ("Mahsulot nomini kiriting"), ...{ class: ("w-full p-3 mb-8 rounded-lg border outline-none") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("mb-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-[#DA2C2C]") }, });
    // @ts-ignore
    const __VLS_5 = {}
        .QuillEditor;
    ({}.QuillEditor);
    ({}.QuillEditor);
    __VLS_components.QuillEditor;
    __VLS_components.QuillEditor;
    // @ts-ignore
    [QuillEditor, QuillEditor,];
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ modelValue: ((__VLS_ctx.editorContent)), options: ((__VLS_ctx.editorOptions)), }));
    const __VLS_7 = __VLS_6({ modelValue: ((__VLS_ctx.editorContent)), options: ((__VLS_ctx.editorOptions)), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
    ({}({ modelValue: ((__VLS_ctx.editorContent)), options: ((__VLS_ctx.editorOptions)), }));
    // @ts-ignore
    [editorContent, editorOptions,];
    const __VLS_10 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-span-12 min-[750px]:col-span-10 lg:col-span-8 p-7 bg-white rounded-lg") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("mb-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-[#DA2C2C]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-[#3A93FF] text-[12px] font-light mb-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex gap-2 flex-wrap") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("rounded-lg border-[2px] border-dashed text-[#7F7F7F]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("file"), ...{ class: ("hidden") }, id: ("image"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("image"), ...{ class: ("h-[100px] w-[90px] flex flex-col justify-center items-center") }, });
    // @ts-ignore
    const __VLS_11 = {}
        .Icon;
    ({}.Icon);
    ({}.Icon);
    __VLS_components.Icon;
    __VLS_components.Icon;
    // @ts-ignore
    [Icon, Icon,];
    // @ts-ignore
    const __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11({ icon: ("akar-icons:cloud-upload"), ...{ class: ("w-6 h-6") }, }));
    const __VLS_13 = __VLS_12({ icon: ("akar-icons:cloud-upload"), ...{ class: ("w-6 h-6") }, }, ...__VLS_functionalComponentArgsRest(__VLS_12));
    ({}({ icon: ("akar-icons:cloud-upload"), ...{ class: ("w-6 h-6") }, }));
    const __VLS_16 = __VLS_pickFunctionalComponentCtx(__VLS_11, __VLS_13);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-[12px] text-[#7F7F7F] text-center") }, });
    for (const [x] of __VLS_getVForSourceType((9))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("rounded-lg border-[2px] border-dashed text-[#7F7F7F]") }, key: ((x)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("file"), ...{ class: ("hidden") }, id: (('image_' + x)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: (('image_' + x)), ...{ class: ("h-[100px] w-[90px] flex flex-col justify-center items-center") }, });
        // @ts-ignore
        const __VLS_17 = {}
            .Icon;
        ({}.Icon);
        ({}.Icon);
        __VLS_components.Icon;
        __VLS_components.Icon;
        // @ts-ignore
        [Icon, Icon,];
        // @ts-ignore
        const __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({ icon: ("ph:plus-bold"), ...{ class: ("w-6 h-6") }, }));
        const __VLS_19 = __VLS_18({ icon: ("ph:plus-bold"), ...{ class: ("w-6 h-6") }, }, ...__VLS_functionalComponentArgsRest(__VLS_18));
        ({}({ icon: ("ph:plus-bold"), ...{ class: ("w-6 h-6") }, }));
        const __VLS_22 = __VLS_pickFunctionalComponentCtx(__VLS_17, __VLS_19);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-[12px] text-[#7F7F7F] text-center") }, });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-span-12 min-[750px]:col-span-10 lg:col-span-8 p-7 bg-white rounded-lg") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("mb-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-[#DA2C2C]") }, });
    // @ts-ignore
    [VueSelect, VueSelect,];
    // @ts-ignore
    const __VLS_23 = __VLS_asFunctionalComponent(VueSelect, new VueSelect({ options: ((__VLS_ctx.options)), default: (('Kategoriyani tanlang')), optionType: ("Object"), }));
    const __VLS_24 = __VLS_23({ options: ((__VLS_ctx.options)), default: (('Kategoriyani tanlang')), optionType: ("Object"), }, ...__VLS_functionalComponentArgsRest(__VLS_23));
    ({}({ options: ((__VLS_ctx.options)), default: (('Kategoriyani tanlang')), optionType: ("Object"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const [{ option }] = __VLS_getSlotParams((__VLS_27.slots).option);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("px-3 py-3 hover:bg-slate-100 hover:text-[#FF6200] flex items-center gap-4") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((option.image)), });
        // @ts-ignore
        [options,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (option.name);
    }
    const __VLS_27 = __VLS_pickFunctionalComponentCtx(VueSelect, __VLS_24);
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("mb-2 mt-8") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-[#DA2C2C]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), placeholder: ("Misol uchun: oyoq kiyim"), ...{ class: ("w-full p-3 mb-8 rounded-lg border outline-none") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-between items-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("switch") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("checkbox"), });
    (__VLS_ctx.isDeliveryAvalible);
    // @ts-ignore
    [isDeliveryAvalible,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("slider") }, });
    if (__VLS_ctx.isDeliveryAvalible) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col flex-wrap gap-3 mt-5 min-[550px]:flex-row min-[550px]:gap-8") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("mb-1 text-sm") }, });
        // @ts-ignore
        [isDeliveryAvalible,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), placeholder: ("Xizmat narxini kiriting"), ...{ class: ("w-[254px] block p-3 rounded-lg border outline-none") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex gap-4 min-[550px]:relative min-[550px]:top-9") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("switch") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("checkbox"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("slider") }, });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-span-12 min-[750px]:col-span-10 lg:col-span-8 p-7 bg-white rounded-lg") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-xl mb-8") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ref: ("variants"), });
    // @ts-ignore
    (__VLS_ctx.variants);
    // @ts-ignore
    [variants,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ onClick: (__VLS_ctx.addVariant) }, ...{ class: ("flex items-center text-[#2563EB] gap-3 cursor-default") }, });
    // @ts-ignore
    const __VLS_28 = {}
        .Icon;
    ({}.Icon);
    ({}.Icon);
    __VLS_components.Icon;
    __VLS_components.Icon;
    // @ts-ignore
    [Icon, Icon,];
    // @ts-ignore
    const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({ icon: ("ph:plus-bold"), }));
    const __VLS_30 = __VLS_29({ icon: ("ph:plus-bold"), }, ...__VLS_functionalComponentArgsRest(__VLS_29));
    ({}({ icon: ("ph:plus-bold"), }));
    // @ts-ignore
    [addVariant,];
    const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_28, __VLS_30);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-span-12 min-[750px]:col-span-10 lg:col-span-8 p-7 bg-white rounded-lg flex gap-4 flex-wrap") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("mb-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-[#DA2C2C]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex gap-2 max-w-[300px]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), placeholder: ("Narxini kiriting"), ...{ class: ("w-full p-3 rounded-[10px] flex-1 border outline-none") }, });
    // @ts-ignore
    [VueSelect, VueSelect,];
    // @ts-ignore
    const __VLS_34 = __VLS_asFunctionalComponent(VueSelect, new VueSelect({ options: ((['UZS', 'USD'])), default: (('USD')), optionType: ("String"), }));
    const __VLS_35 = __VLS_34({ options: ((['UZS', 'USD'])), default: (('USD')), optionType: ("String"), }, ...__VLS_functionalComponentArgsRest(__VLS_34));
    ({}({ options: ((['UZS', 'USD'])), default: (('USD')), optionType: ("String"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        (__VLS_38.slots).icon;
        // @ts-ignore
        const __VLS_39 = {}
            .Icon;
        ({}.Icon);
        ({}.Icon);
        __VLS_components.Icon;
        __VLS_components.Icon;
        // @ts-ignore
        [Icon, Icon,];
        // @ts-ignore
        const __VLS_40 = __VLS_asFunctionalComponent(__VLS_39, new __VLS_39({ icon: ("emojione:green-apple"), }));
        const __VLS_41 = __VLS_40({ icon: ("emojione:green-apple"), }, ...__VLS_functionalComponentArgsRest(__VLS_40));
        ({}({ icon: ("emojione:green-apple"), }));
        const __VLS_44 = __VLS_pickFunctionalComponentCtx(__VLS_39, __VLS_41);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const [{ option }] = __VLS_getSlotParams((__VLS_38.slots).option);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("px-3 py-2 hover:bg-slate-300") }, });
        (option);
    }
    const __VLS_38 = __VLS_pickFunctionalComponentCtx(VueSelect, __VLS_35);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("mb-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-[#DA2C2C]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), placeholder: ("Chegirmani kiriting %"), ...{ class: ("w-full p-3 rounded-[10px] border outline-none") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("mb-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-[#DA2C2C]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("number"), placeholder: ("Mahsulot sonini kiriting"), ...{ class: ("w-full p-3 rounded-[10px] border outline-none bg-white") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-span-12 min-[750px]:col-span-10 lg:col-span-8 flex items-center flex-wrap min-[430px]:justify-end gap-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("bg-white py-[10px] px-[32px] rounded-lg") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("bg-[#FF6200] text-white py-[10px] px-[32px] rounded-lg") }, });
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['grid'];
        __VLS_styleScopedClasses['grid-cols-12'];
        __VLS_styleScopedClasses['gap-6'];
        __VLS_styleScopedClasses['p-5'];
        __VLS_styleScopedClasses['text-black'];
        __VLS_styleScopedClasses['col-span-12'];
        __VLS_styleScopedClasses['min-[750px]:col-span-10'];
        __VLS_styleScopedClasses['lg:col-span-8'];
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
        __VLS_styleScopedClasses['col-span-12'];
        __VLS_styleScopedClasses['min-[750px]:col-span-10'];
        __VLS_styleScopedClasses['lg:col-span-8'];
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
        __VLS_styleScopedClasses['col-span-12'];
        __VLS_styleScopedClasses['min-[750px]:col-span-10'];
        __VLS_styleScopedClasses['lg:col-span-8'];
        __VLS_styleScopedClasses['p-7'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['rounded-lg'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['text-[#DA2C2C]'];
        __VLS_styleScopedClasses['px-3'];
        __VLS_styleScopedClasses['py-3'];
        __VLS_styleScopedClasses['hover:bg-slate-100'];
        __VLS_styleScopedClasses['hover:text-[#FF6200]'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['gap-4'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['mt-8'];
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
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['flex-wrap'];
        __VLS_styleScopedClasses['gap-3'];
        __VLS_styleScopedClasses['mt-5'];
        __VLS_styleScopedClasses['min-[550px]:flex-row'];
        __VLS_styleScopedClasses['min-[550px]:gap-8'];
        __VLS_styleScopedClasses['mb-1'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['w-[254px]'];
        __VLS_styleScopedClasses['block'];
        __VLS_styleScopedClasses['p-3'];
        __VLS_styleScopedClasses['rounded-lg'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['outline-none'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['gap-4'];
        __VLS_styleScopedClasses['min-[550px]:relative'];
        __VLS_styleScopedClasses['min-[550px]:top-9'];
        __VLS_styleScopedClasses['switch'];
        __VLS_styleScopedClasses['slider'];
        __VLS_styleScopedClasses['col-span-12'];
        __VLS_styleScopedClasses['min-[750px]:col-span-10'];
        __VLS_styleScopedClasses['lg:col-span-8'];
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
        __VLS_styleScopedClasses['col-span-12'];
        __VLS_styleScopedClasses['min-[750px]:col-span-10'];
        __VLS_styleScopedClasses['lg:col-span-8'];
        __VLS_styleScopedClasses['p-7'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['rounded-lg'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['gap-4'];
        __VLS_styleScopedClasses['flex-wrap'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['text-[#DA2C2C]'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['gap-2'];
        __VLS_styleScopedClasses['max-w-[300px]'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['p-3'];
        __VLS_styleScopedClasses['rounded-[10px]'];
        __VLS_styleScopedClasses['flex-1'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['outline-none'];
        __VLS_styleScopedClasses['px-3'];
        __VLS_styleScopedClasses['py-2'];
        __VLS_styleScopedClasses['hover:bg-slate-300'];
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
        __VLS_styleScopedClasses['col-span-12'];
        __VLS_styleScopedClasses['min-[750px]:col-span-10'];
        __VLS_styleScopedClasses['lg:col-span-8'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['flex-wrap'];
        __VLS_styleScopedClasses['min-[430px]:justify-end'];
        __VLS_styleScopedClasses['gap-6'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['py-[10px]'];
        __VLS_styleScopedClasses['px-[32px]'];
        __VLS_styleScopedClasses['rounded-lg'];
        __VLS_styleScopedClasses['bg-[#FF6200]'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['py-[10px]'];
        __VLS_styleScopedClasses['px-[32px]'];
        __VLS_styleScopedClasses['rounded-lg'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                Icon: Icon,
                QuillEditor: QuillEditor,
                options: options,
                DashboardHeader: DashboardHeader,
                VueSelect: VueSelect,
                editorContent: editorContent,
                editorOptions: editorOptions,
                isDeliveryAvalible: isDeliveryAvalible,
                variants: variants,
                addVariant: addVariant,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
