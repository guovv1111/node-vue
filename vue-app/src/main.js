import { createApp } from 'vue';
import App from './App.vue';
import Directives from './directive/index';

const app = createApp(App);
// app.use(Directives)
app.mount('#app')