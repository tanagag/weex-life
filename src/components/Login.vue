<template>
  <div name="login" class="login">
   	<image src="../static/img/2x/login_close.png" class="close" @click="jump('/index')"></image>
		<image src="../static/img/2x/login_name.png" class="logo"></image>
    <div class="box direction-row align-items-center ipt-div">
      <image class="username-icon" src="../static/img/2x/login_cellphone.png"></image>
      <input type="text" placeholder="输入手机号码" class="ipt"  :autofocus="true"  v-model.trim="tel"  />

    </div>
     <div class="box direction-row align-items-center ipt-div" >
      <image class="username-icon" src="../static/img/2x/login_auth.png"></image>
      <input type="text" placeholder="输入验证码" style="font-size:28px" class="ipt" v-model.trim="code" />  
      <text class="get-code" id="aaa" @click="getCode">{{codeMsg}}</text>
    </div>
		<text class="btn"  @click="loginIn" >{{btnMsg}}</text>

   <!-- <Tips :msg="errorMsg" v-show="errorShow"></Tips>
    <Loading v-show="loadingShow"></Loading>-->
  </div>
</template>

<script>
const storage = weex.requireModule('storage')
const modal = weex.requireModule('modal')
export default {
  name: 'login',
  data () {
    return {
    	codeMsg:"获取验证码",
      btnMsg: '登陆',
      errorMsg:'',
      errorShow:false,//控制提示信息tips
      loadingShow:false,//控制loading
      eventFlag : true,//获取验证码事件解除与否
      second: 60, // 定时
      tel:'13625120448',
      code:''
    }
  },
  mounted(){
  	const Stack = new BroadcastChannel('Avengers')
		Stack.onmessage = function (event) {
		  console.log(event.data) // in this case, it's "Hulk Smash !!!"
		}
		// in another instance
		const Hulk = new BroadcastChannel('Avengers')
		Hulk.postMessage(this.codeMsg)
  },
  methods:{
    //获取验证码
    getCode:function(){
      var secondTemp = this.second;//临时保存定时器
      if(this.eventFlag)
      {
        var cls = setInterval(()=>{
          this.second--;
          if(this.second==0)
          {
              this.codeMsg = "重新获取";
              this.second = secondTemp;
              this.eventFlag = true;
              clearInterval(cls)
          }
          else
          {
            if(secondTemp-1===this.second)
            {
              modal.toast({
                message: '验证码已发送...',
                duration: 0.5
              })
              this.code="1357"
            }
            this.codeMsg=this.second+"s";
            this.eventFlag = false;
          } 
        },1000)
      }
    },
    loginIn:function(e){
      //手机号正则  
      var phoneReg = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;
      //电话  
      if (!phoneReg.test(this.tel)) 
      {  
        modal.toast({
          message: '请输入正确的手机号码...',
          duration: 0.5
        })
        return false
      } 
      //验证码
      if(this.code==""){
        modal.toast({
          message: '请输入验证码...',
          duration: 0.5
        })
        return false
      }

      storage.setItem('tel', this.tel);
      storage.setItem('isLogin', "true" ,event =>{
        modal.toast({
          message: '登陆成功...',
          duration: 0.3
        })
      }) 
      this.$router.push("./index");
    },
    closeDialog:function(){
      this.$router.push("{path:'/'}")
    },
    showErr:function(txt){
      this.errorMsg = txt;
      this.errorShow = true;

      setTimeout(()=>{
        this.errorMsg = "";
        this.errorShow = false;
      },1500)     
    }
  }
}
</script>
<style src="../../static/css/style.css"></style>
<style scoped>
 .login{width:750px;height:1334px;background: #fff}
 .username-icon,.phonecode-icon{
 	width:36px;
 	height:40px;
 }
 
 .close{
 	margin-top:20px;
 	margin-right:20px;
 	margin-bottom:20px;
 	margin-left:20px;
 	width:39px;
 	height:37px
 }
 .logo{
 	width:295px;
 	height:69px;
 	margin-top:220px;
 	margin-bottom:150px;
	margin-left:220px;
 }
 form{
 	margin-left:20px
 }
.ipt-div{
	padding-left:20px;
	padding-right:20px;
	border-bottom-style:solid;
	border-bottom-color:#dbdbdb;
	border-bottom-width:1px;
	height:100px;
	margin-top:20px;
	margin-bottom:20px
}
.ipt{
	font-size:32px;
	height:90px;
	width:440px;
	padding-left:40px;
	border:none;
	color:#3096fb
}
.get-code{
	width:200px;
	display: inline-block;
	height:64px;
	line-height: 64px;
	text-align: center;
	border-style:solid;
	border-width:1px;
	border-color:#dbdbdb;
	font-size:28px;
	border-radius: 30px;
	color:#64a0d6;
	cursor: pointer;
	}
	
	.btn{
		margin-top:100px;
		margin-left:30px;
		width:690px;
		display:block;
		height:85px;
		line-height:85px;
		background-color: #26a2ff;
		text-align:center;
		color:#fff;
		font-size:36px;
		border-radius:10px;
	}

</style>
