/* __placeholder__ */
const {
  defineProps,
  defineSlots,
  defineEmits,
  defineExpose,
  defineModel,
  defineOptions,
  withDefaults
} = await import('vue')
const __VLS_fnComponent = (await import('vue')).defineComponent({})
let __VLS_functionalComponentProps
const __VLS_modelEmitsType = {}
function __VLS_template() {
  let __VLS_ctx
  /* Components */
  let __VLS_otherComponents
  let __VLS_own
  let __VLS_localComponents
  let __VLS_components
  let __VLS_styleScopedClasses
  let __VLS_resolvedLocalAndGlobalComponents
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.h1,
    __VLS_intrinsicElements.h1
  )({ ...{ class: 'text-lg font-semibold mb-5' } })
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.div,
    __VLS_intrinsicElements.div
  )({ ...{ class: 'grid grid-cols-1 lg:grid-cols-2' } })
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.div,
    __VLS_intrinsicElements.div
  )({ ...{ class: 'mb-7' } })
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.h1,
    __VLS_intrinsicElements.h1
  )({ ...{ class: 'text-sm mb-2' } })
  __VLS_elementAsFunction(__VLS_intrinsicElements.input)({
    type: 'text',
    placeholder: 'Ism familiya',
    value: 'Rahmatullo Madrahimov',
    ...{ class: 'w-full p-3 rounded-[10px] border outline-none' }
  })
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.div,
    __VLS_intrinsicElements.div
  )({ ...{ class: 'hidden lg:block lg:invisible' } })
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.div,
    __VLS_intrinsicElements.div
  )({ ...{ class: 'mb-7' } })
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.h1,
    __VLS_intrinsicElements.h1
  )({ ...{ class: 'text-sm mb-2' } })
  __VLS_elementAsFunction(__VLS_intrinsicElements.input)({
    type: 'text',
    placeholder: 'Telefon raqam',
    value: '+998 90 000 0000',
    ...{ class: 'w-full p-3 rounded-[10px] border outline-none' }
  })
  __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({})
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.h1,
    __VLS_intrinsicElements.h1
  )({ ...{ class: 'text-lg font-semibold mb-5' } })
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.div,
    __VLS_intrinsicElements.div
  )({ ...{ class: 'grid grid-cols-1 lg:grid-cols-2 gap-6' } })
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.div,
    __VLS_intrinsicElements.div
  )({ ...{ class: 'flex items-center justify-between' } })
  __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({})
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.label,
    __VLS_intrinsicElements.label
  )({ ...{ class: 'switch' } })
  __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: 'checkbox' })
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.span,
    __VLS_intrinsicElements.span
  )({ ...{ class: 'slider' } })
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.div,
    __VLS_intrinsicElements.div
  )({ ...{ class: 'hidden lg:block lg:invisible ' } })
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.div,
    __VLS_intrinsicElements.div
  )({ ...{ class: 'flex items-center justify-between' } })
  __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({})
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.label,
    __VLS_intrinsicElements.label
  )({ ...{ class: 'switch' } })
  __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: 'checkbox' })
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.span,
    __VLS_intrinsicElements.span
  )({ ...{ class: 'slider' } })
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.div,
    __VLS_intrinsicElements.div
  )({ ...{ class: 'hidden lg:block lg:invisible ' } })
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.div,
    __VLS_intrinsicElements.div
  )({ ...{ class: 'flex items-center justify-between' } })
  __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({})
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.label,
    __VLS_intrinsicElements.label
  )({ ...{ class: 'switch' } })
  __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: 'checkbox' })
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.span,
    __VLS_intrinsicElements.span
  )({ ...{ class: 'slider' } })
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.div,
    __VLS_intrinsicElements.div
  )({ ...{ class: 'flex justify-end gap-6 mt-8' } })
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.button,
    __VLS_intrinsicElements.button
  )({ ...{ class: 'bg-slate-200 py-[10px] px-[32px] rounded-lg' } })
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.button,
    __VLS_intrinsicElements.button
  )({ ...{ class: 'bg-[#FF6200] text-white py-[10px] px-[32px] rounded-lg' } })
  if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    __VLS_styleScopedClasses['text-lg']
    __VLS_styleScopedClasses['font-semibold']
    __VLS_styleScopedClasses['mb-5']
    __VLS_styleScopedClasses['grid']
    __VLS_styleScopedClasses['grid-cols-1']
    __VLS_styleScopedClasses['lg:grid-cols-2']
    __VLS_styleScopedClasses['mb-7']
    __VLS_styleScopedClasses['text-sm']
    __VLS_styleScopedClasses['mb-2']
    __VLS_styleScopedClasses['w-full']
    __VLS_styleScopedClasses['p-3']
    __VLS_styleScopedClasses['rounded-[10px]']
    __VLS_styleScopedClasses['border']
    __VLS_styleScopedClasses['outline-none']
    __VLS_styleScopedClasses['hidden']
    __VLS_styleScopedClasses['lg:block']
    __VLS_styleScopedClasses['lg:invisible']
    __VLS_styleScopedClasses['mb-7']
    __VLS_styleScopedClasses['text-sm']
    __VLS_styleScopedClasses['mb-2']
    __VLS_styleScopedClasses['w-full']
    __VLS_styleScopedClasses['p-3']
    __VLS_styleScopedClasses['rounded-[10px]']
    __VLS_styleScopedClasses['border']
    __VLS_styleScopedClasses['outline-none']
    __VLS_styleScopedClasses['text-lg']
    __VLS_styleScopedClasses['font-semibold']
    __VLS_styleScopedClasses['mb-5']
    __VLS_styleScopedClasses['grid']
    __VLS_styleScopedClasses['grid-cols-1']
    __VLS_styleScopedClasses['lg:grid-cols-2']
    __VLS_styleScopedClasses['gap-6']
    __VLS_styleScopedClasses['flex']
    __VLS_styleScopedClasses['items-center']
    __VLS_styleScopedClasses['justify-between']
    __VLS_styleScopedClasses['switch']
    __VLS_styleScopedClasses['slider']
    __VLS_styleScopedClasses['hidden']
    __VLS_styleScopedClasses['lg:block']
    __VLS_styleScopedClasses['lg:invisible']
    __VLS_styleScopedClasses['flex']
    __VLS_styleScopedClasses['items-center']
    __VLS_styleScopedClasses['justify-between']
    __VLS_styleScopedClasses['switch']
    __VLS_styleScopedClasses['slider']
    __VLS_styleScopedClasses['hidden']
    __VLS_styleScopedClasses['lg:block']
    __VLS_styleScopedClasses['lg:invisible']
    __VLS_styleScopedClasses['flex']
    __VLS_styleScopedClasses['items-center']
    __VLS_styleScopedClasses['justify-between']
    __VLS_styleScopedClasses['switch']
    __VLS_styleScopedClasses['slider']
    __VLS_styleScopedClasses['flex']
    __VLS_styleScopedClasses['justify-end']
    __VLS_styleScopedClasses['gap-6']
    __VLS_styleScopedClasses['mt-8']
    __VLS_styleScopedClasses['bg-slate-200']
    __VLS_styleScopedClasses['py-[10px]']
    __VLS_styleScopedClasses['px-[32px]']
    __VLS_styleScopedClasses['rounded-lg']
    __VLS_styleScopedClasses['bg-[#FF6200]']
    __VLS_styleScopedClasses['text-white']
    __VLS_styleScopedClasses['py-[10px]']
    __VLS_styleScopedClasses['px-[32px]']
    __VLS_styleScopedClasses['rounded-lg']
  }
  var __VLS_slots
  return __VLS_slots
  const __VLS_componentsOption = {}
  let __VLS_name
  let __VLS_defineComponent
  const __VLS_internalComponent = __VLS_defineComponent({
    setup() {
      return {}
    }
  })
}
export default (await import('vue')).defineComponent({
  setup() {
    return {}
  }
})
