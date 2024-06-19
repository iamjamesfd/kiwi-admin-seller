<script setup>
import DashboardSidebar from './components/layout/DashboardSidebar.vue'
</script>

<template>
  <!-- justify-end relative || max-[768px]:flex-col -->
  <div class="flex">
    <!-- absolute left-0 z-[999] -->
    <DashboardSidebar/>
    <!-- w-[calc(100vw-72px)] -->
    <div class="flex-1  h-screen bg-[#EDEDED] overflow-auto">
      <RouterView />
    </div>
  </div>
</template>
