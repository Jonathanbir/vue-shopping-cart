import { createApp } from "vue";
import { store } from "./store";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import router from "./router";
import "./style.css";
import App from "./App.vue";

const app = createApp(App);

library.add(fas);

app.component("fa", FontAwesomeIcon);

app.use(router);

app.use(store);

app.mount("#app");
