<template>
  <div class="w-full flex items-center justify-between space-x-4 px-3">
    <h2 class="text-xl font-medium text-tournament-900">
      {{ name }}
    </h2>
    <div class="flex items-center space-x-4">
      <span class="text-xs leading-8">TEAM SCORE</span>
      <div
        class="text-xl font-semibold"
        :class="[
          { 'text-tournament-300': score < 0 },
          { 'text-tournament-100': score > 0 },
          {
            'text-tournament-500':
              score === 0 || score === 'CUT' || score === 'WD',
          },
        ]"
      >
        {{ displayScore }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  name: {
    type: String,
    default: "",
  },
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
