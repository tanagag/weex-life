<template>
  <div name="getAdvise">
     <v-header msg="超市购物清单"></v-header>
     <image class="img" src="../static/img/2x/main_suggest_gain.png"></image>
     <div class="advise-info">
       <text class="text1">您的建议我们已获取</text>
       <text class="text2">感谢您的宝贵意见，我们会努力调整</text>
     </div>
     <v-footer></v-footer>
  </div>
</template>

<script>
import VHeader from './Header.vue'
import VFooter from './Footer.vue'
export default {
  name: 'getAdvise',
  components:{VHeader,VFooter}
}
</script>

<style scoped>
  .img{width:380px;height:260px;margin-top:80px;margin-bottom:50px;margin-left:185px;margin-right:185px;}
  .advise-info{margin-top:50px}
  .text1{font-size:32px;color:#666;text-align: center;margin-bottom:20px}
  .text2{color:#999;font-size:28px;text-align: center;}
</style>
