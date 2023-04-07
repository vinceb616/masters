<template>
    <footer class="sticky bottom-0 w-full flex items-center mt-10 bg-white space-x-[1px]">
        <button
            v-if="viewsStore.activeView !== 'teams'"
            class="flex-1 px-4 py-1 bg-masters-900 text-white flex items-center justify-center"
            @click="viewsStore.toggleView('teams')"
        >
            <span>Teams</span>
        </button>
        <button 
            v-if="viewsStore.activeView !== 'rules'"
            class="flex-1 px-4 py-1 bg-masters-900 text-white flex items-center justify-center"
            @click="viewsStore.toggleView('rules')"
        >
            <span>Rules</span>
        </button>
        <button 
            v-if="viewsStore.activeView !== 'live'"
            class="flex-1 px-4 py-1 bg-masters-900 text-white flex items-center justify-center"
            @click="viewsStore.toggleView('live')"
        >
            <span>Live</span>
        </button>
    </footer>
</template>

<script setup>
import { useViewsStore } from '../stores/views';

const viewsStore = useViewsStore();

const toggleView = (params) => {
    viewStore.toggleView(params);
}
</script>