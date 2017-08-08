<template>
  <div name="tips">
      <div class="box direction-column">
        <div class="flex3"></div>
        <div class="flex1">
           <span>{{msg}}</span>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'tips',
  data () {
    return {
      msg:'Dialog弹窗优化中。。。'
    }
  }
}
</script>

<style scoped>
  .box{width:100%;height:100%;position: fixed;left:0;top:0;z-index: 999}
  .box .flex1{text-align: center}
  .box span{background: rgba(0,0,0,0.5);padding:2px 10px;border-radius: 2px;color:#fff;}
</style>
