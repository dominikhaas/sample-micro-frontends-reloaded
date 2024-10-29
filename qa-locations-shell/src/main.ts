
import {createApp, defineAsyncComponent} from 'vue'
import App from './App.vue'
import router from './router'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import 'vuetify/styles'

import '@mdi/font/css/materialdesignicons.css'
import {createPinia} from "pinia";



const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
  },
})

//load remote app via module federation
const app = createApp(App);
const LocationApp = defineAsyncComponent(() => import("remote_app/App"));
app.component("LocationApp", LocationApp);

app.use(createPinia())
  .use(vuetify)
  .use(router)
  .mount('#app')
