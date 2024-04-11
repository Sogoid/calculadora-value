<script setup lang="ts">
import { computed, ref } from "vue";
import { useCalculateStore } from "../stores/CalculateStore";

const store = useCalculateStore();

const somaTotal = computed(() => store.somaTotal);

console.log(
    "Ar-condicionado recomendado é: ",
    `${somaTotal.value} BTU/h`
);

let produtoNoveMil = ref<Array<{ title: string; imagem: string; text: string; }>>([
    {
        title: "Ar-Condicionado TCL",
        imagem: "ar-condicionado-tcl-inverter.png",
        text: `Compressor Inverter (garantia de 10 anos no compressor).
                - com Wi- Fi(app Connect Life).
                - Gás Refrigerante R32, mais econômico e ecológico.
                - Filtro 4 em 1, com filtro removível e lavável.    
                - 5 velocidades de ventilação.
                - Modo Super que refrigera rapidamente o ambiente.`
    },
    {
        title: "Ar-Condicionado Midea",
        imagem: "ar-condicionado-midea-inverter.png",
        text: `Compressor Inverter (garantia de 10 anos no compressor).
                - com Wi- Fi(app Connect Life).
                - Gás Refrigerante R32, mais econômico e ecológico.
                - Filtro 4 em 1, com filtro removível e lavável.    
                - 5 velocidades de ventilação.
                - Modo Super que refrigera rapidamente o ambiente.`
    },
    {
        title: "Ar-Condicionado Hisense",
        imagem: "ar-condicionado-tcl-inverter.png",
        text: `Compressor Inverter (garantia de 10 anos no compressor).
                - com Wi- Fi(app Connect Life).
                - Gás Refrigerante R32, mais econômico e ecológico.
                - Filtro 4 em 1, com filtro removível e lavável.    
                - 5 velocidades de ventilação.
                - Modo Super que refrigera rapidamente o ambiente.`
    },
]);
let produtoDozeMil = ref<Array<{ title: string; imagem: string; text: string; }>>([
    {
        title: "Ar-Condicionado Midea",
        imagem: "ar-condicionado-midea-inverter.png",
        text: `Compressor Inverter (garantia de 10 anos no compressor).
                - com Wi- Fi(app Connect Life).
                - Gás Refrigerante R32, mais econômico e ecológico.
                - Filtro 4 em 1, com filtro removível e lavável.    
                - 5 velocidades de ventilação.
                - Modo Super que refrigera rapidamente o ambiente.`
    },
    {
        title: "Ar-Condicionado TCL",
        imagem: "ar-condicionado-tcl-inverter.png",
        text: `Compressor Inverter (garantia de 10 anos no compressor).
                - com Wi- Fi(app Connect Life).
                - Gás Refrigerante R32, mais econômico e ecológico.
                - Filtro 4 em 1, com filtro removível e lavável.    
                - 5 velocidades de ventilação.
                - Modo Super que refrigera rapidamente o ambiente.`
    },
    {
        title: "Ar-Condicionado Hisense",
        imagem: "arcondicionado-Hisense.png",
        text: `Compressor Inverter (garantia de 10 anos no compressor).
                - com Wi- Fi(app Connect Life).
                - Gás Refrigerante R32, mais econômico e ecológico.
                - Filtro 4 em 1, com filtro removível e lavável.    
                - 5 velocidades de ventilação.
                - Modo Super que refrigera rapidamente o ambiente.`
    },
]);

let produtoDezoitoMil = ref<Array<{ title: string; imagem: string; text: string; }>>([
    {
        title: "Ar-Condicionado GREEN",
        imagem: "ar-condicionado-midea-inverter.png",
        text: `Compressor Inverter (garantia de 10 anos no compressor).
                - com Wi- Fi(app Connect Life).
                - Gás Refrigerante R32, mais econômico e ecológico.
                - Filtro 4 em 1, com filtro removível e lavável.    
                - 5 velocidades de ventilação.
                - Modo Super que refrigera rapidamente o ambiente.`
    },
    {
        title: "Ar-Condicionado LG",
        imagem: "ar-condicionado-lg-dual-inverter-voice-art-cool.png",
        text: `Compressor Inverter (garantia de 10 anos no compressor).
                - com Wi- Fi(app Connect Life).
                - Gás Refrigerante R32, mais econômico e ecológico.
                - Filtro 4 em 1, com filtro removível e lavável.    
                - 5 velocidades de ventilação.
                - Modo Super que refrigera rapidamente o ambiente.`
    },
    {
        title: "Ar-Condicionado Hisense",
        imagem: "arcondicionado-Hisense.png",
        text: `Compressor Inverter (garantia de 10 anos no compressor).
                - com Wi- Fi(app Connect Life).
                - Gás Refrigerante R32, mais econômico e ecológico.
                - Filtro 4 em 1, com filtro removível e lavável.    
                - 5 velocidades de ventilação.
                - Modo Super que refrigera rapidamente o ambiente.`
    },
]);

