<template>
  <div class="container">
  <!-- <div class="span10 last">
    <div class="cart">
    <router-link to="/cart">我的购物车{{ shopcarcount }} </router-link>
    </div>
    <div class="phone">
      客服热线: <strong>96008/53277764</strong>
    </div>
    </div> -->
    <div class="span24" style="font-size:12px;line-height:32px;margin:20px auto 25px">
      <div style="float:right" >
        <router-link to="/cart">我的购物车({{ shopcarcount }})</router-link>
        |客服热线: <strong>96008/53277764</strong>
      </div>
    </div>
      <div class="span24">
          <b-navbar toggleable type="inverse" variant="success">
            <b-link class="navbar-brand" to="/">
              <span>首页</span>
            </b-link>
            <b-link class="navbar-brand" to="/productList">
              <span>运动户外</span>
            </b-link>
            <b-link class="navbar-brand" to="/productList">
              <span>珠宝配饰</span>
            </b-link>
            <b-link class="navbar-brand" to="/productList">
              <span>手机数码</span>
            </b-link>
            <b-link class="navbar-brand" to="/productList">
              <span>家电电脑</span>
            </b-link>
            <b-link class="navbar-brand" to="/productList">
              <span>护肤彩妆</span>
            </b-link>
          </b-navbar>
      </div>
  </div>
</template>

<script>
export default {
  name: 'topmenu',
  data () {
    return {
    }
  },
  computed:{
    username(){
      return this.$store.state.username
    },
    shopcarcount(){
      return this.$store.state.shopcarcount
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/**/
div.header .cart {
	width: 60px;
	height: 28px;
	line-height: 28px;
	_display: inline;
	float: left;
	padding-left: 30px;
	margin-left: 80px;
	margin-bottom: 4px;
	background: url(../assets/common.gif) -210px -180px no-repeat;
}
</style>
