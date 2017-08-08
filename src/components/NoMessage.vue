<template>
  <div name="noMessage" class="txt-center">
    <v-header msg="超市购物清单"></v-header>
    <image src="../static/img/2x/main_news.png" class="img"></image>
    <text class="txt">没有新消息</text> 
    <v-footer></v-footer>
  </div>
</template>

<script>
import VHeader from './Header.vue'
import VFooter from './Footer.vue'
export default {
  name: 'noMessage',
  components:{VHeader,VFooter},
  data () {
    return {

    }
  }
}
</script>

<style scoped>
  .txt-center{font-size:32px;color:#999;}
  .img{width:400px;height:450px;margin-top:130px;margin-bottom:20px;margin-left:200px;}
  .txt{font-size:32px;color:#999;text-align:center;}
</style>
