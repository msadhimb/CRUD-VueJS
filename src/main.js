import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

app.config.unwrapInjectedRef = true;
app.config.globalProperties.console = console;
app.mount("#app");
