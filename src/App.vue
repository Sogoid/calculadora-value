<script lang="ts" setup>
import FooterView from "@/views/FooterView.vue";
import MenuView from "@/views/MenuView.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <header class="header">
    <menu-view />
  </header>
  <RouterView />

  <footer class="footer">
    <footer-view />
  </footer>

</template>

<style scoped>
.header {
  display: flex;
  justify-content: end;
  background-color: var(--color-background-mute);
  color: var(--color-heading);
  padding: 0.5em;
  text-transform: uppercase;
  background-image: var(--bg-img-logo);
  background-repeat: no-repeat;
  background-size: 9em;
  background-position: 3rem center;
}

.footer {
  margin-top: 4rem;
  background-image: var(--bg-footer);
  background-repeat: repeat-y;
  padding: 2rem;

}

@media screen and (min-width: 700px) {
  .header {
    min-width: 100vw;
  }

  .footer {
    min-width: 100vw;
    background-repeat: repeat;
    background-size: 50%;
    padding-bottom: 2rem;
  }
}

@media screen and (min-width: 1180px) {
  .header {
    padding: 2em;
  }
}

@media screen and (min-width: 2560px) {
  .header {
    padding: 3em;
    background-size: 12em;
  }
}
</style>
