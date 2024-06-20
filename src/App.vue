<script setup>
import DashboardSidebar from './components/layout/DashboardSidebar.vue'
</script>

<template>
  <!-- justify-end relative || max-[768px]:flex-col -->
  <div class="flex flex-col min-[583px]:flex-row">
    <!-- absolute left-0 z-[999] -->
    <DashboardSidebar class="order-2 min-[583px]:!order-none" />
    <!-- w-[calc(100vw-72px)]  -->
    <div
      class="h-[calc(100vh-72px)] min-[583px]:flex-1 min-[583px]:h-screen bg-[#EDEDED] overflow-auto"
    >
      <RouterView />
    </div>
  </div>
</template>
