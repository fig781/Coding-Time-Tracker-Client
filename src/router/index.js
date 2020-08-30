import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import SignIn from '../views/SignIn';
import SignUp from '../views/SignUp';
import CoreGridView from '../views/CoreGridView';
import FourOThree from '../views/FourOThree';
import FourOFour from '../views/FourOFour';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: SignIn,
  },
  {
    path: '/register',
    name: 'Register',
    component: SignUp,
  },
  {
    //temparary route, will need to use user id to go to their gridview
    path: '/gridview',
    name: 'GridView',
    component: CoreGridView,
  },
  {
    path: '/forbidden',
    name: 'FourOThree',
    component: FourOThree,
  },
  {
    path: '*',
    name: 'FourOFour',
    component: FourOFour,
  },
];

const router = new VueRouter({
  routes,
});

export default router;