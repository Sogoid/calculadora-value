<script lang="ts" setup>
  import { ref } from "vue";

  const count = ref(0);

  const calculcarBTU = () => {
    console.log("O valor da pessoa é", count.value);
    // Você pode usar count.value no seu cálculo
  };


</script>

<template>
  <div @click="calculcarBTU()">
    <img alt="Desenho de uma calculadora" class="btn2" src="../assets/img/calculadora.png" />
  </div>
</template>

<style>
  .btn2 {
    cursor: pointer;
    width: 100px;
    padding-top: 70px;
  }
</style>
