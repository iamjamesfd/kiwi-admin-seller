<template>
  <DashboardHeader title="Chat" />
 <div class="gap-x-5 p-5 md:grid md:grid-cols-9">
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

