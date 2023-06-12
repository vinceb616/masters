<template>
  <div class="space-y-8">
    <div v-for="(item, index) in leaderboardStore.tierPlayers" :key="index">
      # - {{ index }}
    </div>
    <div
      v-for="(item, index) in leaderboardStore.tierGroups"
      :key="index"
      class="w-full"
    >
      <h2
        class="flex justify-center text-xs font-medium border-t px-4"
        :class="[
          { 'text-masters-900 border-masters-900': event === 'masters' },
          { 'text-open-900 border-open-900': event === 'us open' },
        ]"
      >
        Tier {{ index + 1 }}
      </h2>

      <div class="text-sm">
        <div class="w-full">
          <tier-attributes />
        </div>
      </div>
      <div
        v-for="(player, j) in item"
        :key="j"
        class="w-full flex items-center border-b border-r border-l border-slate-300"
      >
        <div class="flex-1 px-4 py-0.5 bg-white flex align-center">
          <span class="text-sm">
            {{ player.name }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TierAttributes from "./tier-attributes.vue";
import { useLeaderboardStore } from "../stores/leaderboard";
import { useViewsStore } from "@/stores/views";

const leaderboardStore = useLeaderboardStore();
const event = useViewsStore().event;
</script>
