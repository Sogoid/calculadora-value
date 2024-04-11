<script setup lang="ts">
import InsertAddCalculate from "@/components/InsertAddCalculate.vue";
import InsertArea from "@/components/InsertArea.vue";
import InsertElectronics from "@/components/InsertElectronics.vue";
import InsertPeriod from "@/components/InsertPeriod.vue";
import InsertPerson from "@/components/InsertPerson.vue";
import InsertWindows from "@/components/InsertWindows.vue";
import MenuRegion from "@/components/MenuRegion.vue";
import { ref } from "vue";

const valueWidth = ref(0);
const valueHeight = ref(0);
const valueArea = ref(0);
const selectedPeriod = ref("");
const selectedRegion = ref("");
const selectedRenewal = ref("");
const selectedEnvironment = ref("");
const selectedPesona = ref(0);
const selectedElectronics = ref(0);
const selectedWindows = ref(0);

const somaTotal = ref(0);

// Selecionar a quantidade de pessoa.
const handleValuePersona = (newPersona: number) => {

    selectedPesona.value = newPersona;
};

// Selecionar a quantidade de Windows.
const handleValueWindows = (newWindows: number) => {

    selectedWindows.value = newWindows;
};

// Selecionar a quantidade de Eletrônicos.
const handleValueElectronics = (newElectronics: number) => {

    selectedElectronics.value = newElectronics;
};

// Selecionar ambiente
const handleValueRegion = (newValRegion: string) => {

    selectedRegion.value = newValRegion;
};

const handleValueEnvironment = (newValEnvironment: string) => {

    selectedEnvironment.value = newValEnvironment;
};

const handleValueRenewal = (newValRenewal: string) => {

    selectedRenewal.value = newValRenewal;
};

// Pegar valor das areas.
const handleValueChanged = (newValWidth: number) => {

    valueWidth.value = newValWidth;
};

const handleValue2Changed = (newValHeight: number) => {

    valueHeight.value = newValHeight;
};
const handleValueAreaTotal = (newValAreaTotal: number) => {

    valueArea.value = newValAreaTotal;
};

// Pegar o período de Incidência do sol.
const handleValuePeriod = (newValPeriod: string) => {

    selectedPeriod.value = newValPeriod;
};

const handleUpdateSomaTotal = (newSomaTotal: number) => {
    somaTotal.value = newSomaTotal;
};
</script>

<template>
    <main class="container">
        <h1 class="container__title">CALCULADORA BTUs</h1>
        <section class="container__itens-menu">
            <menu-region 
            @value-region="handleValueRegion" @value-environment="handleValueEnvironment"
                @value-renewal="handleValueRenewal" />
        </section>
        <section class="container__itens">
            <insert-area 
            @value-changed="handleValueChanged" @value2-changed="handleValue2Changed"
                @value-area="handleValueAreaTotal" />

            <insert-period @value-period="handleValuePeriod" />

            <insert-person @update-persona="handleValuePersona" />

            <insert-windows @update-windows="handleValueWindows" />

            <insert-electronics @update-electronics="handleValueElectronics" />

            <insert-add-calculate 
            @update-soma-total="handleUpdateSomaTotal" :area-total="valueArea"
                :height="valueHeight" :width="valueWidth" :period="selectedPeriod" :environment="selectedEnvironment"
                :region="selectedRegion" :renewal="selectedRenewal" :persona="selectedPesona"
                :electronics="selectedElectronics" :windows="selectedWindows" />
        </section>
    </main>
</template>


<style scoped>
.container__title {
    color: var(--color-heading);
    text-align: center;
}

.container__itens {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.container__itens-menu {
    background-color: var(--color-background-mute);
    color: var(--color-heading);
    text-align: center;
}

@media screen and (min-width: 700px) {
    .container__itens {
        display: flex;
        justify-content: space-around;
        align-items: center;
        min-height: 100vh;
        min-width: 100vw;
    }
}

@media screen and (min-width: 1180px) {
    .container__itens {
        padding: 0 5em;
    }
}

@media screen and (min-width: 1400px) {
    .container__itens {
        gap: 8em;

    }
}

@media screen and (min-width: 2560px) {
    .container__title {
        font-size: var(--base-font-size-2);
    }

    .container__itens {
        padding: 0;
    }
}
</style>