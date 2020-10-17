import Vue from 'vue'
import App from './App'
import {
	mapState,
	mapMutations
} from 'vuex'

import store from './store'

import cuCustom from './colorui/components/cu-custom.vue'

import uView from 'uview-ui';
Vue.use(uView);
Vue.component('cu-custom',cuCustom)

import io from 'common/weapp.socket.io.js'
Vue.prototype.socket=io('http://ether.gq:3000') //socket服务器地址

Vue.config.productionTip = false

Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
