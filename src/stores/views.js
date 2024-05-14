import { defineStore } from "pinia";

export const useViewsStore = defineStore("viewsStore", {
  state: () => ({
    event: "pga",
    activeView: "",
  }),
  actions: {
    toggleView(value) {
      this.activeView = value;
    },
  },
});
