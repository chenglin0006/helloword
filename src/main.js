require('es6-promise').polyfill();
import Vue from 'vue';
import VueRainbow from 'vue-rainbow';
import './main.less';
Vue.use(VueRainbow);

import AppCarBookSuccess from './AppCarBookSuccess.vue'
import AppNormalHeader from './AppNormalHeader.vue'

new Vue({
  el: 'body',
  ready(){
  },
  components: {
  	AppCarBookSuccess,
  	AppNormalHeader
  }
})
