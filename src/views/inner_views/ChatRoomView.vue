<template>
  <div
    class="relative h-[100dvh] w-full flex-col md:flex md:h-[588px] md:overflow-visible"
  >
    <ChatRoomHeader
      class="sticky top-0"
      name="Nilu"
      status="yozmoqda..."
      @back="router.push({ name: 'chats'})"
    />

    <div
      ref="chatScrollContainer"
      class="h-[calc(100%-150px)] overflow-auto scroll-smooth pb-3 md:h-auto md:flex-1"
      @scroll="handleScroll"
    >
      <div
        class="sticky top-0 z-10 mx-3 mb-20 mt-3 rounded-lg border bg-white p-4 transition-all"
        :class="{
          '!mx-0 !rounded-none border-b  border-l-0 border-r-0': canShrink,
        }"
      >
        <div class="flex gap-3">
          <div class="img h-[48px] w-[48px] overflow-hidden rounded-lg">
            <img src="https://picsum.photos/48" class="rounded-lg" alt="" />
          </div>
          <div class="flex flex-1 flex-col gap-2">
            <p class="text-sm leading-normal text-[#454545]">
              Miss Dior Ayollar uchun atir
            </p>
            <div class="flex justify-between">
              <p class="text-sm font-bold leading-[18px]">89 000 so'm</p>
              <span class="text-xs text-font-accent-1">Id: 511477</span>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-4">
        <ChatRoomBody />
      </div>
    </div>

    <ChatRoomBottom @message-send="scrollToTop" />
  </div>
</template>

<script setup lang="ts">
import ChatRoomBody from "@/components/chat/ChatRoomBody.vue";
import ChatRoomBottom from "@/components/chat/ChatRoomBottom.vue";
import ChatRoomHeader from "@/components/chat/ChatRoomHeader.vue";
import type User from "@/types/user/user.interface";
import { inject, ref, provide, onMounted, Ref, nextTick } from "vue";
import { useRouter } from "vue-router";
import  type IMessage from "@/types/chat/message.interface";

const users = inject<User[]>("users", []);

const router = useRouter();
const canShrink = ref(false);
const chatScrollContainer = ref<HTMLElement | null>(null);

const messages = ref<IMessage[]>([
  {
    user: users[0],
    id: "1",
    send_at: "9/22/2122",
    receiver: users[1],
    text: "Hello! I bought a product earlier, but I'm unsure how to use it properly",
    attachments: [],
  },
  {
    user: users[1],
    id: "1",
    send_at: "9/22/2122",
    receiver: users[1],
    text: "Of course, which product did you buy? I'd like to know how I can help you with its usage",
    attachments: [],
  },
  {
    user: users[0],
    id: "1",
    send_at: "9/22/2122",
    receiver: users[1],
    text: "I purchased a new JavaScript library, but I'm having trouble installing and utilizing it.",
    attachments: [],
  },
  {
    user: users[1],
    id: "1",
    send_at: "9/22/2122",
    receiver: users[1],
    text: "I see. There are installation guides and documentation available for JavaScript libraries. You'll need to install the specific library and version you bought.",
    attachments: [],
  },
  {
    user: users[0],
    id: "1",
    send_at: "9/22/2122",
    receiver: users[1],
    text: "Great! I bought the Vue.js library. I need guidance on how to install it, get started, and manage its functionalities.",
    attachments: [],
  },
  {
    user: users[1],
    id: "1",
    send_at: "9/22/2122",
    receiver: users[1],
    text: "Installing and using the Vue.js library involves several steps outlined in the installation guide. First, follow the steps provided in the installation manual. Then, by using simple code samples, you'll gain an understanding of how the Vue.js library functions.",
    attachments: [],
  },
  {
    user: users[0],
    id: "1",
    send_at: "9/22/2122",
    receiver: users[1],
    text: "Thank you so much! I'd like to try out these steps and see how it goes.",
    attachments: [],
  },
  {
    user: users[1],
    id: "1",
    send_at: "9/22/2122",
    receiver: users[1],
    text: "I'm glad to assist you! I'm ready to help with installing and using the library. I hope Vue.js proves to be beneficial for your projects! 🖥️✨",
    attachments: [],
  },
]);

provide("messages", messages);

onMounted(() => {});

const scrollToTop = () => {
  console.log("HELLO SOMET");
  nextTick(() => {
    if (chatScrollContainer.value) {
      (chatScrollContainer as Ref<HTMLElement>).value.scrollTop = (
        chatScrollContainer as Ref<HTMLElement>
      ).value.scrollHeight;
    }
  });
};

const handleScroll = (event: Event) => {
  // @ts-ignore
  const scrollTop = event.target.scrollTop;
  if (scrollTop > 10) {
    canShrink.value = true;
  } else {
    canShrink.value = false;
  }
};
</script>

<style scoped></style>
