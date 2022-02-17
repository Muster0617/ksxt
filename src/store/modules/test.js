const state = {
    testInfo: JSON.parse(localStorage.getItem('testInfo')) || '',
}
const actions = {
    setTestInfo({ commit }, data) {
        commit('SET_TEST_INFO', data)
    }


}
const mutations = {
    SET_TEST_INFO(state, data) {
        localStorage.setItem('testInfo', JSON.stringify(data))
        state.testInfo = data
    },

}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}