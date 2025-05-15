<template>
  <div class="mb-20 flex flex-col space-y-2">
    <div class="flex items-center justify-between space-x-4 px-3">
      <h2 class="text-xl font-medium text-slate-700">Standings</h2>
      <div class="flex items-center space-x-3">
        <div class="w-full flex items-center space-x-1">
          <div class="font-semibold flex items-center">
            <trophy-icon class="h-3 w-3 text-amber-400" />
          </div>
          <div class="flex-1 text-sm uppercase">$160</div>
        </div>
        <div class="w-full flex items-center space-x-1">
          <div class="font-semibold flex items-center">
            <trophy-icon class="h-3 w-3 text-grey-400" />
          </div>
          <div class="flex-1 text-sm uppercase">$80</div>
        </div>
        <div class="w-full flex items-center space-x-1">
          <div class="font-semibold flex items-center">
            <trophy-icon class="h-3 w-3 text-amber-700" />
          </div>
          <div class="flex-1 text-sm uppercase">$20</div>
        </div>
      </div>
    </div>

    <div class="border border-slate-300">
      <div
        v-for="(team, index) in leaderboardStore.leaderboard"
        :key="index"
        class="w-full px-3 py-1 bg-white"
        :class="{
          'border-b border-slate-300':
            index !== leaderboardStore.leaderboard.length - 1,
        }"
      >
        <standings-item :model="team" :position="index" />
      </div>
    </div>
    <button
      @click="handleScroll"
      class="transition ease-in-out duration-300 fixed bottom-16 right-4 z-10 h-10 w-10 bg-tournament-500 rounded flex items-center justify-center"
      :class="{ 'opacity-0': !state.buttonIsVisible }"
    >
      <span class="sr-only">Back to top</span>
      <chevron-up-icon class="h-6 w-6 text-white" />
    </button>
  </div>
</template>

<script setup>
import { TrophyIcon, ChevronUpIcon } from "@heroicons/vue/24/solid";
import StandingsItem from "@/components/standings/components/item.vue";
import { useLeaderboardStore } from "@/stores/leaderboard";
import { onMounted, ref } from "vue";

const leaderboardStore = useLeaderboardStore();

const state = ref({
  buttonIsVisible: false,
});

const handleScroll = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const handleButtonVisibility = () => {
  const offset = 800;

  if (window.scrollY > offset) {
    state.value.buttonIsVisible = true;
  } else {
    state.value.buttonIsVisible = false;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleButtonVisibility);
});
</script>
