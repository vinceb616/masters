<template>
  <div class="flex w-full flex-col space-y-1 mb-10">
    <label class="sr-only" for="search">Search</label>
    <input
      v-model="state.lookupName"
      id="searchPlayer"
      type="text"
      name="search"
      class="appearance-none bg-white py-2 px-3 rounded w-full"
      placeholder="Search for player"
    />
  </div>
  <div class="space-y-2">
    <div class="w-full px-3">
      <h2 class="text-xl font-medium text-slate-700">Leaderboard</h2>
    </div>

    <div class="space-y-4">
      <div>
        <div
          v-for="(player, index) in sortedLivePlayers"
          :key="index"
          class="w-full relative"
        >
          <leaderboard-item :model="player" :show-player-id="false" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive } from "vue";
import LeaderboardItem from "@/components/leaderboard/components/item.vue";
import { useLeaderboardStore } from "@/stores/leaderboard";

const leaderboardStore = useLeaderboardStore();

const state = reactive({
  lookupName: "",
});

const sortedLivePlayers = computed(() => {
  let playerList = [];
  let playerHasNotStartedList = [];
  let cutPlayers = [];

  leaderboardStore.players.forEach((player) => {
    if (
      player.status?.displayValue === "WD" ||
      player.status?.displayValue === "CUT"
    ) {
      cutPlayers = [...cutPlayers, player];
    } else if (
      player.status?.type?.name === "STATUS_SCHEDULED" &&
      player.status?.teeTime
    ) {
      playerHasNotStartedList = [...playerHasNotStartedList, player];
    } else {
      playerList = [...playerList, player];
    }
  });

  playerList.sort((a, b) =>
    a.statistics[0].value > b.statistics[0].value ? 1 : -1
  );

  playerList = [...playerList, ...playerHasNotStartedList, ...cutPlayers];

  if (state.lookupName.length > 0) {
    return playerList.filter((player) =>
      player.athlete?.displayName
        ?.toLowerCase()
        .includes(state.lookupName.toLowerCase())
    );
  } else {
    return playerList;
  }
});
</script>
