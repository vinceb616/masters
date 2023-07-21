import { defineStore } from "pinia";

export const useViewsStore = defineStore("viewsStore", {
  state: () => ({
    event: "open championship",
    isLive: true,
    activeView: "teams",
  }),
  actions: {
    toggleView(value) {
      this.activeView = value;
    },
  },
});
