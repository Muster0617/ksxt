import { getToken, setToken, removeToken } from '../../utils/auth'
const state = {
    token: getToken(),
    info: JSON.parse(localStorage.getItem('info')) || ''
}
const actions = {
    login({ commit }, info) {
        commit('SET_TOKEN', info.studentID)
        commit('SET_INFO', info)
    },
    logout({ commit }) {
        removeToken()
        localStorage.removeItem('info')
        localStorage.removeItem('testInfo')
        commit('SET_TOKEN', '')
    }
}
const mutations = {
    SET_TOKEN(state, token) {
        state.token = token
        setToken(token)
    },
    SET_INFO(state, info) {
        state.info = info
        localStorage.setItem('info', JSON.stringify(info))
    }
}
export default {
    namespaced: true,
    state,
    actions,
    mutations
}