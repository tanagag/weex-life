<template>
    <div name="orderList">
        <v-header msg="超市购物清单"></v-header>
        <scroller class="scroller">
          <refresh class="refresh" @refresh="onrefresh" @pullingdown="onpullingdown" :display="refreshing ? 'show' : 'hide'">
            <text class="indicator">正在加载...</text>
          </refresh>
          <!--<mt-search v-model="value"></mt-search>-->
          <div class="section-list cell" v-for="item in lists">
            <div @click="jump('/orderDetail')">
              <p><text class="dt">家乐福高科中路店</text></p>
              <p><text class="dd">2017-05-08 09:00:12</text></p>
              <div class="box box2 direction-row justify-content-space-between">
                <div class="box direction-row"> 
                  <text class="money">消费金额：</text>
                  <text class="b">￥500.00</text>
                </div>
                <text class="sta">￥500.00</text>
              </div>
            </div>
          </div>
       </scroller>
       <v-footer></v-footer>
    </div>
</template>

<script>
import VHeader from './Header.vue'
import VFooter from './Footer.vue'
const modal = weex.requireModule('modal')
export default {
  components:{VHeader,VFooter},
  name: 'orderList',
  data () {
    return {
      refreshing: false,
      lists:[1,2,3,4,5],
      value:''
    }
  },
  methods:{
    onrefresh (event) {
      console.log('is refreshing')
      modal.toast({ message: 'refresh', duration: 1 })
      this.refreshing = true
      setTimeout(() => {
        this.refreshing = false
      }, 2000)
    },
    onpullingdown (event) {
      console.log('is onpulling down')
      modal.toast({ message: 'pulling down', duration: 1 })
    }
  }
}
</script>
<style src="../../static/css/style.css"></style>
<style scoped>
  .indicator {
    color: #888888;
    font-size: 32px;
    text-align: center;
    padding-top:20px;
    padding-bottom:20px;
  }
  .section-list{
     padding-top:30px;
     padding-bottom:20px;
     padding-left:40px;
     padding-right:40px;
     border-top-width:1px;
     border-top-style:solid;
     border-top-color:#ddd;
     border-bottom-width:1px;
     border-bottom-style:solid;
     border-bottom-color:#ddd;
     margin-bottom:10px;
     background-color: #fff;
   }
  .dt{
    font-size:32px;
    color:#333;
  }
  .dd{
    padding-top:10px;
    padding-bottom:30px;
    padding-left:0;
    padding-right:0;
    font-size:24px;
    color:#999;
  }
  .box2{
    padding-bottom:20px;
  }
  .b{
    font-size:32px;
    color:#fb6719;
  }
  .money{
    font-size:32px;
    color:#999;
  }
  .sta{
    font-size:28px;
    color:#ccc;
  }
</style>
