<template>
  <div name="loading">
      <div class="box align-items-center justify-content-center">
           <span><img src="static/img/2x/loading.gif"></span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'loading',
  data () {
    return {
      msg:'Dialog弹窗优化中。。。'
    }
  }
}
</script>

<style scoped>
  .box{width:100%;height:100%;position: fixed;left:0;top:0;z-index: 999;}
  .box span{box-shadow: 0 0 10px rgba(200,200,200,0.5);border-radius: 5px;overflow:hidden;}
  .box img{width:35px;height:35px;}
</style>
