<template>
  <div class="w-full flex items-center">
    <div class="w-[50px] text-center py-0.5 bg-white border-b border-slate-300">
      <span class="text-xs">
        {{ calculatedPosition }}
      </span>
    </div>
    <div
      class="flex-1 px-2 py-0.5 bg-white flex align-center border-b border-l border-slate-300"
    >
      <span>
        {{ model.teamName }}
      </span>
    </div>
    <div
      class="w-[54px] py-0.5 flex justify-center items-center border-b text-tournament-200"
      :class="[
        {
          'bg-tournament-300 border-tournament-300': model.totalScore < 0,
        },
        {
          'bg-tournament-900 border-tournament-900':
            model.totalScore > -1 || displayScore === 'CUT',
        },
      ]"
    >
      <span>
        {{ displayScore }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useLeaderboardStore } from "@/stores/leaderboard";

const leaderboardStore = useLeaderboardStore();

const props = defineProps({
  model: {
    type: Object,
    default: () => ({}),
  },
  position: {
    type: Number,
    default: null,
  },
});

const displayScore = computed(() => {
  if (props.model.totalScore === 0) {
    return "E";
  } else {
    return props.model.totalScore;
  }
});

const calculatedPosition = computed(() => {
  let rank = leaderboardStore.leaderboard.findIndex(
    (team) => team.totalScore === props.model.totalScore
  );

  return rank + 1;
});
</script>
