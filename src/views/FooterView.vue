<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

interface Item {
    lightImage: string;
    darkImage: string;
    darkIconWhatsApp?: string;
    lightIconWhatsApp?: string;
    darkIconPhone?: string;
    lightIconPhone?: string;
    text?: string;
    fone?: string;
    alt?: string;
    altWhatsApp?: string;
    altPhone?: string;
}

interface Img {
    darkImageLogo: string;
    lightImageLogo: string;
}

const items = ref<Item[]>([
    {
        lightImage: "/calculadora-value/public/img/SP-footer.png",
        darkImage: "/calculadora-value/public/img/SP-footer-white.png",
        alt: "Imagem São Paulo",

        darkIconWhatsApp: "/calculadora-value/public/img/WhatsApp-branco.svg",
        lightIconWhatsApp: "/calculadora-value/public/img/WhatsApp-black.svg",
        altWhatsApp: "Icon WhatsApp",

        darkIconPhone: "/calculadora-value/public/img/telephone-branco.svg",
        lightIconPhone: "/calculadora-value/public/img/telephone-black.svg",
        altPhone: "Icon Telefone",

        fone: "(11) 96075-8034",
        text: "São Paulo - SP",
    },
    {
        lightImage: "/calculadora-value/public/img/Goiania-footer.png",
        darkImage: "/calculadora-value/public/img/Goiania-footer-white.png",
        alt: "Imagem Goiânia",

        darkIconWhatsApp: "/calculadora-value/public/img/WhatsApp-branco.svg",
        lightIconWhatsApp: "/calculadora-value/public/img/WhatsApp-black.svg",
        altWhatsApp: "Icon WhatsApp",

        darkIconPhone: "/calculadora-value/public/img/telephone-branco.svg",
        lightIconPhone: "/calculadora-value/public/img/telephone-black.svg",
        altPhone: "Icon Telefone",

        fone: "(62) 3100-1200",
        text: "Goiânia-GO"
    },
    {
        lightImage: "/calculadora-value/public/img/Atlanta-footer.png",
        darkImage: "/calculadora-value/public/img/Atlanta-footer-white.png",
        alt: "Imagem Doraville - Geórgia(EUA)",

        darkIconPhone: "/calculadora-value/public/img/telephone-branco.svg",
        lightIconPhone: "/calculadora-value/public/img/telephone-black.svg",
        altPhone: "Icon Telefone",

        fone: "+1 (404) 528-3789",
        text: "Doraville - Geórgia(EUA)"
    }
]);


const images = ref<Img>(
    {
        darkImageLogo: "/calculadora-value/public/img/value-branco.png",
        lightImageLogo: "/calculadora-value/public/img/value-preto.png"
    }
);

const prefersDarkScheme = ref(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

const updateTheme = (e: { matches: any; }) => {
    prefersDarkScheme.value = e.matches ? "dark" : "light";
};

onMounted(() => {
    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQueryList.addEventListener("change", updateTheme);
});

onUnmounted(() => {
    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQueryList.removeEventListener("change", updateTheme);
});
</script>

<template>
    <div class="container__footer">
        <div class="container__logo"><img
                :src="prefersDarkScheme === 'dark' ? images.darkImageLogo : images.lightImageLogo"
                alt="Logo empresa Value" class="img__logo">
            <img src="../assets/img/LogosRodapeB.png" alt="">
        </div>
        <div class="content" v-for="(item, index) in items" :key="index">
            <img :src="prefersDarkScheme === 'dark' ? item.darkImage : item.lightImage" :alt="item.alt"
                class="content__img">
            <div class="content__phone">
                <img :src="prefersDarkScheme === 'dark' ? item.darkIconPhone : item.lightIconPhone" :alt="item.altPhone"
                    class="content__phone-img">
                <img v-if="item.altWhatsApp"
                    :src="prefersDarkScheme === 'dark' ? item.darkIconWhatsApp : item.lightIconWhatsApp"
                    :alt="item.altWhatsApp" class="content__phone-img">
                <p class="number__phone " v-if="item.text">{{ item.fone }}</p>
            </div>
            <p class="content__cidade" v-if="item.text">{{ item.text }}</p>
        </div>
    </div>
</template>

<style scoped>
.content {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
}

.content__phone {
    display: flex;
    gap: 0.5rem;
}

.number__phone {
    color: var(--color-heading);
    font-size: var(--base-font-size-2);
    font-weight: bold;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}

.content__phone-img {
    width: 1.5rem;

}

.content__img {
    width: 15rem;
}


.content__cidade {
    color: var(--color-heading);
    text-transform: uppercase;
    font-weight: bold;
    font-size: var(--base-font-size);
}

.container__logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
}

.img__logo {
    width: 15rem;
}


@media screen and (min-width: 700px) {
    .container__footer {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
    }
}

@media screen and (min-width: 1180px) {
    .container__footer {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
}
</style>