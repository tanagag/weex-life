<template>
  <list>
    <cell>
      <v-header msg="生活助手" :isShow="false"></v-header>
      <div>
        <slider class="slider" interval="4500"  @change="onchange">
          <div class="frame" v-for="img in imgAttr">
            <image class="image" resize="cover" :src="img"></image>
          </div>
        </slider>
      </div>     
      <section class="m30">
        <div><text class="t">生活金融-小借一笔</text></div>
        <text class="sel-money">{{rangeValue}}</text>
        <div class="sel-option">
          <div class="row option-div direction-row align-items-center">
            <text class="txt">借款期限</text>
            <text @click="showAction('temp1')" class="option-span">{{sheetTemp.data1}}</text>
          </div>
          <div class="row option-div  direction-row align-items-center">
            <text class="txt">您的身份</text>
            <text  @click="showAction('temp2')" class="option-span">{{sheetTemp.data2}}</text>
          </div>
        </div>
        
        <text class="btn mt20" @click="jump('./reCommend')">去借款</text>
        <div class="mt30">
          <router-link to="{}">
            <image src="static/img/2x/home_zhongjie.png" style="width:690px;height:188px"></image>
            <image src="https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/yunying/HumanMoonDay2017PC/common/img/doodle-1.gif" style="width:690px;height:188px"></image>
          </router-link>
        </div>
         <div class="mt30">
          <router-link to="{}">
            <image src="static/img/2x/home_life.png" style="width:690px;height:188px"></image>
          </router-link>
        </div>
      </section>
      <v-footer></v-footer>
      <ActionSheet :show="show" :sheetAttr="sheetAttr" @emitData="onData" @hide="hideAction"></ActionSheet>
    </cell>
   
  </list>
  
</template>

<script>
import VHeader from './Header.vue'
import VFooter from './Footer.vue'
export default {
  components:{VHeader,VFooter},
  name: 'index',
  data () {
    return { 
      rangeValue:10000,
      show:false,//默认隐藏actionSheet
      sheetAttr:[],//实际传入actionSheet组件的值
      sheetTempAttr:{//加载actionSheet的值
        temp1:['6个月','12个月'],
        temp2:['工薪族','企业主']
      },
      sheetTemp:{//临时保存页面加载的actionSheet默认值
        data1:'',
        data2:'',
      },
      flag:'',//判断选中哪个actionSheet底部弹窗
      imgAttr:[//轮播图
        '../static/img/2x/home_banner.png',
        '../static/img/2x/home_banner.png',
        '../static/img/2x/home_banner.png'
      ]
    }
  },
  mounted(){
    this.sheetTemp.data1 = this.sheetTempAttr.temp1[0]
    this.sheetTemp.data2 = this.sheetTempAttr.temp2[0]
  },
  methods:{
    showAction (v) {
      this.flag = v;
      this.sheetAttr = this.sheetTempAttr[v];
      this.show = true;
    },
    hideAction(v){
      this.show = v;
    },
    onData(v){
      if(this.flag=="temp1"){
        this.sheetTemp.data1 = v
      }else{
         this.sheetTemp.data2 = v
      }
       this.show = false;
    },
     onchange (event) {
        console.log('changed:', event)
      }
  }
}
</script>
<style src="../../static/css/style.css"></style>
<style scoped>
  .image {
    width: 750px;
    height: 270px;
  }
  .slider {
    width: 750px;
    height: 270px;
  }
  .frame {
    width: 750px;
    height: 270px;
    position: relative;
  }
  .t{
    font-size:26px;
    color:#999;
    padding-top:20px;
    padding-bottom:20px
  }
  .sel-money{
    color:#F17C08;
    text-align: center;
    font-size:64px;
    font-weight:bold; 
    letter-spacing:1px;
    margin-top:20px;
    margin-bottom:20px;
  }

  .sel-option{
    margin:20px auto;
  }
  .option-div{
    margin:10px 0
  }
  .txt{
    font-size:28px;
    color:#666
  }
  
  .option-span{
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
    
    border-radius: 30px;
    color:#64a0d6;
    font-size:28px;
    display:inline-block;
    width:180px;
    padding-left:40px;
    padding-right:40px;
    line-height: 60px;
    text-align: center;
    margin-top: 10px;
    margin-bottom:10px;
    margin-left: 20px;
  }
</style>

