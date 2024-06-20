<script setup>
import { Icon } from '@iconify/vue';
const props = defineProps(["name", "icon", "collapsed", "linkName"])
</script>

<template>
    <RouterLink
      :to="{ name: props.linkName }"
      class="flex relative items-center gap-3 text-[#9B9B9B] py-4 pl-[60px] text-[15px] hover:bg-[#1E1E23] min-[584px]:border-l-[5px] border-transparent h-[54px]"
      :class="{ '!px-0 justify-center': props.collapsed }"
    > 
      <Icon
        :icon="props.icon"
        class="min-[584px]:absolute min-[584px]:left-5 w-[24px] h-[24px] transition-all duration-500 delay-[100ms]"
      ></Icon>
      <Transition name="fade-out">
        <span class="duration-500" v-if="!props.collapsed">{{props.name}}</span>
      </Transition>
    </RouterLink>
</template>

<style scoped>
.fade-out-enter-active,
.fade-out-leave-active {
  transform: translateX(0);
  transition: opacity translateX 200ms ease;
}

.fade-out-enter-from,
.fade-out-leave-to {
  transform: translateX(200px);
  opacity: 0;
}</style>