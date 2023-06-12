<template>
  <div
    class="bg-slate-100 font-nova min-h-screen flex flex-col justify-between"
  >
    <main class="container max-w-3xl p-4 pb-0 mx-auto">
      <div class="w-full flex justify-center mb-10">
        <template v-if="viewsStore.event === 'masters'">
          <img
            alt="The masters"
            src="./assets/masters-logo.png"
            class="w-full max-w-[200px]"
          />
        </template>
        <template v-if="viewsStore.event === 'us open'">
          <img
            alt="Us Open"
            src="./assets/us-open-logo.png"
            class="w-full max-w-[200px] mix-blend-multiply"
          />
        </template>
      </div>
      <template v-if="viewsStore.activeView === 'tiers'">
        <tiers-table />
      </template>
      <template v-else>
        <template v-if="viewsStore.activeView === 'teams'">
          <leaderboard-table />
          <players-table />
        </template>
        <template v-if="viewsStore.activeView === 'live'">
          <live />
        </template>
      </template>
      <template v-if="viewsStore.activeView === 'rules'">
        <rules />
      </template>
    </main>
    <sticky-nav />
  </div>
</template>

<script setup>
import "./assets/index.css";
import { useLeaderboardStore } from "./stores/leaderboard";
import { useViewsStore } from "./stores/views";
import LeaderboardTable from "./components/leaderboard.vue";
import PlayersTable from "./components/table.vue";
import StickyNav from "./components/sticky-nav.vue";
import Live from "./components/live.vue";
import Rules from "./components/rules.vue";
import TiersTable from "./components/tiers-table.vue";

const leaderboard = useLeaderboardStore();
const viewsStore = useViewsStore();

leaderboard.createTiers();
leaderboard.fetchLeaderboard();
</script>
