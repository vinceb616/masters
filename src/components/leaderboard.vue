<template>
  <div class="border-l border-slate-300 text-sm mb-8">
    <div class="w-full">
      <div class="w-full flex items-center bg-masters-500 text-white">
        <div class="w-[50px] text-center py-0.5">
          <span class="text-[9px]"> POS </span>
        </div>
        <div class="flex-1 px-2 py-0.5">
          <span class="text-[9px]"> PAYOUT </span>
        </div>
      </div>
    </div>
    <div class="w-full">
      <div class="w-full flex items-center">
        <div
          class="w-[50px] text-center py-0.5 bg-white border-b border-slate-300"
        >
          <span class="text-xs"> 1ST </span>
        </div>
        <div
          class="flex-1 px-2 py-0.5 bg-white flex align-center border-b border-l border-slate-300"
        >
          <span> $240 </span>
        </div>
      </div>
    </div>
    <div>
      <div class="w-full flex items-center">
        <div
          class="w-[50px] text-center py-0.5 bg-white border-b border-slate-300"
        >
          <span class="text-xs"> 2ND </span>
        </div>
        <div
          class="flex-1 px-2 py-0.5 bg-white flex align-center border-b border-l border-slate-300"
        >
          <span> $60 </span>
        </div>
      </div>
    </div>
    <div>
      <div class="w-full flex items-center">
        <div
          class="w-[50px] text-center py-0.5 bg-white border-b border-slate-300"
        >
          <span class="text-xs"> 3RD </span>
        </div>
        <div
          class="flex-1 px-2 py-0.5 bg-white flex align-center border-b border-l border-slate-300"
        >
          <span> $20 </span>
        </div>
      </div>
    </div>
  </div>
  <div class="mb-20">
    <h2
      class="flex justify-center text-masters-300 text-xs font-medium border-t border-masters-900 px-4"
    >
      Leaderboard
    </h2>

    <div class="border-l border-slate-300 text-sm">
      <div class="w-full">
        <player-attributes :isLeaderboard="true" />
      </div>
      <div
        v-for="(team, index) in leaderboardStore.leaderboard"
        :key="index"
        class="w-full"
      >
        <leaderboard-item :model="team" :position="index" />
      </div>
    </div>
  </div>
</template>

<script setup>
import PlayerAttributes from "./player-attributes.vue";
import LeaderboardItem from "./leaderboard-item.vue";
import { useLeaderboardStore } from "../stores/leaderboard";

const leaderboardStore = useLeaderboardStore();
</script>
