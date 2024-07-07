<template>
  <div>
    <p class="mb-4 text-center text-sm text-[#444]">Kecha</p>
    <div class="messages space-y-2.5">
      <Message
        v-for="(message, index) in messages"
        :key="message.id"
        :message="message"
        :last="index === messages.length - 1"
        :self="false"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type IMessage from "@/types/chat/message.interface";
import type User from "@/types/user/user.interface";
import { inject, Ref, ref, watch } from "vue";
import Message from "./Message.vue";

const user = inject<User>("mainUser", {
  id: "0",
  name: { firstName: "null", lastName: "null" },
  joined_at: new Date(),
  profile: { img: "", followers: [], following: [] },
});
const messages = inject<Ref<IMessage[]>>("messages", ref([]));

watch(messages, () => {
  console.log("Messages changed");
});
</script>

<style scoped></style>
