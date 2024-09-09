<script setup lang="ts">
import DashboardSidebar from './components/layout/DashboardSidebar.vue'
import Toast from 'primevue/toast'
</script>

<template>
  <router-view />

  <Teleport to="#toasts">
    <Toast />
  </Teleport>
</template>
<!-- justify-end relative || max-[768px]:flex-col -->
<!-- absolute left-0 z-[999] -->
<!-- w-[calc(100vw-72px)]  -->
