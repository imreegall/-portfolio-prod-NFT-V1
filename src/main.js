import { createApp } from 'vue'
import App from './App.vue'
import router from "./router.js";
import VueScrollTo from 'vue-scrollto';

import {languages} from "./i18n"
import {defaultLocale} from "./i18n";
import {createI18n} from "vue-i18n";

const localStorageLang = localStorage.getItem('lang')

const messages = Object.assign(languages)

const i18n = createI18n({
    seo: true,
    legacy: true,
    locale: localStorageLang || defaultLocale,
    fallbackLocale: 'en',
    messages
})

const app = createApp(App)

app.use(i18n)
app.use(router)
app.use(VueScrollTo, {
    container: "body",
    duration: 500,
    easing: "ease",
    lazy: false,
    offset: 0,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
})
app.mount('#app')
