<script lang="ts" setup>
import ButtonCounter from "@/components/ButtonCounter.vue";
import { defineComponent, ref, watchEffect } from "vue";

const selectedWindows = ref(0);

const emit = defineEmits([ "update-windows" ]);

watchEffect(() => {
  // console.log("Emitindo evento update-person com valor", newValCount);
  emit("update-windows", selectedWindows.value);
});
defineComponent({
  name: "InsertWindows",
  components: {
    ButtonCounter
  },
  emits: [ "update-windows" ]
});

</script>

<template>
  <div class="container_janelas">
    <h4 class="title">Janelas</h4>
    <img alt="Imagem de Janela" class="container__img" src="../assets/img/windows.png" />
    <button-counter v-model.number="selectedWindows" />
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

.container_janelas {
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
  height: 12rem;
  margin-top: 1rem;
}
</style>
