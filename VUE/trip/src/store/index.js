import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)
import trip from './modules/trip'
export default new vuex.Store({
    modules:{
        trip
    }
})