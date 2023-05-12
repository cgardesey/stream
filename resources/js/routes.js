
import VueRouter from 'vue-router'

let routes = [
    {
        path: '/',
        component: require('./views/Home').default // This fixes render error
    },

    {
        path: '/about',
        component: require('./views/About').default // This fixes render error
    },

    {
        path: '/contact',
        component: require('./views/Contact').default // This fixes render error
    }
];

export default new VueRouter({
    routes,

    linkActiveClass: 'is-active'
});
