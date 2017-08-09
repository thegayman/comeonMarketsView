<template>
  <div class="container cart">
  			<div class="span24">
  				<div class="step step1">
  					<ul>
   				<li class="current"></li>
  						<li>生成订单成功</li>
  					</ul>
  				</div>
  				<table>
  					<tbody>
    						<tr>
    							<th>图片</th>
    							<th>商品</th>
    							<th>价格</th>
    							<th>数量</th>
    							<th>小计</th>
    						</tr>
                <tr v-for="produce in produceList">
  								<td width="60"><input type="hidden" name="id" value="22" />
  									<img v-bind:src='"http://localhost:9090/"+ produce.image' >
  								</td>
  								<td><a target="_blank">{{ produce.pname}}</a></td>
  								<td>￥{{ produce.shop_price}}</td>
  								<td class="quantity" width="60">{{produce.count}}</td>
  								<td width="140"><span class="subtotal">￥{{produce.shop_price*produce.count}}</span></td>
  							</tr>
  					</tbody>
  				</table>
  				<dl id="giftItems" class="hidden" style="display: none;">
  				</dl>
  				<div class="total">
  					<em id="promotion"></em> 商品金额:￥{{total}}
  				</div>
  				<form id="orderForm"

  					method="post">
  					<input type="hidden" name="order.oid"
  						value="#123123123123" />
  					<div class="span24">
              <p>
  							收货地址：<input name="order.addr" type="text"
  								v-model="address"
  								style="width:350px" /> <br /> 收货人&nbsp;&nbsp;&nbsp;：<input
  								name="order.name" type="text"
  								v-model="personName"
  								style="width:150px" /> <br /> 联系方式：<input name="order.phone"
  								type="text" v-model="phone"
  								style="width:150px" />

  						</p>
  						<hr />
  						<p>
  							选择银行：<br /> <input type="radio" name="pd_FrpId"
  								value="ICBC-NET-B2C" checked="checked" />工商银行 <img
  								src="./../assets/bank_img/icbc.bmp"
  								align="middle" />&nbsp;&nbsp;&nbsp;&nbsp; <input type="radio"
  								name="pd_FrpId" value="BOC-NET-B2C" />中国银行 <img
  								src="./../assets/bank_img/bc.bmp"
  								align="middle" />&nbsp;&nbsp;&nbsp;&nbsp; <input type="radio"
  								name="pd_FrpId" value="ABC-NET-B2C" />农业银行 <img
  								src="./../assets/bank_img/abc.bmp"
  								align="middle" /> <br /> <input type="radio" name="pd_FrpId"
  								value="BOCO-NET-B2C" />交通银行 <img
  								src="./../assets/bank_img/bcc.bmp"
  								align="middle" />&nbsp;&nbsp;&nbsp;&nbsp; <input type="radio"
  								name="pd_FrpId" value="PINGANBANK-NET" />平安银行 <img
  								src="./../assets/bank_img/pingan.bmp"
  								align="middle" />&nbsp;&nbsp;&nbsp;&nbsp; <input type="radio"
  								name="pd_FrpId" value="CCB-NET-B2C" />建设银行 <img
  								src="./../assets/bank_img/ccb.bmp"
  								align="middle" /> <br /> <input type="radio" name="pd_FrpId"
  								value="CEB-NET-B2C" />光大银行 <img
  								src="./../assets/bank_img/guangda.bmp"
  								align="middle" />&nbsp;&nbsp;&nbsp;&nbsp; <input type="radio"
  								name="pd_FrpId" value="CMBCHINA-NET-B2C" />招商银行 <img
  								src="./../assets/bank_img/cmb.bmp"
  								align="middle" />
  						</p>
  						<hr />
  						<p style="text-align:right">
  						<!-- <router-link  to="/play"><a
  								href="#">
  								<img 	src="./../assets/finalbutton.gif"
  								width="204" height="51" border="0" />
  							</a>
                </router-link> -->
                <router-link :to="{ name: 'play', params: {produceList:produceList,address:address,personName:personName,phone:phone,total:total}}">
                  <a href="#" @click="orderSub">
      								<img 	src="./../assets/finalbutton.gif"
      								width="204" height="51" border="0" />
      							</a>
                </router-link>
  						</p>
  					</div>
  				</form>
  			</div>

  		</div>
</template>

