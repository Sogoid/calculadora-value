<script lang="ts" setup>
import { ref, watchEffect } from "vue";

const count = ref(0);

const increment = () => {
  count.value++;
};

const decrement = () => {
  if (count.value > 0) {
    count.value--;
  }
};

const emit = defineEmits([ "update:modelValue" ]);

watchEffect(() => {
  emit("update:modelValue", count.value);
});

</script>


<template>
  <div class="container__area-item noselect">
    <div @click="decrement">
      <svg class="btn__menos" fill="none" height="48" viewBox="0 0 30 48" width="30" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3.75 0C1.67893 0 0 2.68629 0 6V42C0 45.3137 1.67893 48 3.75 48H26.25C28.3211 48 30 45.3137 30 42V6C30 2.68629 28.3211 0 26.25 0H3.75ZM8.4375 22.5H21.5625C22.0803 22.5 22.5 23.1716 22.5 24C22.5 24.8284 22.0803 25.5 21.5625 25.5H8.4375C7.91973 25.5 7.5 24.8284 7.5 24C7.5 23.1716 7.91973 22.5 8.4375 22.5Z"
          fill="var(--color-heading)" />
        <title>Botão remover</title>
        <desc>Botão remover</desc>
      </svg>
    </div>

    <div class="container__area-item-input">
      <input v-model="count" class="container__area-text-input" name="lab__largura" placeholder="0" readonly />
    </div>

    <div @click="increment">
      <svg class="btn__mais" fill="none" height="48" viewBox="0 0 30 48" width="30" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3.75025 6.10352e-05C1.67918 6.10352e-05 0.000244141 2.68635 0.000244141 6.00006V42.0001C0.000244141 45.3138 1.67918 48.0001 3.75025 48.0001H26.2503C28.3213 48.0001 30.0003 45.3138 30.0003 42.0001V6.00006C30.0003 2.68635 28.3213 6.10352e-05 26.2503 6.10352e-05H3.75025ZM15.9377 13.5001V22.5001H21.5627C22.0805 22.5001 22.5002 23.1716 22.5002 24.0001C22.5002 24.8285 22.0805 25.5001 21.5627 25.5001H15.9377V34.5001C15.9377 35.3285 15.518 36.0001 15.0002 36.0001C14.4825 36.0001 14.0627 35.3285 14.0627 34.5001V25.5001H8.43775C7.91998 25.5001 7.50025 24.8285 7.50025 24.0001C7.50025 23.1716 7.91998 22.5001 8.43775 22.5001H14.0627V13.5001C14.0627 12.6716 14.4825 12.0001 15.0002 12.0001C15.518 12.0001 15.9377 12.6716 15.9377 13.5001Z"
          fill="var(--color-heading)" />
        <title>Botão adicionar</title>
        <desc>Botão adicionar</desc>
      </svg>
    </div>
  </div>
</template>

<style scoped>
.container__area-item {
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
  gap: 0.1rem;
}

.container__area-item-input>input {
  color: var(--color-heading);
  background-color: var(--color-background-input);
  border: 0;
  outline: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}

.container__area-item-input>input::placeholder {
  color: var(--color-heading);
}

.container__area-item-input>input,
.container__area-item-input>input::placeholder {
  font-size: 2rem;
  text-align: center;
}

.container__area-text-input {
  width: 4.875rem;
  height: 3rem;
}

.btn__menos,
.btn__mais {
  cursor: pointer;
}

.noselect {
  -webkit-touch-callout: none;
  /* iOS Safari */
  -webkit-user-select: none;
  /* Safari */

  -moz-user-select: none;
  /* Old versions of Firefox */
  -ms-user-select: none;
  /* Internet Explorer/Edge */
  user-select: none;
  /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
}
</style>
