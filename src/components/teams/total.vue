<template>
  <div class="w-full flex items-center">
    <div class="flex-1 px-4 py-0.5 bg-tournament-500 text-white text-[12px]">
      TEAM SCORE
    </div>
    <div
      class="w-[54px] py-0.5 flex justify-center items-center text-tournament-200"
      :class="[
        { 'bg-tournament-300 border-tournament-300': score < 0 },
        {
          'bg-tournament-900 border-tournament-900':
            score > -1 || score === 'CUT',
        },
      ]"
    >
      {{ displayScore }}
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  score: {
    type: Number,
    default: null,
  },
});

const displayScore = computed(() => {
  if (props.score === 0) {
    return "E";
  } else {
    return props.score;
  }
});
</script>
