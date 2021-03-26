import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Directives from './utils/directives'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import log from './utils/log/log'
import zxLib from 'zx-lib'
import VueSignaturePad from "vue-signature-pad";
import {VueJsonp} from 'vue-jsonp'
import './assets/iconfont/iconfont.css'

import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/index.css';
Vue.use(Avue);

Vue.use(VueJsonp)
Vue.use(zxLib)
Vue.use(VueSignaturePad)
Vue.use(Directives)
Vue.use(ElementUI, {size: 'small', zIndex: 3000})
Vue.config.productionTip = false
Vue.prototype.$log = log;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
