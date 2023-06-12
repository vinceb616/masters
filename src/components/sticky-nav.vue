<template>
  <footer
    class="sticky bottom-0 w-full flex items-center mt-10 bg-white space-x-[1px]"
  >
    <template v-if="!viewsStore.isLive">
      <button
        v-if="viewsStore.activeView !== 'tiers'"
        class="flex-1 px-4 py-1 text-white flex items-center justify-center"
        :class="[
          { 'bg-masters-900': event === 'masters' },
          { 'bg-open-900': event === 'us open' },
        ]"
        @click="viewsStore.toggleView('tiers')"
      >
        <span>Player Tiers</span>
      </button>
    </template>
    <template v-else>
      <button
        v-if="viewsStore.activeView !== 'teams'"
        class="flex-1 px-4 py-1 text-white flex items-center justify-center"
        :class="[
          { 'bg-masters-900': event === 'masters' },
          { 'bg-open-900': event === 'us open' },
        ]"
        @click="viewsStore.toggleView('teams')"
      >
        <span>Teams</span>
      </button>
      <button
        v-if="viewsStore.activeView !== 'live'"
        class="flex-1 px-4 py-1 text-white flex items-center justify-center"
        :class="[
          { 'bg-masters-900': event === 'masters' },
          { 'bg-open-900': event === 'us open' },
        ]"
        @click="viewsStore.toggleView('live')"
      >
        <span>Live</span>
      </button>
    </template>
    <button
      v-if="viewsStore.activeView !== 'rules'"
      class="flex-1 px-4 py-1 text-white flex items-center justify-center"
      :class="[
        { 'bg-masters-900': event === 'masters' },
        { 'bg-open-900': event === 'us open' },
      ]"
      @click="viewsStore.toggleView('rules')"
    >
      <span>Rules</span>
    </button>
  </footer>
</template>

<script setup>
import { useViewsStore } from "../stores/views";

const viewsStore = useViewsStore();
const event = useViewsStore().event;

const toggleView = (params) => {
  viewStore.toggleView(params);
};
</script>
