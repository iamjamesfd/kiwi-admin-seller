<script setup>
import { Icon } from '@iconify/vue'
import { ref } from 'vue'

const sidebarCollapsed = ref(false)
// const removeElements = ref(false)

// const collapseSidebar = () => {
//   sidebarCollapsed.value = !sidebarCollapsed.value

//   setTimeout(() => {
//     removeElements.value = !removeElements.value
//   }, 1000)
// }
</script>

<template>
  <div
    class="w-[312px] h-screen bg-[#26282D] relative duration-500 overflow-hidden"
    :class="{ 'w-[72px]': sidebarCollapsed }"
  >
    <div
      class="flex justify-end items-center px-8 py-6 mb-10 min-h-24"
      :class="{ '!px-0 justify-center': sidebarCollapsed }"
    >
      <Transition name="dissapear">
        <h1 class="text-[28px] text-white duration-200 flex-1" v-if="!sidebarCollapsed">
          Mandarin
        </h1>
      </Transition>
      <img
        src="@/assets/layout-icons/sidebar-toggler.svg"
        alt=""
        class="w-[24px] h-[24px] duration-200"
        @click="sidebarCollapsed = !sidebarCollapsed"
      />
    </div>
    <div>
      <ul>
        <li>
          <RouterLink
            :to="{ name: 'products' }"
            class="flex items-center gap-3 text-[#9B9B9B] py-4 px-9 text-[15px] hover:bg-[#1E1E23] border-l-[5px] border-transparent"
            :class="{ '!px-0 justify-center': sidebarCollapsed }"
          >
            <Icon icon="lucide:box" class="w-[24px] h-[24px]"></Icon>
            <Transition name="fade-out">
              <span class="duration-200" v-if="!sidebarCollapsed">Mahsulotlar</span>
            </Transition>
          </RouterLink>
        </li>
        <li>
          <RouterLink
            :to="{ name: 'analytics' }"
            class="flex items-center gap-3 text-[#9B9B9B] py-4 px-9 text-[15px] hover:bg-[#1E1E23] border-l-[5px] border-transparent"
            :class="{ '!px-0 justify-center': sidebarCollapsed }"
          >
            <Icon icon="flowbite:chart-line-up-outline" class="w-[24px] h-[24px]"></Icon>
            <Transition name="fade-out">
              <span class="duration-200 delay-[50ms]" v-if="!sidebarCollapsed">Analitika</span>
            </Transition>
          </RouterLink>
        </li>
        <li>
          <RouterLink
            :to="{ name: 'comments' }"
            class="flex items-center gap-3 text-[#9B9B9B] py-4 px-9 text-[15px] hover:bg-[#1E1E23] border-l-[5px] border-transparent"
            :class="{ '!px-0 justify-center': sidebarCollapsed }"
          >
            <Icon icon="ph:star" class="w-[24px] h-[24px]"></Icon>
            <Transition name="fade-out">
              <span class="duration-200 delay-[100ms]" v-if="!sidebarCollapsed">Sharhlar</span>
            </Transition>
          </RouterLink>
        </li>
        <li>
          <RouterLink
            :to="{ name: 'followers' }"
            class="flex items-center gap-3 text-[#9B9B9B] py-4 px-9 text-[15px] hover:bg-[#1E1E23] border-l-[5px] border-transparent"
            :class="{ '!px-0 justify-center': sidebarCollapsed }"
          >
            <Icon icon="mage:users" class="w-[24px] h-[24px]"></Icon>
            <Transition name="fade-out">
              <span class="duration-200 delay-[150ms]" v-if="!sidebarCollapsed">Obunachilar</span>
            </Transition>
          </RouterLink>
        </li>
        <li>
          <RouterLink
            :to="{ name: 'settings' }"
            class="flex items-center gap-3 text-[#9B9B9B] py-4 px-9 text-[15px] hover:bg-[#1E1E23] border-l-[5px] border-transparent"
            :class="{ '!px-0 justify-center': sidebarCollapsed }"
          >
            <Icon icon="tabler:settings-2" class="w-[24px] h-[24px]"></Icon>
            <Transition name="fade-out">
              <span class="duration-200 delay-[200ms]" v-if="!sidebarCollapsed">Sozlamalar</span>
            </Transition>
          </RouterLink>
        </li>
      </ul>
    </div>
    <div
      class="w-full px-8 py-6 text-white flex items-center justify-end absolute bottom-0 min-h-28"
      :class="{ '!px-0 justify-center': sidebarCollapsed }"
    >
      <Transition name="dissapear">
        <div class="flex items-center gap-3 duration-200 flex-1" v-if="!sidebarCollapsed">
          <div class="w-[50px] h-[50px] bg-gray-400 rounded-full"></div>
          <h1 class="text-lg">Rahmatulloh</h1>
        </div>
      </Transition>
      <Icon icon="iconamoon:menu-kebab-vertical-bold" class="w-[24px] h-[24px]"></Icon>
    </div>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  @apply bg-[#1E1E23] border-white;
}
.fade-out-enter-active,
.fade-out-leave-active {
  transform: translateX(0);
  transition: opacity translateX 200ms ease;
}

.fade-out-enter-from,
.fade-out-leave-to {
  transform: translateX(100px);
  opacity: 0;
}

.dissapear-enter-active,
.dissapear-leave-active {
  transition: opacity 200ms ease;
}

.dissapear-enter-from,
.dissapear-leave-to {
  opacity: 0;
}
</style>
