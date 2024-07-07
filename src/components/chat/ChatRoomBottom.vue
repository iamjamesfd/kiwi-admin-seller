<template>
  <div
    class="sticky bottom-0 flex w-full items-center gap-3 border border-t border-t-stroke_primary bg-white px-2 py-2 md:static"
  >
    <div>
      <Icon icon="solar:gallery-linear" height="24" />
    </div>
    <div class="flex-1">
      <textarea
        @keydown.ctrl.enter="sendMessage"
        v-model="messageText"
        placeholder="Xabar yuboring"
        class="h-[40px] max-h-[200px] w-full resize-none overflow-y-auto rounded bg-[#F5F5F5] py-2.5 pl-2.5 text-sm placeholder:text-[#686767] focus:outline-none focus:ring-1 focus:ring-gray-300"
      ></textarea>
    </div>
    <button @click="sendMessage">
      <Icon icon="ph:paper-plane-tilt-fill" class="text-primary" height="24" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

import type IMessage from "@/types/chat/message.interface";
import type User from "@/types/user/user.interface";
import { inject, Ref, ref } from "vue";

const emit = defineEmits<{ (e: "messageSend", v: IMessage): void }>();

const user = inject<User>("mainUser", {
  id: "0",
  name: { firstName: "null", lastName: "null" },
  joined_at: new Date(),
  profile: { img: "", followers: [], following: [] },
});

const users = inject<User[]>("users", []);

const messages = inject<Ref<IMessage[]>>("messages", ref([]));

const messageText = ref("");

const sendMessage = () => {
  const message = {
    id: Math.random().toString(),
    text: messageText.value,
    user,
    receiver: users[0],
    send_at: new Date().toLocaleDateString(),
  };
  messages.value.push(message);
  emit("messageSend", message);
  messageText.value = "";
  console.log("IDK BUT WE ALREADY EMMITED THAT");
};
</script>