let produtoVinteDoisMil = ref<Array<{ title: string; imagem: string; text: string; }>>([
    {
        title: "Ar-Condicionado Midea",
        imagem: "ar-condicionado-midea-inverter.png",
        text: `Compressor Inverter (garantia de 10 anos no compressor).
                - com Wi- Fi(app Connect Life).
                - Gás Refrigerante R32, mais econômico e ecológico.
                - Filtro 4 em 1, com filtro removível e lavável.    
                - 5 velocidades de ventilação.
                - Modo Super que refrigera rapidamente o ambiente.`
    },
    {
        title: "Ar-Condicionado LG",
        imagem: "ar-condicionado-lg-dual-inverter-voice-art-cool.png",
        text: `Compressor Inverter (garantia de 10 anos no compressor).
                - com Wi- Fi(app Connect Life).
                - Gás Refrigerante R32, mais econômico e ecológico.
                - Filtro 4 em 1, com filtro removível e lavável.    
                - 5 velocidades de ventilação.
                - Modo Super que refrigera rapidamente o ambiente.`
    },
    {
        title: "Ar-Condicionado Hisense",
        imagem: "arcondicionado-Hisense.png",
        text: `Compressor Inverter (garantia de 10 anos no compressor).
                - com Wi- Fi(app Connect Life).
                - Gás Refrigerante R32, mais econômico e ecológico.
                - Filtro 4 em 1, com filtro removível e lavável.    
                - 5 velocidades de ventilação.
                - Modo Super que refrigera rapidamente o ambiente.`
    },
]);

let produtoSelecionado = ref<Array<{ title: string; imagem: string; text: string; }>>([]);

let produto = ref<number>();
let warnText = ref<string>();

switch (true) {
    case (somaTotal.value <= 9000):
        produtoSelecionado.value = produtoSelecionado.value.concat(produtoNoveMil.value);
        produto.value = 9000;
        break;
    case (somaTotal.value >= 9001 && somaTotal.value < 12000):
        produtoSelecionado.value = produtoSelecionado.value.concat(produtoDozeMil.value);
        produto.value = 12000;
        break;
    case (somaTotal.value >= 12001 && somaTotal.value < 18000):
        produtoSelecionado.value = produtoSelecionado.value.concat(produtoDezoitoMil.value);
        produto.value = 18000;
        break;
    case (somaTotal.value >= 18001):
        produtoSelecionado.value = produtoSelecionado.value.concat(produtoVinteDoisMil.value);
        produto.value = 22000;
        break;
    default:
        warnText.value = "Erro por favor refaça o calculo.";
}
</script>

<template>
    <main class="container">
        <div v-for="(produtos, index) in produtoSelecionado" :key="index">
            <section :class="warnText ? 'container__area--error' : 'container__area'">
                <div v-if="warnText">
                    <h1 class="title__error">
                        {{ warnText }}
                    </h1>
                </div>
                <div v-else>
                    <h1 class="container__title">{{ produtos.title }}</h1>
                    <img class="img__produto" :src="`/calculadora-value/public/img/${produtos.imagem}`"
                        alt="Imagem de Ar-condicionado">
                    <h2>O produto recomendável é: {{ produto }}</h2>
                    <div class="container__text">{{ produtos.text }}</div>
                </div>
            </section>
        </div>
    </main>
</template>


<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 2rem;
    flex-wrap: wrap;
}

.container__area {
    display: flex;
    justify-content: start;
    align-items: center;
    width: 32rem;
    min-height: 70vh;
    padding: 2rem;
    border: var(--borda-size) solid var(--color-heading);
    border-radius: 50px;
    color: var(--color-heading);
    text-align: center;
    margin: 2rem 0 0 0;
}

.container__area--error {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32rem;
    height: 35rem;
    border: var(--borda-size) solid var(--color-heading);
    border-radius: 50px;
    color: var(--color-heading);
    text-align: center;
    margin: 2rem 0 0 0;
}

.title__error {
    color: var(--color-heading);
    font-size: 3rem;
    text-transform: uppercase;

}

.container__title {
    font-size: 2.5rem;
    text-transform: uppercase;
    margin-bottom: 20px;
    text-align: center;
    color: var(--color-heading);
    margin: 1.5rem 0 0 0;
}

.img__produto {
    max-width: 50%;
    height: auto;
}

.container__text {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: start;
    white-space: pre-line;
}
</style>