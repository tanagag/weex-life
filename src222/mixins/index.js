const storage = weex.requireModule('storage');
const modal = weex.requireModule('modal');
export default {
  data () {
  	return {
  		isLogin:"false",
  	}
  },
  methods: {
    jump (to) {
      if (this.$router) {
      	if(to=="./reCommend"||to=="./orderList"||to=="./orderDetail"||to=="./noMessage"||to=="./setAdvise"){
    		storage.getItem('isLogin', event => {
                this.isLogin = event.data;
	            if(this.isLogin=="true"){
					this.$router.push(to);
	    		}else{
	    			modal.toast({
				         message: "请先登陆...",
				         duration: 0.3
				    })
	    			if(to!="./login"){
	    				this.$router.push(to);
	    			}
					this.$router.push("./login");
	    		}
            })	
    	}else{
    		this.$router.push(to);
    	}
      }
    },
    pop () {
    	 this.$router.go(-1)
    }
  }
}
