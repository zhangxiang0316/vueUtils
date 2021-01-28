import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Directives from './utils/directives'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import log from './utils/log/log'

import {VueJsonp} from 'vue-jsonp'

Vue.use(VueJsonp)

import VueSignaturePad from "vue-signature-pad";

Vue.use(VueSignaturePad)

Vue.config.productionTip = false

Vue.prototype.$log = log;

Vue.use(Directives)
Vue.use(ElementUI, {size: 'small', zIndex: 3000})



new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
