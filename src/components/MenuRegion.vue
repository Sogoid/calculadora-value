<script lang="ts" setup>
import { defineComponent, ref, watchEffect } from "vue";

const selectedRegion = ref("");
const selectedEnvironment = ref("");
const selectedRenewal = ref("");

const emit = defineEmits([ "value-region", "value-environment", "value-renewal" ]);
watchEffect(() => {
  // console.log("O valor da região selecionada é", selectedRegion.value);
  emit("value-region", selectedRegion.value);
});

watchEffect(() => {
  // console.log("O valor do ambiente selecionado é", selectedEnvironment.value);
  emit("value-environment", selectedEnvironment.value);
});

watchEffect(() => {
  // console.log("O valor da renovação selecionada é", selectedRenewal.value);
  emit("value-renewal", selectedRenewal.value);
});

defineComponent({
  name: "MenuRegion",
  emits: [ "value-region", "value-environment", "value-renewal" ]
});
</script>

<template>
  <div class="container">
    <select v-model="selectedRegion" name="selectedRegion" title="Escolha da Região">
      <option class="container__option" disabled value="">ESCOLHA DA REGIÃO</option>
      <option>Região Norte</option>
      <option>Região Nordeste</option>
      <option>Região Centro-Oeste</option>
      <option>Região Sudeste</option>
      <option>Região Sul</option>
    </select>

    <select v-model="selectedEnvironment" name="selectedEnvironment" title="Selecionar Ambiente">
      <option class="container__option" disabled value="">SELECIONAR AMBIENTE</option>
      <option>Sala de estar</option>
      <option>Sala de jantar</option>
      <option>Quarto</option>
      <option>Cozinha</option>
      <option>Escritório</option>
    </select>

    <select v-model="selectedRenewal" name="selectedRenewal" title="Selecionar Renovação">
      <option class="container__option" disabled value="">SELECIONAR RENOVAÇÃO</option>
      <option>Com renovação de ar</option>
      <option>Sem renovação de ar</option>
    </select>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
}

.container__option {
  text-align: center;
}

.container>select {
  border-radius: 50px;
  padding: 0.5rem;
  color: var(--color-heading);
  background-color: rgba(255, 255, 255, 0.3);
  border: 0.1em black solid;
  outline: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  width: 16em;
}

option {
  background-color: var(--color-background);
}

@media screen and (min-width: 800px) {
  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0 1rem;
    justify-content: space-around;
  }
}

@media screen and (min-width: 1280px) {
  .container {
    justify-content: center;
  }

  .container>select {
    width: 13.5rem;
  }
}

@media screen and (min-width: 2560px) {
  .container {
    gap: 5rem;
    padding: 1rem;
  }

  .container>select {
    padding: 0.8rem;
    font-size: var(--base-font-size);
    width: 15em;
  }
}
</style>
