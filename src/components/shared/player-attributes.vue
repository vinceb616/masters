<template>
  <div class="w-full flex items-center bg-tournament-500 text-white">
    <div class="w-[50px] text-center py-0.5">
      <span class="text-[9px]"> POS </span>
    </div>
    <div class="flex-1 px-2 py-0.5">
      <span class="text-[9px]"> PLAYER </span>
    </div>
    <div v-if="!isLeaderboard" class="w-[50px] text-center py-0.5">
      <span class="text-[9px]"> THRU </span>
    </div>
    <div v-if="!isLeaderboard" class="w-[50px] text-center py-0.5">
      <span class="text-[9px]"> TODAY </span>
    </div>
    <div class="w-[54px] py-0.5 flex justify-center items-center">
      <span class="text-[9px]"> TOTAL </span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  isLeaderboard: {
    type: Boolean,
    default: false,
  },
});
</script>
