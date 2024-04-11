<script lang="ts" setup>
import {defineComponent, ref, watchEffect} from "vue";

const options = ref(["Manhã", "Tarde", "Dia inteiro", "Sem Sol"]);
const selectedOption = ref("");

const emit = defineEmits(["value-period"]);
watchEffect(() => {
  emit("value-period", selectedOption.value);
});

defineComponent({
  name: "InsertPeriod",
  emits: ["value-period"]
});
</script>


<template>
  <div class="container__area">
    <h4 class="title">Incidência Solar</h4>
    <img alt="Imagem de um sol" class="container__img" src="../assets/img/sol.svg"/>
    <div class="container__area-input">
      <div v-for="option in options" :key="option">
        <input :id="option" v-model="selectedOption" :value="option" type="radio"/>
        <label :for="option">{{ option }}</label>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.title {
  width: 12em;
  border-radius: 50px;
  color: var(--color-heading);
  background-color: rgba(255, 255, 255, 0.3);
  border: 0.1em black solid;
  box-shadow: none;
  margin-top: 0.1em;
}

.container__area {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 22em;
  height: 21em;
  border: var(--borda-size) solid var(--color-heading);
  border-radius: 50px;
  color: var(--color-heading);
  text-align: center;
  margin: 2em 0 0 0;
}

.container__img {
  width: 18rem;
  height: 11.8rem;
}

.container__area-input {
  display: flex;
  justify-content: space-evenly;
  margin-top: 1rem;
  text-transform: uppercase;
  gap: 1em;
}

input[type="radio"] + label {
  display: block;
}
</style>
