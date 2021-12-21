import { createApp } from 'vue';
import router from './router';
import store from './store';
import App from './App.vue';
import atomComponents from './components/atoms/index';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

// global styles
import './assets/styles/index.scss';
import BootstrapVue3 from 'bootstrap-vue-3';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

firebase.initializeApp({
    apiKey: 'AIzaSyBnohhtog8DI4W1XfRRlHaRXVDju5VuEIs',
    authDomain: 'npm-search-f8c7b.firebaseapp.com',
    projectId: 'npm-search-f8c7b',
    storageBucket: 'npm-search-f8c7b.appspot.com',
    messagingSenderId: '436989828939',
    appId: '1:436989828939:web:68d54f0e28164743d712ce',
    measurementId: 'G-VEC0WC57DJ',
    databaseURL: 'https://npm-search-f8c7b-default-rtdb.europe-west1.firebasedatabase.app'
})

const app = createApp(App);

atomComponents.forEach(component => {
    app.component(component.name, component);
})

app.use(BootstrapVue3)
   .use(store)
   .use(router)
   .mount('#app');

