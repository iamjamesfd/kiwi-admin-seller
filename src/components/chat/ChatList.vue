<template>
  <div>
    <ChatItem
      v-for="chat in chatList"
      :key="chat.id"
      :thread="chat"
      @click="router.push({ name: 'chatRoom', params: { roomId: chat.id } })"
    />
  </div>
</template>

<script setup lang="ts">
import type ChatThread from "@/types/chat/chat.interface";
import { ref } from "vue";
import { useRouter } from "vue-router";
import ChatItem from "./ChatItem.vue";
import { useUsersStore } from "@/store/modules/users";

const { getUsers } = useUsersStore();

const chatList = ref<ChatThread[]>([
  {
    members: [getUsers.value[0], getUsers.value[1]],
    id: "1",
    created_at: new Date(),
  },
  {
    members: [getUsers.value[0], getUsers.value[1]],
    id: "2",
    created_at: new Date(),
  },
]);

const router = useRouter();
</script>

<style scoped></style>
