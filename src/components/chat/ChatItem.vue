<template>
  <div
    :class="{ '!bg-primary !bg-opacity-25 ': isActiveRoute }"
    class="chatitem cursor-pointer border-b border-b-stroke_primary bg-white px-4"
  >
    <div class="flex justify-between py-6">
      <div class="flex gap-3">
        <div
          class="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-orange-600 to-orange-400"
        >
          <span class="text-2xl font-medium text-white">B</span>
          <div
            class="dot absolute right-0 top-0 h-3 w-3 rounded-full bg-green-400 shadow"
          ></div>
        </div>
        <div>
          <div class="flex flex-col gap-2">
            <div class="flex gap-2">
              <p class="text-sm font-bold text-neutral-800">Barno Halilova</p>
              <div class="flex items-center justify-start gap-2">
                <div class="h-1 w-1 rounded-full bg-stone-500"></div>
                <div class="text-xs text-stone-500">2 kun</div>
              </div>
            </div>
            <div class="flex gap-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M13.0958 4.09546L6.46897 10.7228L4.90465 9.1574L4.09521 9.9674L5.66009 11.5317L4.50021 12.6916L0.967152 9.1574L0.157715 9.9674L4.09521 13.9049L4.49965 14.2913L4.90409 13.9049L6.4684 12.34L8.03271 13.9049L8.43715 14.2913L8.84159 13.9049L17.7887 4.9049L16.9798 4.09602L8.43771 12.6916L7.27728 11.5311L13.9052 4.90433L13.0958 4.09546Z"
                  fill="#3ACE29"
                />
              </svg>
              <p class="text-sm text-neutral-800">Assalomu alekum</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src="https://via.placeholder.com/48" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type ChatThread from "@/types/chat/chat.interface";
import { computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const props = defineProps<{ thread: ChatThread }>();

const isActiveRoute = computed(() => props.thread.id === route.params.roomId);
</script>
