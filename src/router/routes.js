export default [
    {
        path: '/',
        name: 'root',
        // components: {
        //     default: () => import(/* webpackChunkName: "root" */ '../components/Form.vue')
        // }
    },
    {
        path: '/form',
        name: 'form',
        components: {
            default: () => import(/* webpackChunkName: "root" */ '../components/Form.vue')
        }
    }
    // {
        // route level code-splitting
        // this generates a separate chunk (root.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "root" */ '../components/Root.vue')
    // }
]