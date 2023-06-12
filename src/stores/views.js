import { defineStore } from "pinia";

export const useViewsStore = defineStore("viewsStore", {
  state: () => ({
    event: "us open",
    isLive: false,
    activeView: "tiers",
  }),
  actions: {
    toggleView(value) {
      this.activeView = value;
    },
  },
});
