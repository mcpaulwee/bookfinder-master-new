
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue'
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';
import VeeValidate from 'vee-validate';
// import VueEventBus from 'vue-event-bus';
import BootstrapVue from 'bootstrap-vue';
import VueAuth from '@websanova/vue-auth';


axios.defaults.baseURL = 'http://localhost:8000';
// Vue.http.options.root = 'http://locahost:8000'; /** base_url */

Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(VeeValidate);
// Vue.use(VueEventBus)


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

var requirepath = './components/';


 Vue.component('bs-input', require('./input-components/bsinput.vue'));
 Vue.component('bs-text', require('./input-components/bstextarea.vue'));
 Vue.component('bs-file', require('./input-components/bsfile.vue'));
 Vue.component('navbar', require('./home/nav.vue'))
 Vue.component('category', require('./home/category-menu.vue'))
 Vue.component('items', require('./home/item-list.vue'))
 Vue.component('footers', require('./home/footer.vue'))
 Vue.component('login', require('./login/login-form.vue'))
 Vue.component('register', require('./register/register-form.vue'))
 Vue.component('sell', require('./home/sell-form.vue'))
 


const routes =[
    {
        path: '/',
        component: require('./home/index.vue')
    },
    {
        path:'/login',
        component: require('./login/login.vue'),
        name: 'login'
    },
    {
        path:'/register',
        component: require('./register/register.vue'),
        name: 'register'
    },
    {
        path: '/sell',
        component: require('./home/sell.vue'),
        name: 'sell'
    }
     
]


// Vue.component('googlemap',require(requirepath+'map.vue'));

// const routes = [
//     {
//         path: '/',
//         component: require(requirepath+'login.vue')
//     },
//     {
//         path:'/login',
//         component: require(requirepath+'login.vue')
//     },
//     {
//         path:'/register',
//         component: require(requirepath+'register.vue')
//     },
//     {
//         path:'/dashboard',
//         component: require(requirepath+'admin/admin-dashboard.vue'),
//         name: 'admin-dashboard',
//         meta: {auth: true},
//         children: [
//             {
//                 path: 'admin',
//                 component: require(requirepath+'admin/admin-dashboard.vue'),
//                 meta: {auth: 'ADMIN'}
//             }
//         ]
        
//     },
//     {
//         path: '/userdashboard',
//         component: require(requirepath+'users/user-dashboard.vue'),
//         name: 'user-dashboard',
//         meta: {auth: 'NORMAL'},
//     },
//     {
//         path: '/userposts',
//         component: require(requirepath+'users/user-post.vue'),
//         meta: {auth: 'NORMAL'}
//     },
//     {
//         path: '/view-post/:id',
//         component: require(requirepath+'users/user-post-details.vue'),
//         name: 'post-details',
//         meta: {auth: 'NORMAL'}

//     },
//     {
//         path:'/usermessages',
//         component: require(requirepath+'users/user-message-thread.vue'),
//         meta: {auth: 'NORMAL'}
//     },
//     {
//         path:'/userprofile',
//         component: require(requirepath+'users/user-profile'),
//         meta: {auth: 'NORMAL'}
//     }
// ]


const router = new VueRouter({routes})

Vue.router = router;

Vue.use(require('@websanova/vue-auth'), {
    auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
    http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
    router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
    rolesVar: 'role_type',
    tokenName: 'token',
    authRedirect: {
    path: '/'
  },
  loginData: {url:'Login'}
   
});

const app = new Vue({router}).$mount('#app')



