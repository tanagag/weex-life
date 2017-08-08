<template>
  <div name="setAdvise">
    <v-header msg="联系我们"></v-header>
    <div class="box direction-column wrapper">
   		<textarea placeholder="请输入您的宝贵意见..."  class="flex1 textarea" value=""></textarea>
      <text class="d">100</text>
    </div>
    <text class="btn btn2"  @click="jump('./getAdvise')">提交</text>
    <v-footer></v-footer>
  </div>
</template>

<script>
import VHeader from './Header.vue'
import VFooter from './Footer.vue'
export default {
  name: 'setAdvise',
  components:{VHeader,VFooter}
}
</script>
<style src="../../static/css/style.css"></style>
<style scoped>
  .box{
  		border-top-style:solid;
  		border-top-color:#dbdbdb;
  		border-top-width:1px;
  		border-right-style:solid;
  		border-right-color:#dbdbdb;
  		border-right-width:1px;
  		border-bottom-style:solid;
  		border-bottom-color:#dbdbdb;
  		border-bottom-width:1px;
  		border-left-style:solid;
  		border-left-color:#dbdbdb;
  		border-left-width:1px;
  		margin-top:30px;
      margin-bottom:30px;
      margin-left:26px;
      margin-right:26px;
      height:300px;
  }
  .textarea{
    resize:none;
    padding-left:20px;
    padding-right:20px;
    padding-top:20px;
    padding-bottom:20px;
    border:none;
    font-size:28px;
  }
  .d{
    text-align: right;
    padding-top:10px;
    padding-bottom:10px;
    padding-left:20px;
    padding-right:20px;
    color:#999;
    font-size:32px;
  }
  .btn2{
    margin-top:60px;margin-left:30px;
  }
</style>
