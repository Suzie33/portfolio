import Vue from 'vue'; 
import VueRouter from 'vue-router'; 

Vue.use(VueRouter);

import mainapp from '../components/mainapp.vue';
import about from '../components/about.vue'; 
import works from '../components/works.vue'; 
import reviews from '../components/reviews.vue'; 
import authorization from '../components/authorization.vue'; 

const routes= [ 
  { 
    path: '/', redirect: '/about',
    component: mainapp,
    children: [
      {
        path: 'about',
        component: about
      },
      {
        path: 'works',
        component: works
      },
      {
        path: 'reviews',
        component: reviews
      }
    ]
  },
  {
    path: '/login',
    component: authorization,
    meta: {
      public: true
    }
  },
 ];

export default routes;
