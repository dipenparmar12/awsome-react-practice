import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { install as InstallNotify } from './plugin/noti/notify';

createApp(App).use(InstallNotify).mount('#app');
