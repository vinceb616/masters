import { defineStore } from 'pinia';

export const useViewsStore = defineStore('viewsStore', {
    state: () => ({
        activeView: 'teams'
    }),
    actions: {
        toggleView(value) {
            this.activeView = value;
        }
    },
});
