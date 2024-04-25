<template>
  <div
    class="bg-slate-100 font-nova min-h-screen flex flex-col justify-between"
  >
    <main class="container max-w-3xl p-4 pb-10 mx-auto">
      <div class="w-full flex justify-center mb-10">
        <template v-if="viewsStore.event === 'masters'">
          <img
            alt="The masters"
            src="./assets/masters-logo.png"
            class="w-full max-w-[200px]"
          />
        </template>
        <template v-if="viewsStore.event === 'pga championship'">
          <img
            alt="PGA Championship"
            src="./assets/pga-championship-logo.png"
            class="w-full max-w-[200px] mix-blend-multiply"
          />
        </template>
        <template v-if="viewsStore.event === 'us open'">
          <img
            alt="Us Open"
            src="./assets/us-open-logo.png"
            class="w-full max-w-[200px] mix-blend-multiply"
          />
        </template>
        <template v-if="viewsStore.event === 'open championship'">
          <img
            alt="The Open Championship"
            src="./assets/open-championship-logo.png"
            class="w-full max-w-[200px] mix-blend-multiply"
          />
        </template>
      </div>
      <template v-if="viewsStore.activeView === 'signup'">
        <rules />
        <teams-form />
        <!-- <tiers-table /> -->
      </template>
      <template v-else>
        <template v-if="viewsStore.activeView === 'teams'">
          <!-- <player-lookup /> -->
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
    <sticky-nav v-if="viewsStore.activeView !== 'signup'" />
  </div>
</template>

<script setup>
import "./assets/index.css";
import { useLeaderboardStore } from "@/stores/leaderboard";
import { useViewsStore } from "@/stores/views";
import LeaderboardTable from "@/components/leaderboard/leaderboard.vue";
import PlayersTable from "@/components/teams/table.vue";
import StickyNav from "@/components/sticky-nav.vue";
import Live from "@/components/live/live.vue";
import Rules from "@/components/rules.vue";
import TiersTable from "@/components/tiers/tiers-table.vue";
import TeamsForm from "@/components/tiers/teams-form.vue";
import PlayerLookup from "@/components/teams/lookup.vue";
import { onBeforeMount, onMounted } from "vue";

const leaderboard = useLeaderboardStore();
const viewsStore = useViewsStore();

const fetchLeaderboard = () => {
  leaderboard.fetchLeaderboard();
};

const setDefaultView = () => {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  const eventDate = new Date(leaderboard.date);

  if (today < eventDate) {
    viewsStore.activeView = "signup";
  } else {
    viewsStore.activeView = "teams";
  }
};

onBeforeMount(async () => {
  leaderboard.createTiers();
  await leaderboard.fetchLeaderboard();
  setDefaultView();
});

onMounted(() => {
  setInterval(fetchLeaderboard, 30000);
});
</script>
