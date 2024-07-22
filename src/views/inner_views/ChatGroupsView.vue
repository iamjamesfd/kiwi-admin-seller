<template>
  <DashboardHeader title="Chat" />
 <div class="gap-x-5 py-5 md:grid md:grid-cols-9">
    <div class="bg-white px-4 p-4 border-b">
      <label for="search-input" class="bg-[#F5F5F5] flex gap-3 items-center p-2 rounded-lg">
        <Icon icon="iconamoon:search" class="w-6 h-6"></Icon>
        <input type="text" placeholder="Qidiruv..." id="search-input" class="flex-1 outline-none bg-transparent">
      </label>
    </div>
    <ChatList
      :class="{ hidden: chatOpen }"
      class="border-stroke_primary md:col-span-12 md:overflow-hidden md:rounded-lg md:border lg:col-span-4 lg:block"
    />
    <router-view v-slot="{ Component }">
      <div
        :class="{ 'hidden lg:border': !chatOpen }"
        class="overflow-hidden border-stroke_primary md:col-span-12 md:rounded-lg md:border lg:col-span-5 lg:block"
      >
        <component :is="Component" />
        <div
          v-if="!Component"
          class="flex h-[588px] items-center justify-center"
        >
          <div class="flex flex-col items-center space-y-4 *:text-[#8CAAC9]">
            <Icon icon="ant-design:message-outlined" height="64" />
            <p class="text-xl">Chatni tanlang</p>
          </div>
        </div>
      </div>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import ChatList from "@/components/chat/ChatList.vue";
import DashboardHeader from "@/components/layout/DashboardHeader.vue";
import { Icon } from "@iconify/vue";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const chatOpen = ref(false);

watch(
  () => route.path,
  (path) => {
    if (route.params.roomId) {
      chatOpen.value = true;
    } else {
      chatOpen.value = false;
    }
  }
);
</script>

