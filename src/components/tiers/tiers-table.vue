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
        class="flex justify-center text-xs font-medium border-t px-4 text-tournament-900 border-tournament-900"
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
        <div class="flex-1 px-2 py-0.5 bg-white flex align-center">
          <span class="text-sm">
            {{ player.name }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TierAttributes from "@/components/tiers/tier-attributes.vue";
import { useLeaderboardStore } from "@/stores/leaderboard";

const leaderboardStore = useLeaderboardStore();
</script>

<style lang="scss" scoped>
.select-wrapper {
  position: relative;
}
.select-wrapper:after {
  content: "";
  display: block;
  height: 24px;
  width: 24px;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background-image: url(../../assets/chevron-down.svg);
  background-size: 24px 24px;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>
