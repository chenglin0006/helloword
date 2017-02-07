<template>
	<header v-show="showNormalHeader">
    <a href="javascript:void(0);" class="btn-back js_back" @click="backAction"></a>
    <h1>{{title.text}}</h1>
    <a href="javascript:void(0);" class="js_del"></a>
  </header>
</template>
<style lang="less" scoped>
@import url('./less/util');
@import url('./less/border');
@import url('./less/tool');
header {
  position: relative;
  .line(44px);
  text-align: center;
  background-color: #FCFCFC;
  box-shadow: 0 0 3px #CCC;
  z-index: 100;
  h1 {
    padding: 0 88px;
    font-size: 18px;
    font-weight: normal;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .btn-back {
    position: absolute;
    left: 0;
    top: 0;
    .size(44px; 44px);
    &:after {
      content: '';
      position: absolute;
      left: 16px;
      top: 12px;
      .size(11px; 20px);
      background: url(./img/un_icon.png) -10px 0 no-repeat;
      background-size: 41px auto;
    }
  }
  .btn-write {
    position: absolute;
    top: 0;
    right: 44px;
    .size(44px; 44px);
    &:after {
      content: '';
      position: absolute;
      left: 11px;
      top: 11px;
      .size(20px; 20px);
      background: url(./img/un_icon.png) -21px 0 no-repeat;
      background-size: 41px auto;
    }
  }
  .btn-share {
    position: absolute;
    top: 0;
    right: 0;
    .size(44px; 44px);
    &:after {
      content: '';
      position: absolute;
      left: 11px;
      top: 11px;
      .size(20px; 20px);
      background: url(./img/un_icon.png) -10px -20px no-repeat;
      background-size: 41px auto;
    }
  }
  .btn-cancel {
    position: absolute;
    left: 0;
    top: 0;
    .size(44px; 44px);
    &:after {
      content: '';
      position: absolute;
      left: 16px;
      top: 12px;
      .size(11px; 20px);
      background: url(./img/un_icon.png) -10px 0 no-repeat;
      background-size: 41px auto;
    }
  }
  
  .btn-save {
    position: absolute;
    top: 0;
    right: 0;
    .size(44px; 44px);
    font-size: 15px;
    line-height: 44px;
    text-align: center;
    color: #FF6533;
  }
  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    .size(200%; 200%);
    border-bottom: 1px solid #D8D8D8;
    -webkit-transform: scale(0.5);
    -moz-transform: scale(0.5);
    -webkit-transform-origin: 0 0;
    -moz-transform-origin: 0 0;
    box-sizing: border-box;
    pointer-events: none;
  }
}
</style>
<script>
    import UA from '@dp/util-m-ua';
    export default{
        data(){
            return{
                showNormalHeader:false,
                isDPApp:false,
                isMTApp:false,
                isWeixin:false
            }
        },
        props:['title'],
        components:{
            
        },
        ready() {
            this.isDPApp = (UA().type=="dpapp");
            this.isMTApp = (UA().type=='mtgroup');
            this.isWeixin = (UA().type == 'weixin');
            if(this.isDPApp || this.isMTApp){
              this.showNormalHeader = false;
            } else {
              this.showNormalHeader = true;
            }
        },
        methods:{
          backAction: function(){
            if(history.length>1){
              history.go(-1);
            }
          }
        }
            
    }
</script>
