<template>
  <div name="footer">
  	<div style="height:120px"></div>
    <div class="footer">
      <div class="box direction-row justify-content-space-around align-items-center">
         <div v-for="(item,index) in footAttr" @click="jump(item.path)">
         		<image :src="item.src1" class="img"></image>
            <text class="text" >{{item.msg}}</text>
         </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'footers',
  data () {
    return {
      footAttr:[
        {
          path:'./index',
          src1:'../static/img/2x/home_icon.png',
          src2:'../static/img/2x/home_icon_click.png',
          msg:'首页',
        },
        {
          path:'./orderList',
          src1:'../static/img/2x/repertoire_icon.png',
          src2:'../static/img/2x/repertoire_icon_click.png',
          msg:'清单',
        },
        {
          path:'./personCenter',
          src1:'../static/img/2x/main_icon.png',
          src2:'../static/img/2x/main_icon_click.png',
          msg:'我的',
        }
      ]
    }
  }
}
</script>

<style src="../../static/css/style.css"></style>
<style scoped>
  .footer{position: fixed;bottom:0;width:750px;height:100px;background-color:#fff;border-top-style:solid;border-top-width:1px;border-top-color:#ccc;}
  .box{height:100px;}
  .img{width:30px;height:32px;margin-left:8px}
  .text{font-size:24px;color:#666;line-height: 1.6;}
  .text2{color:#3096fb;font-size:24px;}
</style>
