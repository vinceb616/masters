<template>
  <div
    class="w-full flex items-center bg-masters-500 text-white"
    :class="[
      { 'bg-masters-500': event === 'masters' },
      { 'bg-open-500': event === 'us open' },
    ]"
  >
    <div class="flex-1 px-2 py-0.5">
      <span class="text-[9px]"> PLAYER </span>
    </div>
  </div>
</template>
<script setup>
import { useViewsStore } from "@/stores/views";

const event = useViewsStore().event;
</script>
