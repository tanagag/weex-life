<template>
  <div name="tips">
      <div class="box direction-column">
        <div class="flex3"></div>
        <div class="flex4">
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
      
    }
  },
  props:{
    msg:{
      type:String
    }
  }
}
</script>

<style scoped>
  .box{width:100%;height:100%;position: fixed;left:0;top:0;z-index: 999}
  .box .flex4{text-align: center}
  .box span{background: rgba(0,0,0,0.5);width:245px;height:42px;line-height:42px;display:block;border-radius: 5px;color:#fff;margin:0 auto;}
</style>
