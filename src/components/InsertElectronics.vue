<script lang="ts" setup>

import ButtonCounter from "@/components/ButtonCounter.vue";
import { defineComponent, ref, watchEffect } from "vue";


const selectedElectronics = ref(0);

const emit = defineEmits([ "update-electronics" ]);

watchEffect(() => {
  // console.log("Emitindo evento update-person com valor", newValCount);
  emit("update-electronics", selectedElectronics.value);
});

defineComponent({
  name: "InsertElectronics",
  components: {
    ButtonCounter
  },
  emits: [ "update-electronics" ]
});

</script>

<template>
  <div class="container_electronics">
    <h4 class="title">Eletrodomésticos</h4>
    <img alt="Imagem de Eletrônicos" class="container__img" src="../assets/img/eletronicos.png" />
    <button-counter v-model.number="selectedElectronics" />
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

.container_electronics {
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
  width: 16rem;
  height: 12rem;
  margin-top: 1em;
}
</style>
