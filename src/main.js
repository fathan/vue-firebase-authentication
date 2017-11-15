// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = true

let app
let config = {
  apiKey: "AIzaSyCUgziR3tmJLeR3wAiZ83vhJlWZywYMDNM",
  authDomain: "learning-7a125.firebaseapp.com",
  databaseURL: "https://learning-7a125.firebaseio.com",
  projectId: "learning-7a125",
  storageBucket: "learning-7a125.appspot.com",
  messagingSenderId: "533842939903"
};
firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(
	(user) => {
		if (!app) {
			/* eslint-disable no-new */
			app = new Vue({
			  el: '#app',
			  router,
			  template: '<App/>',
			  components: { App }
			})
		}
	} 
)
