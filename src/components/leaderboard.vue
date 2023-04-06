<template>
    <div class="mb-20">
        <h2 class="flex justify-center text-masters-300 text-xs font-medium border-t border-masters-900 px-4">Leaderboard</h2>

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
import PlayerAttributes from './player-attributes.vue';
import LeaderboardItem from './leaderboard-item.vue';
import { useLeaderboardStore } from '../stores/leaderboard';

const leaderboardStore = useLeaderboardStore();
</script>