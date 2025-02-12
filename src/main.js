import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';

// createApp(App).mount('#app')
// createApp(App).use(router);
const app = createApp(App);
app.use(router); // Make sure Vue Router is used
app.mount('#app');
