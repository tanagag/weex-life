<template>
  <div>
    <div class="action_mask" v-if="show" v-on:click="hideAction"></div>
    <div class="action" v-if="show" ref="actionSheet">
        <div class="action_content">
            <text class="item" v-for="item in sheetAttr" @click="returnData(item)">{{item}}</text>
        </div>
        <text class="action_btn" @click="hideAction">{{msg}}</text>
    </div>
  </div>

</template>

<script>
const animation = weex.requireModule('animation')
const modal = weex.requireModule('modal')
export default {
      name: 'actionSheet',
      props:['show','sheetAttr'],
      data(){
        return {
          msg:"取消"
        }
      },
      mounted(){
        var testEl = this.$refs.actionSheet;
        if(this.show){
          animation.transition(testEl, {
            styles: {
              color: '#FF0000',
              transform: 'translateY(300px)'
            },
            duration: 800, //ms
            timingFunction: 'ease',
            delay: 0 //ms
          },()=> {
            modal.toast({ message: 'animation finished.' + this.show})
          })
        }
        
      },
      methods: {
          hideAction:function(){
              this.$emit('hide',false)
          },
          returnData(v){
              this.$emit('emitData',v)
          }
      }
  }
</script>

<style>
  .action{
    position: fixed;
    left: 0;
    bottom: 0;
    width:750px;
    text-align: center;
    background-color: #7C7C7C;
    z-index: 999;
}
.action_title{
    padding-left:20px;
    padding-right:20px;
    color: #888;
    margin-bottom:1px;
    height: 50px; 
    line-height: 50px;
    background-color: #fff;
}
.item{
    height:100px;
    line-height: 100px;
    margin-bottom:1px;
    background-color: #fff;
    font-size:44px;
    text-align: center;
    color: #666;
}
.action_btn{
    height: 100px;
    margin-top: 5px;
    background-color: #fff;
    line-height: 100px;
    font-size:44px;
    text-align: center;
    color: #666;
}

.action_mask{
    position: fixed;
    top: 0;
    left: 0;
    width: 750px;
    height: 1334px;
    background-color: #000;
    opacity: 0.5;
    z-index: 998;
}


.bounce-enter-active{transition:all 0.5s ease;}
.bounce-leave-active{transition:all 0.3s ease;}
.bounce-enter{transform:translateY(300px);opacity: 0}
.bounce-leave-active{transform:translateY(300px);opacity: 0}


/*.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-out .5s;
}
@keyframes bounce-in {
  0% {
    transform: translateY(300px);
  }

  100% {
    transform: translateY(0px);
  }
}
@keyframes bounce-out {
   0% {
    transform: translateY(0px);
  }

  100% {
    transform: translateY(300px);
  }
}

.fade-enter-active {
  animation: fade-in .5s;
}
.fade-leave-active {
  animation: fade-out .5s;
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 0.5;
  }
}
@keyframes fade-out {
   0% {
    opacity: 0.5;
  }

  100% {
    opacity: 0;
  }
}*/
</style>
