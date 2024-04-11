<script lang="ts" setup>
import { defineComponent, ref, watchEffect } from "vue";

const selectedOption = ref("");
const valueWidth = ref(0);
const valueHeight = ref(0);
const valueArea = ref(0);

const emit = defineEmits([ "value-changed", "value2-changed", "value-area" ]);

watchEffect(() => {
  emit("value-changed", valueWidth.value);
});

watchEffect(() => {
  emit("value2-changed", valueHeight.value);
});

watchEffect(() => {
  emit("value-area", valueArea.value);
});

const isNumber = (evt: KeyboardEvent) => {
  let char = evt.key;
  let regex = new RegExp(/[0-9.]/);
  if (!regex.exec(char)) {
    evt.preventDefault();
  } else {
    return true;
  }
};

defineComponent({
  name: "InsertArea",
  emits: [ "value-changed", "value2-changed", "value-area" ]
});
</script>


<template>
  <div class="container__area">
    <select v-model="selectedOption" name="selectedRegion" title="Escolha da Região">
      <option disabled value="">Área do ambiente</option>
      <option>Area Total</option>
      <option>Largura e Comprimento</option>
    </select>
    <img alt="Imagem de Area" class="container__img" src="../assets/img/Area.png" />
    <div class="container__area-text">
      <div class="container__area-text-item">
        <label v-if="selectedOption === 'Area Total'" for="labArea">Area Total (m)</label>
        <input 
        v-if="selectedOption === 'Area Total'" id="labArea" v-model.number="valueArea"
          class="container__area-text-input" name="labArea" placeholder="0" @keydown="isNumber($event)" />
      </div>
      <section class="container__area-text custom__area-text">
        <div class="container__area-text-item">
          <label v-if="selectedOption === 'Largura e Comprimento'" for="labLargura">Largura (m)</label>
          <input 
          v-if="selectedOption === 'Largura e Comprimento'" id="labLargura" v-model.number="valueWidth"
            class="container__area-text-input" name="labLargura" placeholder="0" @keydown="isNumber($event)" />
        </div>
        <div class="container__area-text-item">
          <label v-if="selectedOption === 'Largura e Comprimento'" for="labComprimento">Comprimento (m)</label>
          <input 
          v-if="selectedOption === 'Largura e Comprimento'" id="labComprimento" v-model.number="valueHeight"
            class="container__area-text-input" name="labComprimento" placeholder="0" @keypress="isNumber($event)" />
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="css" scoped>
.container__area>select {
  border-radius: 50px;
  padding: 0.3rem;
  color: var(--color-heading);
  background-color: rgba(255, 255, 255, 0.3);
  border: 0.1em black solid;
  outline: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  margin-top: 0.5em;
}

option {
  background-color: var(--color-background);
  text-align: center;
}

.container__area {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 22em;
  height: 21em;
  border: var(--borda-size) solid var(--color-heading);
  border-radius: 50px;
  text-align: center;
  color: var(--color-heading);
  margin: 2em 0 0 0;
}

.container__img {
  width: 16em;
  height: 12em;
  background-repeat: no-repeat;
}

.container__area-text {
  display: flex;
  justify-content: center;
  align-items: center;
}

.custom__area-text {
  gap: 1.3em;
}

.container__area-text-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container__area-text-item>input {
  color: var(--color-heading);
  background-color: var(--color-background-input);
  border: 0;
  outline: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}

.container__area-text-item>input::placeholder {
  color: var(--color-heading);
}

.container__area-text-item>input,
.container__area-text-item>input::placeholder {
  font-size: 2rem;
  text-align: center;
}

.container__area-text-input {
  width: 4.875rem;
  height: 3rem;
}
</style>
