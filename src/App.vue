<template>
  <div class="bg-slate-100 font-nova">
    <main class="container max-w-3xl p-4 pb-10">
      <div class="w-full flex justify-center mb-10">
        <img alt="The masters" src="./assets/masters-logo.png" class="w-full max-w-[200px]" />
      </div>
      <leaderboard-table />
      <players-table />
    </main>
  </div>
</template>

<script setup>
import './assets/index.css';
import { useLeaderboardStore } from './stores/leaderboard';
import LeaderboardTable from './components/leaderboard.vue';
import PlayersTable from './components/table.vue'

const leaderboard = useLeaderboardStore();

leaderboard.fetchLeaderboard();
</script>