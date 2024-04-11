import "./assets/css/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router"; // Certifique-se de que o caminho está correto


const app = createApp(App);

app.use(createPinia());
app.use(router); // Use o roteador

app.mount("#app");
