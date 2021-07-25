<template>
  <main class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
    <pixelarticons-sliders class="icon-btn mx-2 text-2xl" />
    <div>Hegarty allow calculator</div>
    <p class="mt-2 opacity-50">
      This is the options page
    </p>

    <div class="mt-4">
      <label class="inline-flex items-center">
        <input type="checkbox" class="rounded checked:bg-teal-600 checked:focus:bg-teal-600 checked:hover:bg-teal-700 focus:ring-teal-600 " v-model="storageDemo.enabled">
        <span class="ml-2">Enable extension</span>
      </label>
    </div>

    <div class="mt-4">
      Powered by Vite <pixelarticons-zap class="align-middle" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { storageDemo } from '~/logic/storage'
</script>
