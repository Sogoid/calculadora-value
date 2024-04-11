<script lang="ts" setup>
import { ref } from "vue";

const urls = ref([
  {
    url: "https://valueprojetos.com.br/",
    name: "Principal"
  },
  {
    url: "https://valueprojetos.com.br/sobre-a-value-projetos-hvac/",
    name: "Institucional"
  },
  {
    url: "https://valueprojetos.com.br/solucoes/",
    name: "Soluções"
  },
  {
    url: "https://valueprojetos.com.br/portfolio/",
    name: "Portfólio"
  },

  {
    url: "https://valueprojetos.com.br/acoes-sociais/",
    name: "Ações"
  },
  {
    url: "https://valueprojetos.com.br/fale-conosco/",
    name: "Fale Conosco"
  },
  {
    url: "https://valueprojetos.com.br/trabalhe-conosco/",
    name: "Trabalhe"
  },

  {
    url: "/calculadora",
    name: "calculadora"
  },
]);

</script>

<template>
  <div class="container nav-link noselect">
    <input id="menu" aria-label="Menu" class="container__button" name="menu" type="checkbox">
    <label for="menu">
      <span class="header__menu-hamburg"></span>
    </label>
    <ul class="lista-menu ">
      <li v-for="item in urls" :key="item.url" class="lista-menu__item">
        <!-- Use <router-link> for internal links -->
        <router-link v-if="item.url.startsWith('/')" :to="item.url">{{ item.name }}</router-link>
        <!-- Use <a> for external links -->
        <a v-else :href="item.url" target="_blank">{{ item.name }}</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
}

.header__menu-hamburg {
  width: 2em;
  height: 3em;
  background-image: var(--bg-img-menu);
  background-repeat: no-repeat;
  display: inline-block;
  padding: 0 5em 0 0;
}

.lista-menu {
  display: none;
  top: 1%;
  position: absolute;
  background-color: var(--color-background-mute);
  list-style: none;
  margin: 0;
  padding: 0;
  right: 5.5em;
}


.lista-menu__item {
  display: block;
  width: auto;
  text-align: center;
}

.container__button:checked~.lista-menu {
  display: block;
}


.container__button {
  display: none;
}

.nav-link a {
  color: var(--color-heading);
  padding: 1rem;
  position: relative;
  display: inline-block;
}

.nav-link a:hover {
  background-color: transparent;
}

.nav-link a::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 3px;
  background-color: var(--header-menu-animation-color);
  transition: width 0.3s ease-in-out;
}

.nav-link a:hover::after {
  width: 100%;
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

@media screen and (min-width: 1180px) {
  .header__menu-hamburg {
    display: none
  }

  .lista-menu {
    display: block;
    position: absolute;
    top: auto;
    background-color: transparent;
    right: 0;
  }

  .lista-menu__item {
    display: inline-block;

  }
}

@media screen and (min-width: 1300px) {

  .lista-menu {
    display: block;
    position: absolute;
    top: auto;
    font-size: var(--base-font-size);
    width: auto;
    background-color: transparent;
    right: 0;
  }
}

@media screen and (min-width: 2560px) {
  .lista-menu {
    font-size: var(--base-font-size-2);
  }
}
</style>
