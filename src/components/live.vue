<template>
    <div>
        <h2 class="flex justify-center text-masters-300 text-xs font-medium border-t border-masters-900 px-4">Live Leaderboard</h2>

        <div class="border-l border-slate-300 text-sm">
            <div class="w-full">
                <player-attributes :isLeaderboard="true" />
            </div>
            <div
                v-for="(player, index) in sortedLivePlayers"
                :key="index"
                class="w-full"
            >
                <live-item :model="player" :position="index" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import PlayerAttributes from './player-attributes.vue';
import LiveItem from './live-item.vue';
import { useLeaderboardStore } from '../stores/leaderboard';

const leaderboardStore = useLeaderboardStore();

const sortedLivePlayers = computed(() => {
    let playerList = [];
    let cutPlayers = [];

    leaderboardStore.players.forEach(player => {

        if (player.status?.displayValue === 'WD') {
            cutPlayers = [...cutPlayers, player]
        } else {
            playerList = [...playerList, player];
        }
    });

    playerList.sort((a, b) => (a.statistics[0].value > b.statistics[0].value) ? 1 : -1);

    playerList = [...playerList, ...cutPlayers]

    return playerList;
});
</script>