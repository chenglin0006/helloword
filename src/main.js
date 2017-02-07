require('es6-promise').polyfill();
import Vue from 'vue';
import VueRainbow from 'vue-rainbow';
import './main.less';
Vue.use(VueRainbow);

import AppCarBookSuccess from './AppCarBookSuccess.vue'
import AppNormalHeader from './AppNormalHeader.vue'
// import appCommonAd from '@gfe/app-common-ad'
// import appCommonCoupon from '@gfe/app-common-coupon'

new Vue({
  el: 'body',
  ready(){
  },
  components: {
  	AppCarBookSuccess,
  	AppNormalHeader
    // 'app-common-coupon':appCommonCoupon,
    // 'app-common-nav':appCommonNav
  }
})
