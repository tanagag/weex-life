<template>
  <div name="header" class="header"> 
  	<text class="text">{{msg}}</text>
    <span class="back" @click="pop()" v-show="isShow">
      <image src="../static/img/2x/main_back.png"  class="backimg"></image>
    </span>
  </div>
</template>
<script>
export default {
  name: 'header',
  props:{
    'msg':String,
    'isShow':{
      type:Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
  .header{height:90px;line-height: 90px;background-color: #3096FB;font-size:36px;color:#fff;position: relative;}
  .back{display:block;width:90px;height:90px;padding-top:25px;position: absolute;left:0;top:0;}
  .back:active{background:rgba(0,0,0,0.1);}
  .backimg{width:20px;height:36px;text-align:center;margin-left:35px}
  .text{text-align:center;color:#fff;font-size:32px;height:90px;line-height: 90px;}
</style>
