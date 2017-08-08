<template>
  <div name="recommend">
    <v-header msg="产品推荐" :isShow="true"></v-header>
    <text class="recommend-title">以下是我们为您推荐的产品</text>
    <div class="recommend">
      <div class="box direction-row box1">
      	<image class="company-icon" src="../../static/img/2x/home_recommend_logo.png"></image>
      	<text class="text">善林租赁-工薪族</text>
      </div>
      <div class="box box2 direction-row justify-content-space-around">
      	<div class="flex-left">
          <text class="span2">8%</text>
          <text class="text t1">最低年化利率</text>
        </div>
      	<div class="flex-right">
          <div class="box direction-column">
            <div class="box direction-row box3">
              <text class="span3">5560</text>
              <text class="span4">人申请成功</text>
            </div>
            <text class="text t2">可分期还款</text>
          </div>
        </div>
      </div>
      <text class="lianjie">产品链接已发送至您手机</text>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import VHeader from './Header.vue'
import VFooter from './Footer.vue'
export default {
  name: 'recommend',
  components:{VHeader,VFooter}
}
</script>
<style src="../../static/css/style.css"></style>
<style scoped>
	.box1{
    padding-top:20px;
    padding-bottom:20px;
    padding-left:10px;
    padding-right:10px;
  }
  .box3{
    width:400px;
    padding-left:40px;
    margin-top:10px;
  }
  .flex-left{
    width:310px;
    text-align: center;
    border-right-style:solid;
    border-right-width:1px;
    border-right-color:#dbdbdb;
  }
  .flex-right{
    width:400px;
  }
  .t1{
    width:310px;
    text-align: center
  }
  .t2{
    width:400px;
    text-align: center
  }
  .span2{
    font-size:72px;
    color:#49a3e4;
    width:310px;
    text-align: center;
  }
 
  .span3{
    color:#FC6717;
    font-size:40px;
    letter-spacing: 2px;
  }
  .span4{
    font-size: 36px;
    padding-bottom:20px;
  }
  .text{
    font-size:28px;
    color:#999;
  }
  
  .recommend-title{
    text-align: center;
    font-size:36px;
    color:#333;
    padding-top:40px;
    padding-right:40px;
    padding-bottom:40px;
    padding-left:40px;
  }
  .recommend{
    margin-left:20px;
    margin-right:20px;
    border-top-style:solid;
    border-top-width:1px;
    border-top-color:#dbdbdb;
    border-right-style:solid;
    border-right-width:1px;
    border-right-color:#dbdbdb;
    border-bottom-style:solid;
    border-bottom-width:1px;
    border-bottom-color:#dbdbdb;
    border-left-style:solid;
    border-left-width:1px;
    border-left-color:#dbdbdb;
    padding-top:10px;
    padding-right:10px;
    padding-bottom:10px;
    padding-left:10px;
  }

  .company-icon{
    width:40px;
    height:40px;
    vertical-align: -10px;
    margin-right:10px;
  }
 .lianjie{
    background-color: #F2F2F2;
    color:#999;
    text-align: center;
    height:60px;
    line-height: 60px;
    margin-top:50px;
    margin-right:36px;
    margin-bottom:10px;
    margin-left:36px;
    font-size:28px
 }
</style>
