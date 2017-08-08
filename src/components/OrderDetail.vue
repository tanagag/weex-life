<template>
	<div name="orderdetail">
		<v-header msg="清单详情"></v-header>
		 <list>
	        <cell>
				<div class="section-list cell">
		          <p><text class="dt">清单详情</text></p>
		          <p><text class="dd">2017-05-08 09:00:12</text></p>
		          <div class="box box2 direction-row justify-content-space-between">
		          	<div class="box direction-row"> 
						<text class="money">消费金额：</text>
						<text class="b">￥500.00</text>
					</div>
					<text class="sta">￥500.00</text>
		          </div>
		        </div>
       
				<div class="m20">
					<text class="order-no">订单号：20170509152448</text>
					<div class="box direction-row box-header">
						<text class="flex2 head2">商品</text>
						<text class="flex1 head1">单价</text>
						<text class="flex1 head1">数量</text>
						<text class="flex1 head1">总价</text>
					</div>
					<div class="wr" v-for="(item,index) in list" :key="index">
						<div class="box direction-row box-content">
							<text class="flex2 con2">绿箭35粒金属无糖兰香薄荷糖</text>
							<text class="flex1 con1">￥10.00</text>
							<text class="flex1 con1">10</text>
							<text class="flex1 con1">￥100.00</text>
						</div>
						<text class="code">二维码：0215456788979</text>
					</div>
				</div>
				<div class="total-price m20 box justify-content-center align-items-flex-end">
					<div class="txt-right">
						<text class="t1">合计：&yen20000.00</text>
						<text class="t2">优惠：&yen10.00</text>
						<text class="t1">实付：&yen20000.00</text>
					</div>
				</div>
			</cell>
		</list>
		<v-footer></v-footer>
	</div>
</template>

<script>
import VHeader from './Header.vue'
import VFooter from './Footer.vue'
export default {
	name: 'orderdetail',
	components:{VHeader,VFooter},
	data () {
		return {
			list:[1,2,3,4,5],
			value:''
		}
	}
}
</script>
<style src="../../static/css/style.css"></style>
<style scoped>
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
	 background-color: #eee;
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


	.wr{

		margin-bottom:30px;
	}
	.order-no{
	font-size:24px;
	color:#64a0d6;
	padding-top:16px;
	padding-bottom:24px;
	}
	.box-header{
	height:70px;
	line-height: 70px;
	border-top-width:1px;
	border-top-style:solid;
	border-top-color:#dbdbdb;
	border-bottom-width:1px;
	border-bottom-style:solid;
	border-bottom-color:#dbdbdb;
	margin-bottom:20px;
	text-align: center;
	}
	.head1{
		text-align: center;
		font-size:32px;
		color:#999;
		height:68px;
		line-height: 68px;
	}
	.head2{
		color:#999;
		font-size:32px;
		height: 68px;
		line-height: 68px
	}
	.con1{
		text-align: center;
		font-size:32px;
		color:#666;
	}
	.con2{
		padding-right: 10px;
	    font-size: 28px;
	    color: #333;
	    margin-bottom: 10px;
	    line-height: 45px;
	}
	.code{
		font-size:24px;
		color:#999;
	}
	.total-price{
		height:220px;
		border:1px solid #dbdbdb;
		border-top-width:1px;
		border-top-style:solid;
		border-top-color:#dbdbdb;
		border-right-width:1px;
		border-right-style:solid;
		border-right-color:#dbdbdb;
		border-bottom-width:1px;
		border-bottom-style:solid;
		border-bottom-color:#dbdbdb;
		border-left-width:1px;
		border-left-style:solid;
		border-left-color:#dbdbdb;
		background-color: #eff3f6;
		margin-top:60px;
		margin-bottom:60px;
	}
	
	.t1{
		font-size:32px;
		color:#666;
		padding-right:20px;
	}
	.t2{
		font-size:26px;
		color:#999;
		padding-top:10px;
		padding-bottom:10px;
	}
	/*
	.section-list dt{font-size:32px;color:#333;}
	.section-list dd{padding:10px 0 30px 0;font-size:24px;color:#999;}
	.section-list .box{padding-bottom:10px;}
	.section-list .box div{color:#999;}
	.section-list .money{font-size:32px;}
	.section-list .box b{font-size:32px;color:#fb6719;}
	.section-list .box>span{color:#999;}
	.order-no{font-size:24px;color:#64a0d6;padding:16px 0 24px 0;}
	.box-header{height:70px;line-height: 70px;border-top:1px solid #dbdbdb;margin-bottom:20px;border-bottom:1px solid #dbdbdb;text-align: center}
	.box-header>span{color:#999;font-size:32px;height:70px;line-height: 70px;text-align: center;}
	.box-content{margin-top:10px;}
	.box-content .flex1{text-align: center;font-size:32px;color:#666}
	.box-content .flex2{color:#999;font-size:20px;}
	.box-content .flex2 p{padding-right:20px;font-size:28px;color:#333;margin-bottom: 20px;}
	.box-content .flex2 .code{font-size:24px;color:#999}
	.total-price{height:220px;border:1px solid #dbdbdb;background: #eff3f6;margin:60px auto;}
	.total-price>div{padding-right:20px;font-size:32px;color:#333;}
	.total-price>div p{font-size:26px}
	.total-price>div p:nth-child(2){font-size:26px;color:#999;padding:10px 0 10px 0;}*/
</style>
