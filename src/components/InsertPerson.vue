<script lang="ts" setup>
import ButtonCounter from "@/components/ButtonCounter.vue";
import { defineComponent, ref, watchEffect } from "vue";

const selectedPesona = ref(0);

const emit = defineEmits([ "update-persona" ]);

watchEffect(() => {
  // console.log("Emitindo evento update-person com valor", newValCount);
  emit("update-persona", selectedPesona.value);
});

defineComponent({
  name: "InsertPerson",
  components: {
    ButtonCounter
  },
  emits: [ "update-persona" ]
});
</script>


<template>
  <div class="container__area">
    <h4 class="title">Quantidade de pessoas</h4>
    <img alt="Imagem de pessoas" class="container__img" src="../assets/img/pessoas.png" />
    <button-counter v-model.number="selectedPesona" />
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
  width: 14rem;
  height: 12rem;
}
</style>
