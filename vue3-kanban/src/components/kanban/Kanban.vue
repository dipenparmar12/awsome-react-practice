<script setup>
import Sidebar from './Sidebar.vue'
</script>

<template>
  <div class="h-screen flex">
    <Sidebar />
    <div class="flex-1 min-w-0 bg-white">
      <div class="border-b-2 border-gray-200"></div>
      <div>main</div>
    </div>
  </div>
</template>
