import axios from './axios'
let api = {
    user: {
        changePwd: data => {
            return axios.post('student/changePwd', data)
        },
        login: data => {
            return axios.post('student/login', data)
        },
        getInfo: data => {
            return axios.post('student/getInfo', data)

        }
    },
    test: {
        getTopic: data => {
            return axios.post('test/getTopic', data)
        },
        getArrange: data => {
            return axios.post('arrange/getArrange', data)
        }

    },
    score: {
        setScore: data => {
            return axios.post('score/setScore', data)
        },
        getScore: data => {
            return axios.post('score/getScore', data)
        },
        getResult: data => {
            return axios.post('score/getResult', data)
        }
    }
}
export default {
    install: Vue => {
        Vue.api = api
            // 挂载api
        Vue.prototype.$api = api
    }
}