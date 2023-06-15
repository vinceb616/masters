import { defineStore } from "pinia";

export const useViewsStore = defineStore("viewsStore", {
  state: () => ({
    event: "us open",
    isLive: true,
    activeView: "teams",
  }),
  actions: {
    toggleView(value) {
      this.activeView = value;
    },
  },
});
