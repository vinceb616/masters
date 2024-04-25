import { defineStore } from "pinia";

export const useViewsStore = defineStore("viewsStore", {
  state: () => ({
    event: "masters",
    activeView: "",
  }),
  actions: {
    toggleView(value) {
      this.activeView = value;
    },
  },
});
