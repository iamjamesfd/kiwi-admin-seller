<script setup lang="ts">
import DashboardSidebar from '../components/layout/DashboardSidebar.vue'
</script>
<template>
  <div class="flex flex-col min-[583px]:!flex-row">
    <DashboardSidebar class="order-2 min-[583px]:!order-none" />
    <div
      class="h-[calc(100svh-72px)] min-[583px]:flex-1 min-[583px]:h-[100svh] bg-[#EDEDED] overflow-auto"
    >
      <RouterView />
    </div>
  </div>
</template>
