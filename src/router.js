import Vue from 'vue'; 
import VueRouter from 'vue-router'; 

Vue.use(VueRouter);

import mainapp from './admin/components/mainapp.vue';
import about from './admin/components/about.vue'; 
import works from './admin/components/works.vue'; 
import reviews from './admin/components/reviews.vue'; 
import authorization from './admin/components/authorization.vue'; 

const routes= [ 
  { 
    path: '/', 
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
    component: authorization
  },
 ];

export default new VueRouter({ routes });
