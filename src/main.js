import { createApp } from 'vue';
import router from './router';
import store from './store';
import App from './App.vue';

import BootstrapVue3 from 'bootstrap-vue-3';

// global styles
import './assets/styles/index.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

import atomComponents from './components/atoms/index';

const app = createApp(App);

// global components
atomComponents.forEach(component => {
    app.component(component.name, component);
})

app.use(BootstrapVue3).use(store).use(router).mount('#app');
