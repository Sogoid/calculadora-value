// store.ts
import { defineStore } from "pinia";

export const useCalculateStore = defineStore("main", {
  state: () => ({
    somaTotal: 0
  }),
  actions: {
    updateSomaTotal(valor: number) {
      this.somaTotal = valor;
    }
  }
});
