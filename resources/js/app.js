require('./bootstrap');

window.Vue = require('vue');
import Vue from 'vue'
import Vuetify from 'vuetify'
Vue.use(Vuetify)
import 'vuetify/dist/vuetify.min.css'

import VueSimplemde from 'vue-simplemde'
Vue.use(VueSimplemde)



import md from 'marked'
window.md = md


import User from './Helpers/User'
window.User = User

window.EventBus = new Vue();

Vue.component('AppHome', require('./components/AppHome.vue').default);
import router from './Router/router.js'

const app = new Vue({
    el: '#app',
    router,
    vuetify: new Vuetify()
});