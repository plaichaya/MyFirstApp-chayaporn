import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import BaseLayout from './components/base/BaseLayout.vue';
import { IonicVue } from '@ionic/vue';
import store from './store';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Optional Theme */
import '@ionic/vue/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import './theme/core.css';

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(store);

// Register BaseLayout component globally
app.component('base-layout', BaseLayout);

router.isReady().then(() => {
  app.mount('#app');
});