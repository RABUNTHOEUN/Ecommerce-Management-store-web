// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css'; // Add this line
import router from './router';

createApp(App).mount('#app');

createApp(App).use(router).mount('#app');
