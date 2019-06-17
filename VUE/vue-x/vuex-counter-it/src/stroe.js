import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
///ceo
const state = {
    count: 0,
}
//改变 唯一可以修改状态
//财务
const mutations = {
    increment(state) {
        state.count++
    },
    decrement(state) {
        state.count--
    }
}
// 组件里的computed
const getters = {
    eventOrOdd: state => state.count % 2 === 0 ? 'event' : 'odd'
}
//动作  部门  不能修改 state
const actions = {
    increment: ({ commit }) =>
        commit('increment'),
    decrement: ({ commit }) =>
        commit('decrement'),
    incrementIfOdd({ commit, state }) {
        if ((state.count + 1) % 2 === 0) {
            commit('increment')
        }
    },
    incrementAsync({ commit }) {
        return new Promise((resolve, reject) => {
            try {
                setTimeout(() => {
                    commit('increment');
                    resolve()
                }, 2000);
            }
            catch (err) {
                rehect(err)

            }

        })

    },

}
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})