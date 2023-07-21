<template>
  <div class="prose">
    <h2
      class="flex justify-center text-xs font-medium border-t border-b px-4 text-masters-300 border-masters-900"
    >
      Rules
    </h2>

    <ul class="list-disc pl-6 py-6 space-y-2">
      <li>$20 to play. 1st place team wins the pot</li>
      <li>Pick one player from each tier</li>
      <li>Top 4 player rankings contribute to a team score</li>
      <li>Team must have 4 players make the cut to be eligible to win</li>
      <li>Lowest team score wins</li>
      <li>
        Tie breaker is decided based on your highest player ranking. If your
        highest player ranking ties your opponents then it will cascade to your
        next highest eligible player ranking (top 4 players only)
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useViewsStore } from "@/stores/views";

const event = useViewsStore().event;
</script>
