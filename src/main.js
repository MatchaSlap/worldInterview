import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase';

Vue.config.productionTip = false
const firebaseConfig = {
  apiKey: "AIzaSyCrqkB5AggTVaRyqHPAGtHartlpgewFVes",
  authDomain: "world-interview.firebaseapp.com",
  databaseURL: "https://world-interview.firebaseio.com",
  projectId: "world-interview",
  storageBucket: "",
  messagingSenderId: "977654682901",
  appId: "1:977654682901:web:664203546c76e05d75c51c"
};
firebase.initializeApp(firebaseConfig)

new Vue({
  router,
  store,
  vuetify,
  firebase,
  render: h => h(App)
}).$mount('#app')
