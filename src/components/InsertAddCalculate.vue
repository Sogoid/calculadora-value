<script lang="ts" setup>
import { RouterLink } from "vue-router";
import { useCalculateStore } from "../stores/CalculateStore";

const props = defineProps({
  width: { type: Number, default: 0 },
  height: { type: Number, default: 0 },
  areaTotal: { type: Number, default: 0 },
  period: { type: String, required: true },
  region: { type: String, required: true },
  renewal: { type: String, required: true },
  environment: { type: String, required: true },
  persona: { type: Number, default: 0 },
  electronics: { type: Number, default: 0 },
  windows: { type: Number, default: 0 }
});

// const emit = defineEmits([ "update-soma-total" ]);

const showCalculoBTU = () => {
  // Verifica se as propriedades são zero ou vazias
  if (
    !props.region ||
    !props.environment ||
    !props.renewal ||
    !props.period ||
    !props.persona ||
    !props.electronics ||
    !props.windows
  ) {
    alert("Erro: Uma ou mais propriedades estão vazias ou são zero.");
    return;
  }

  // Verifica se a largura e a altura estão preenchidas juntas
  if ((props.width && !props.height) || (!props.width && props.height)) {
    alert("Erro: A largura e a altura devem ser preenchidas juntas.");
    return;
  }

  let valor;
  switch (props.region) {
    case "Região Sul":
      valor = 0.85;
      break;
    case "Região Sudeste":
      valor = 0.9;
      break;
    case "Região Centro-Oeste":
      valor = 1;
      break;
    case "Região Nordeste":
      valor = 1.15;
      break;
    case "Região Norte":
      valor = 1.15;
      break;
    default:
      valor = 0;
  }

  // Escolhe a largura e a altura se estiverem preenchidas, caso contrário, usa a área total
  let area;
  if (props.width && props.height) {
    area = props.width * props.height;
  } else if (props.areaTotal) {
    area = props.areaTotal;
  } else {
    alert("Erro: A largura e a altura ou a área total devem ser preenchidas.");
    return;
  }
  area = area * valor * 630;

  let valorPeriod;
  switch (props.period) {
    case "Manhã":
      valorPeriod = 0.85;
      break;
    case "Tarde":
      valorPeriod = 1;
      break;
    case "Dia inteiro":
      valorPeriod = 1;
      break;
    case "Sem Sol":
      valorPeriod = 0;
      break;
    default:
      valorPeriod = 0;
  }

  let valorPersona;
  let cargaPessoas = 18.9;

  valorPersona = props.persona * cargaPessoas;

  let valorWindows;
  let cargaSolar = 88;

  valorWindows = props.windows * cargaSolar * valorPeriod;

  let valorEletro;
  let cargaEquipamentos = 85;

  valorEletro = props.electronics * cargaEquipamentos;

  const store = useCalculateStore();

  let somaTotal = area + valorPersona + valorEletro + valorWindows;

  store.updateSomaTotal(somaTotal);

  console.log("Valor da soma total", somaTotal);

};
</script>

<template>
  <RouterLink to="resultado" class="container" @click="showCalculoBTU">
    <div class="container_Button_add">
      <div class="btn2">
        <div>
          <img alt="Desenho de uma calculadora" class="img-btn" src="/src/assets/img/calculadora.png" />
        </div>
        Calcular
      </div>
    </div>
  </RouterLink>
</template>

<style lang="css" scoped>
.container_Button_add {
  width: 22em;
  height: 21em;
  border: var(--borda-size) solid var(--color-heading);
  border-radius: 50px;
  color: var(--color-heading);
  margin: 2em 0 0 0;
  gap: 0.5rem;
  cursor: pointer;
  text-decoration: none;
  list-style: none;
}

.container a:hover {
  background-color: transparent !important;
  color: inherit !important;
}

.btn2 {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 21em;
  text-transform: uppercase;
}

.img-btn {
  width: 10em;
}

h1 {
  font-size: 2em;
  font-weight: bold;
}
</style>