<script>
export default {
  name: 'order',
  data () {
    return {
      produceList:[],
      address:"广东广州市天河区元岗智汇园310号",
      personName:"小丰丰",
      phone:15488459965,
      total:0
    }
  },created(){
    //this.$route.params.produceList是订单传过来的购物车信息
    this.produceList=this.$route.params.produceList;
    var listTemp=this.$route.params.produceList;
    for(var i=0;i<this.$route.params.produceList.length;i++){
      this.total+=listTemp[i].shop_price*listTemp[i].count
    }
  },methods:{
    orderSub(){
      //这里加入数据库中去
      var params = new URLSearchParams();
      var Order=new Object();
      Order.orderTotal=this.total;
      Order.state="未发货"
      Order.name=this.personName;
      Order.phone=this.phone;
      Order.address=this.address;
      Order.pid=sessionStorage.uid;
      var OrderList=new Array();
      for(var i=0;i<this.produceList.length;i++){
          var Obj=new Object();
          Obj.pid=this.produceList[i].pid;
          Obj.pname=this.produceList[i].pname;
          Obj.market_price=this.produceList[i].market_price;
          Obj.shop_price=this.produceList[i].shop_price;
          Obj.image=this.produceList[i].image;
          Obj.pdesc=this.produceList[i].pdesc;
          Obj.is_hot=this.produceList[i].is_hot;
          Obj.pdate=this.produceList[i].pdate;
          Obj.csid=this.produceList[i].csid;
          Obj.stock=this.produceList[i].stock;
          Obj.carId=this.produceList[i].carId;
          Obj.pid1=this.produceList[i].pid1;
          Obj.count=this.produceList[i].count;
          Obj.proPrice=this.produceList[i].proPrice;
          OrderList.push(Obj);
      }
      params.append('order', JSON.stringify(Order));
      params.append('produceList',JSON.stringify(OrderList));
      this.$ajax.post("http://localhost:9090/orders/save",params);
      alert("提交成功");
      //跳转,同时传数据过去
      this.$router.push({name:'play', params: {produceList:this.produceList,address:this.address,personName:this.personName,phone:this.phone,total:this.total}});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.cart .step {
	height: 38px;
	margin-bottom: 10px;
}

div.cart .step li {
	width: 150px;
	height: 38px;
	line-height: 38px;
	float: left;
	padding-left: 50px;
	font-size: 14px;
	font-family: "Microsoft YaHei";
}

div.cart .step .current {
	color: #ffffff;
}

div.cart .step1 {
	background: url(../assets/cart.gif) 0px 0px no-repeat;
}

div.cart .step2 {
	background: url(../assets/cart.gif) 0px -38px no-repeat;
}

div.cart .step3 {
	background: url(../assets/cart.gif) 0px -76px no-repeat;
}

div.cart table {
	width: 100%;
	margin-bottom: 10px;
}

div.cart table th {
	line-height: 36px;
	padding: 0px 6px;
	color: #999999;
	font-weight: normal;
	text-align: left;
	border: solid 1px #e6e4e3;
	background-color: #fafafa;
}

div.cart table td {
	line-height: 20px;
	padding: 4px;
	border: solid 1px #f1f1f1;
}

div.cart table img {
	width: 60px;
	height: 60px;
}

div.cart dl {
	height: 20px;
	line-height: 20px;
	padding: 4px 10px;
	margin-bottom: 10px;
	border: solid 1px #f1f1f1;
}

div.cart dt {
	float: left;
	margin-right: 10px;
	font-weight: bold;
}

div.cart dd {
	float: left;
	margin-right: 10px;
}

div.cart .quantity input {
	width: 30px;
	height: 18px;
	line-height: 18px;
	float: left;
	padding: 0px 2px;
	text-align: center;
	ime-mode: disabled;
	border: 1px solid #dbdbdb;
}

div.cart .quantity div {
	height: 18px;
	float: left;
	padding-left: 2px;
}

div.cart .quantity .increase {
	width: 18px;
	height: 7px;
	display: block;
	clear: both;
	margin-bottom: 2px;
	cursor: pointer;
	overflow: hidden;
	border: 1px solid #dbdbdb;
	background: url(../assets/cart.gif) 0px -120px #f9f9f9 no-repeat;
}

div.cart .quantity .decrease {
	width: 18px;
	height: 7px;
	display: block;
	clear: both;
	cursor: pointer;
	overflow: hidden;
	border: 1px solid #dbdbdb;
	background: url(../assets/cart.gif) -30px -120px #f9f9f9 no-repeat;
}

div.cart .total {
	padding: 10px 0px;
	margin-bottom: 10px;
	text-align: right;
}

div.cart .total em {
	margin-right: 14px;
	color: #ff6600;
	font-style: normal;
}

div.cart .total strong {
	color: #ef0101;
	font-size: 14px;
}

div.cart .bottom {
	height: 30px;
	line-height: 30px;
	margin-bottom: 10px;
	text-align: right;
	overflow: hidden;
	border: 1px dotted #e4e4e4;
	background-color: #fdfdfd;
}

div.cart .clear {
	margin-right: 10px;
}

div.cart .submit {
	padding: 14px;
	color: #ffffff;
	background-color: #b31d04;
}

div.cart p {
	line-height: 60px;
	margin-bottom: 10px;
	border-top: 1px solid #e4e4e4;
	border-bottom: 1px solid #e4e4e4;
}
</style>
