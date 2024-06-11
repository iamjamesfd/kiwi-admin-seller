<script setup>
import DashboardSidebar from './components/layout/DashboardSidebar.vue'
</script>

<template>
  <div class="flex">
    <DashboardSidebar />
    <div class="flex-1 h-screen">
      <RouterView />
    </div>
  </div>
</template>
