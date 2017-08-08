//import TipsComponent			from './Tips.vue'
//import UpdateVersionComponent   from './Dialog.vue'
import ActionSheetComponent		from './ActionSheet.vue'
//import LoadingComponent			from './Loading.vue'


const Tips ={
    install : function (Vue, options) {
        //Vue.component('Tips',TipsComponent);
        //Vue.component('UpdateVersion',UpdateVersionComponent);
        Vue.component('ActionSheet',ActionSheetComponent);
        //Vue.component('Loading',LoadingComponent);
       /* Vue.myGlobalMethod = function (obj) {//调用Vue.myGlobalMethod({name:"tom",age:12})
          //插件逻辑...
        }*/
        Vue.prototype.$jump = function (to) {//组件mounted(){this.$myGlobalMethod("abc")}或者<p class="t"  @click="$myGlobalMethod('aaa')">生活金融-小借一笔</p>
          //插件逻辑...
        }
    }
} 
export default Tips
