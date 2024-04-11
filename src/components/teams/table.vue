<template>
  <div class="space-y-8">
    <div
      v-for="(team, index) in leaderboardStore.createdTeams"
      :key="index"
      class="w-full"
    >
      <h2
        class="flex justify-center text-tournament-900 text-xs font-medium border-t border-tournament-900 px-4"
      >
        {{ team.teamName }}
      </h2>

      <div class="text-sm">
        <div class="w-full">
          <player-attributes />
        </div>
        <div
          v-for="(item, index) in team.players"
          :key="index"
          class="w-full"
          :class="{ 'border-b border-tournament-400': index === 3 }"
        >
          <div
            class="w-full"
            :class="{
              'border-b border-tournament-300':
                index === cutLine(team.players) &&
                leaderboardStore.tournament.numberOfRounds < 3,
            }"
          >
            <player
              :model="item"
              :index="index"
              :cut-index="cutLine(team.players)"
            />
          </div>
        </div>

        <div class="w-full">
          <total :score="team.totalScore" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Player from "@/components/teams/player.vue";
import PlayerAttributes from "@/components/shared/player-attributes.vue";
import Total from "@/components/teams/total.vue";
import { useLeaderboardStore } from "@/stores/leaderboard";

const leaderboardStore = useLeaderboardStore();

const cutLine = (players) => {
  const cutIndex = players.findIndex(
    (player) =>
      player.statistics[0]?.displayValue > leaderboardStore.tournament.cutScore
  );

  return cutIndex - 1;
};
</script>
