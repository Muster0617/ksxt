import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../Layout'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: Layout,
        redirect: '/homepage',
        children: [{
            path: 'homepage',
            component: () =>
                import ('../views/HomePage'),
            meta: {
                title: '首页',
                pitch: "1"
            }
        }]

    },
    {
        path: '/login',
        component: () =>
            import ('../views/Login')

    },
    {
        path: '/test',
        component: () =>
            import ('../views/Test')

    },
    {
        path: '/result',
        component: () =>
            import ('../views/Result')

    },
    {
        path: '/changePwd',
        component: () =>
            import ('../views/ChangePwd')

    },
    {
        path: '/StudentInfo',
        component: Layout,
        redirect: '/StudentInfo/index',
        children: [{
            path: 'index',
            component: () =>
                import ('../views/StudentInfo'),
            meta: {
                title: '学籍信息',
                pitch: "2"
            }
        }]
    },
    {
        path: '/TestQuery',
        component: Layout,
        redirect: '/TestQuery/index',
        children: [{
            path: 'index',
            component: () =>
                import ('../views/TestQuery'),
            meta: {
                title: '考试查询',
                pitch: "3"
            }
        }]
    },
    {
        path: '/TestScore',
        component: Layout,
        redirect: '/TestScore/index',
        children: [{
            path: 'index',
            component: () =>
                import ('../views/TestScore'),
            meta: {
                title: '我的成绩',
                pitch: "4"
            }
        }]
    }
]

const router = new VueRouter({
    routes
})

export default router