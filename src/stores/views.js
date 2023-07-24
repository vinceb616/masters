import { defineStore } from "pinia";

export const useViewsStore = defineStore("viewsStore", {
  state: () => ({
    event: "masters",
    isLive: false,
    activeView: "tiers",
  }),
  actions: {
    toggleView(value) {
      this.activeView = value;
    },
  },
});
