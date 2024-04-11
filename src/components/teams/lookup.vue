<template>
  <div class="flex flex-col space-y-4 mb-8">
    <div class="flex w-full flex-col space-y-1">
      <label class="text-sm" for="search">Player Lookup</label>
      <input
        v-model="state.lookupName"
        id="searchPlayer"
        type="text"
        name="search"
        class="appearance-none bg-white py-2 px-3 rounded w-full"
      />
    </div>
    <div class="w-full">
      <div class="w-full">
        <player-attributes :isLeaderboard="true" />
      </div>

      <div class="border-l border-slate-300 text-sm">
        <div v-for="(player, index) in players" :key="index" class="w-full">
          <live-item :model="player" :position="index" :show-player-id="true" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive } from "vue";
import PlayerAttributes from "@/components/shared/player-attributes.vue";
import LiveItem from "@/components/live/live-item.vue";
import { useLeaderboardStore } from "@/stores/leaderboard";

const leaderboardStore = useLeaderboardStore();

const state = reactive({
  lookupName: "",
});

const players = computed(() => {
  let players = leaderboardStore.players;

  if (state.lookupName.length > 0) {
    return players.filter((player) =>
      player.athlete?.displayName
        ?.toLowerCase()
        .startsWith(state.lookupName.toLowerCase())
    );
  } else {
    return players;
  }
});
</script>
