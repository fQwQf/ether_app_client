import Vue from 'vue'
import App from './App'

import store from './store'

import cuCustom from './colorui/components/cu-custom.vue'

import uView from 'uview-ui';
Vue.use(uView);
Vue.component('cu-custom',cuCustom)

Vue.config.productionTip = false

Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
