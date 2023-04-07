<template>
  <div class="bg-slate-100 font-nova min-h-screen flex flex-col justify-between">
    <main class="container max-w-3xl p-4 pb-0">
      <div class="w-full flex justify-center mb-10">
        <img alt="The masters" src="./assets/masters-logo.png" class="w-full max-w-[200px]" />
      </div>
      <template v-if="viewsStore.activeView === 'teams'">
        <leaderboard-table />
        <players-table />
      </template>
      <template v-if="viewsStore.activeView === 'live'">
        <live />
      </template>
      <template v-if="viewsStore.activeView === 'rules'">
        <rules />
      </template>
    </main>
    <sticky-nav />
  </div>
</template>

<script setup>
import './assets/index.css';
import { useLeaderboardStore } from './stores/leaderboard';
import { useViewsStore } from './stores/views';
import LeaderboardTable from './components/leaderboard.vue';
import PlayersTable from './components/table.vue';
import StickyNav from './components/sticky-nav.vue';
import Live from './components/live.vue';
import Rules from './components/rules.vue';

const leaderboard = useLeaderboardStore();
const viewsStore = useViewsStore();

leaderboard.fetchLeaderboard();
</script>