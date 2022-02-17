const getters = {
    token: state => state.user.token,
    info: state => state.user.info,
    testInfo: state => state.test.testInfo,
}
export default getters