<template>
  <div class="container login">
  		<div class="span12">
  			<div class="ad">
  				<img src="./../assets/login.jpg"
  					width="500" height="330" alt="会员登录" title="会员登录">
  			</div>
  		</div>
  	<div class="span12 last">
  		<div class="wrap">
  			<div class="main">
  				<div class="title">
  					<strong>您需支付金额:￥{{total}}元
  					</strong>
            <!-- 订单编号: #123123&nbsp;&nbsp;&nbsp;&nbsp; -->
  				</div>
  				<!-- 回写登录失败信息 -->
  				<div>
  					<font color="red"> </font>
  				</div>
  				<form id="loginForm"
  					method="post" novalidate="novalidate"
  					onsubmit="return checkForm();">
  					<input type="hidden" name="order.oid"
  						value="#123123123" />
  					<table>
  						<tbody>
  							<tr>
  								<th>银行账户:</th>
  								<td><input type="text" id="username" name="user.username" v-model="username"
  									class="text" maxlength="20"></td>
  							</tr>
  							<tr>
  								<th>账户密码:</th>
  								<td><input type="password" id="password" name="user.password" v-model="psd"
  									class="text" maxlength="20" autocomplete="off"></td>
  							</tr>
  							<tr>
  								<th>&nbsp;</th>
  								<td><input type="button" class="submit" value="确认支付" @click="pay"></td>
  							</tr>
  						</tbody>
  					</table>
  				</form>
  			</div>
  		</div>
  	</div>
  	</div>
</template>

<script>
export default {
  name: 'play',
  data () {
    return {
      produceList:[],
      address:"广东广州市天河区元岗智汇园310号",
      personName:"小丰丰",
      phone:15488459965,
      total:0,
      username:"",
      psd:""
    }
  },created(){
    this.produceList=this.$route.params.produceList;
    this.address=this.$route.params.address;
    this.personName=this.$route.params.personName;
    this.phone=this.$route.params.phone;
    this.total=this.$route.params.total;
    /*更新购物车数量*/
    var params = new URLSearchParams();
    params.append('uid', sessionStorage.uid);
    this.$ajax.post('http://localhost:9090/shopcar/querycount',params).then(res=>{
      this.$store.commit("addcar",res.data);
    });
  },methods:{
    pay(){
      var params = new URLSearchParams();
      params.append('order', JSON.stringify());
      params.append('produceList',produceList);
      this.$ajax.post('http://localhost:9090/orders/save',params).then(res=>{

      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
