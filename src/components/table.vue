<template>
    <div class="space-y-8">
        <div
            v-for="(team, index) in leaderboardStore.createdTeams"
            :key="index"
            class="w-full"
        >
            <h2 class="flex justify-center text-masters-900 text-xs font-medium border-t border-masters-900 px-4">{{ team.teamName }}</h2>

            <div class="text-sm">
                <div class="w-full">
                    <player-attributes />
                </div>
                <div
                    v-for="(item, index) in team.players"
                    :key="index"
                    class="w-full"
                    :class="
                        { 'border-b border-masters-300': index === cutLine(team.players) },
                        { 'border-b border-masters-400': index === 3 }
                    "
                >
                    <player :model="item" :index="index" />
                </div>

                <div class="w-full">
                    <total :score="team.totalScore" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import PlayerAttributes from './player-attributes.vue';
import Player from './player.vue';
import Total from './total.vue';
import { useLeaderboardStore } from '../stores/leaderboard';

const leaderboardStore = useLeaderboardStore();

const cutLine = (players) => {
    const cutIndex = players.findIndex(player => player.statistics[0]?.displayValue > leaderboardStore.tournament.cutScore);

    console.log('cut index ', cutIndex);

    return cutIndex - 1;
}

</script>