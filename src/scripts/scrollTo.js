import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';

Vue.use(VueScrollTo);
 
Vue.use(VueScrollTo, {
     duration: 500,
     easing: "ease",
     offset: 0,
     force: true,
     cancelable: true,
     onStart: false,
     onDone: false,
     onCancel: false,
     x: false,
     y: true
 })

new Vue({
    el: "#header-nav"
});

new Vue({
    el: "#footer-nav"
});

new Vue({
    el: "#about-scroll"
});