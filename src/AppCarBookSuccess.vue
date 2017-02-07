<template>
	<div class="result-div">
    <div class="top-div">
        <div class="text"><i></i><div>您的申请已提交</div></div>
    </div> 
    <div class="middle-div">
      <div class="img"></div>
      <div class="text-1">专属婚礼顾问将尽快联系您
        </div>
        <div class="text-2">为您安排接驾看酒店
        </div>
    </div>
    <div class="bottom-div">
          <div class="title">婚宴预订流程</div>
          <div class="step-div">
            <div class="step step-1">
              <div class="line-dot">
                <div class="line line-left"></div>
                <div class="dot"></div>
                <div class="line line-right"></div>
              </div>
              <div class="text">在线预订</div>
            </div>
            <div class="step step-2">
              <div class="line-dot">
                <div class="line line-left"></div>
                <div class="dot"></div>
                <div class="line line-right"></div>
              </div>
              <div class="text">顾问确定</div>
            </div>
            <div class="step step-3">
              <div class="line-dot">
                <div class="line line-left"></div>
                <div class="dot"></div>
                <div class="line line-right"></div>
              </div>
              <div class="text">查看场地</div>
            </div>
            <div class="step step-4">
              <div class="line-dot">
                <div class="line line-left"></div>
                <div class="dot"></div>
                <div class="line line-right"></div>
              </div>
              <div class="text">预订婚宴</div>
            </div>
          </div>
    </div>
    <div class="btn-div">
        <div class="btn contact-btn" @click="contactAction">联系婚礼顾问</div>
        <div class="btn back-btn" @click="backToListAction">返回商户列表</div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import url('./less/util');
@import url('./less/border');
@import url('./less/tool');
.result-div{
  .top-div{
    font-size: 18px;
    color:#111;
    line-height: 68px;
    text-align: center;
    .text{
      position: relative;
      line-height: 25px;
      padding-top: 23px;
      padding-bottom: 22px;
      background-color: white;
      div{
        display: inline-block;
        padding-left: 29px;
      }
    }
    i{
        position: absolute;
        width: 20px;
        height: 20px;
        background-image: url(./img/query-success.png);
        background-size: cover;
    }
  }

  .middle-div{
    background-color: #fff9f5;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 49px;
    color: #ff8c7a;
    font-size: 16px;
    .img{
      width: 110px;
      height: 110px;
      background-image: url(./img/people_img.png);
      background-size: contain;
      position: relative;
      left: 50%;
      margin-left: -55px;
    }
    .text-1{
        margin-top: -13px;
        margin-bottom: 3px;
        line-height: 22px;
        position: relative;
    }
  }

  .bottom-div{
    text-align:center;
    padding:0px 0px 23px 0px;
    background-color: #FFF9F5;
    color: #999;
    .title{
      display: inline;
      font-size: 14px;
      line-height: 20px;
    }
    .step-div{
      display: box;
      display: -webkit-box;
      display: -ms-flexbox;
      font-size: 12px;
    }
    .step{
        text-align: center;
        display: block; 
        -webkit-box-flex: 1; 
        box-flex: 1; 
        -ms-box-flex: 1;             
        -ms-flex: 1;
        .dot{
          width: 6px;
          height: 6px;
          background-color: #FFF9F5;
          border:solid 1px #e6dedd;
          border-radius: 10px;
          position: relative;
          left: 50%;
          margin-left: -4px;
          margin-bottom: 6px;
          margin-top: 12px;
          z-index: 10;
        }
        .line-dot{
          position: relative;
        }
        .line{
          height: 1px;
          background-color: #e6dedd;
          position: absolute;
          width: 50%;
          top: 4px;
          &.line-right{
              left: 50%;
          }
        }
        &.step-1{
          width: 25%;
          line-height: 17px;
          .line-left{
            display: none;
          }
        }
        &.step-2{
          width: 25%;
          line-height: 17px;
        }
        &.step-3{
          width: 25%;
          line-height: 17px;
        }
        &.step-4{
          width: 25%;
          line-height: 17px;
          .line-right{
            display: none;
          }
        }
    }
  }
}
.btn-div{
    display: box;
    display: -webkit-box;
    display: -ms-flexbox;
    background-color: white;
    padding:20px 15px 20px 15px;
    .btn{
        display: block;
        -webkit-box-flex: 1;
        box-flex: 1; 
        -ms-box-flex: 1;    
        -ms-flex: 1;
        width: 50%;
        text-align: center;
    }
    .contact-btn{
        line-height:38px;
        font-size:16px;
        border-radius: 5px;
        border:1px solid #ccc;
        color:#777;
        background-color: #fff;
        margin-right: 11px;
    }
    .back-btn{
        line-height:40px;
        background-color: #f63;
        border:none;
        font-size:16px;
        border-radius: 5px;
        color:#fff;
    }
}
</style>
<script>
    export default{
        data(){
            return{
                showCallTel:false,
                consultTelephone:'021-52291601'
            }
        },
        props:[],
        components:{
        },
        ready() {
              
        },
        methods:{
          contactAction:function(){
              _hip.push(['mv', {module: 'app_dp_onestop_car_400', action: 'click'}]);
              this.showCallTel = true;
          },
          backToListAction: function(){
              _hip.push(['mv', {module: 'app_dp_onestop_car_list', action: 'click'}]);
              location.href = "dianping://shoplist?categoryid=165";
          }
        }
            
    }
</script>
