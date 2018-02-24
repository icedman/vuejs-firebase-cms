// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'font-awesome/css/font-awesome.css';

import Vue from 'vue';
import Buefy from 'buefy';
// import Axios from 'axios';
import lodash from 'lodash';
import firebase from 'firebase';

import App from './App';
import router from './router';
import store from './store';

import config from '../config/config.json';

Vue.config.productionTip = false;

firebase.initializeApp(config.firebase);
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.commit('SET_USER', user);
  } else {
    store.commit('SET_USER', { displayName: '', email: '' });
    // router.push('/login')
  }
});

Vue.prototype._ = lodash;
// Vue.prototype.$http = Axios;
Vue.prototype.$firebase = firebase;
Vue.use(Buefy);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
