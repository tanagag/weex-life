<template>
  <list>
  	<cell>
	  	<image src="../static/img/2x/header_bg.png" class="header-bg" />
	    <div class="header-content box direction-colum align-items-center justify-content-center">
	      	<image src="../static/img/2x/notlogin_pic.png" style="width:180px;height:180px"></image>
	      	<br />
	      	<text v-if="loginData" class="tel">{{tel|telStr}}</text>  
	        <div v-if="!loginData"  @click="jump('/login')" class="goto-btn box direction-row justify-content-center align-items-center">
							<text class="goto-text" >去登陆</text>  
							<image src="../../static/img/2x/login_boult.png" class="goto-img"></image>
	        </div>
	   
	    </div>
	    <div class="cell">
	      <div @click="jump('./noMessage')" class="msg box direction-row justify-content-space-between">
	        <text class="li-text">消息</text>
          <image src="../../static/img/2x/login_boult_right.png" class="btn-right"></image>
	      </div>
	      <div @click="jump('./setAdvise')" class="msg msg2 box direction-row justify-content-space-between">
	        <text class="li-text">联系我们</text>
          <image src="../../static/img/2x/login_boult_right.png" class="btn-right"></image>
	      </div>
	    </div>

	     <text class="btn-div btn" @click="loginOut" v-if="loginData" >退出</text>
	   
	    <v-footer></v-footer>
 		</cell>	
  </list>
</template>

<script>
import VFooter from './Footer.vue'
const storage = weex.requireModule('storage');
const modal = weex.requireModule('modal')
export default {
  name: 'personCenter',
  components:{VFooter},
  data () {
    return {
      tel:'',
      loginData:false
    }
  },
  filters:{
    telStr:function(s){ 
        var s = s.substr(0,3)+"****"+s.substring(7)
        return s
    }
  },
  mounted(){
    //判断是否登录
    storage.getItem('isLogin',event=>{
       event.data=="true" ? this.loginData = true : this.loginData = false;
    })
    //获取登录用户手机
    storage.getItem('tel',event=>{
       this.tel = event.data
    })
  },
  methods:{
    loginOut:function(){ 
      storage.setItem('isLogin',"false", event=>{
        this.loginData = false;
         modal.toast({
          message: "登出成功...",
          duration: 0.5
        })
      });
    }
  }
}
</script>
<style src="../../static/css/style.css"></style>
<style scoped>
  .header-bg{
    height:480px;
    width:750px;
    position:absolute
  }
  .header-content{
  	height:480px;
    width:750px;
  }
  .tel{
    color:#fff;
    font-size:32px;
    margin-top:20px;
  }
  .goto-btn{
  	width:200px;
  	height:72px;
  	margin-top:70px;
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
    border-radius: 50px;   
  }
  .goto-text{font-size:28px;color:#fff}
  
  .goto-img{
  	width:16px;height:26px;display:inline-block;vertical-align: -8px;margin-left:4px
  }
  
  .cell{
    margin-top:10px;
  }
  
  .msg{
    padding-left:20px;
    padding-right:20px;
    height:90px;
    line-height: 90px;
    border-top-style:solid;
    border-top-width:1px;
    border-top-color:#dbdbdb;
  }
  .msg2{
    border-bottom-style:solid;
    border-bottom-width:1px;
    border-bottom-color:#dbdbdb;
  }
  .btn-right{
  	width:20px;
    height:36px;
    margin-top:30px;
  }
  .li-text{
  	font-size:28px;
  	height:90px;
  	line-height: 90px;
  	color:#666
  	}
  .btn-div{
    margin-top:160px;
    margin-bottom:40px;
    margin-left:30px;
    text-align:center;
  }
</style>
