<template>
  <div class="container header" >
      <div class="span24" style="font-size:12px;line-height:32px" >
        <div style="float:right">
            {{ username }}&nbsp;&nbsp;&nbsp;
            <router-link  to="/login"><span style="line-heigtht">登录</span></router-link>|
            <router-link   to="/register">注册 </router-link>
            <router-link to="/cart">我的订单</router-link>
            <a  href="javascript:void(0)">退出</a>|
            <router-link to="/shop">会员中心 </router-link>
            <a>购物指南</a>
            <a>关于我们</a>
        </div>
      </div>
  </div>
</template>
<script>
import Topmenu from './menu'
export default {
  name: 'headers',
  data () {
    return{
   }
 },created(){
   var username=sessionStorage.username;
   if(username!=undefined){
     this.$store.commit("login",username)
   }
 },
  components: {
   Topmenu
  },
 computed:{
   username(){
     return this.$store.state.username
   },
   shopcarcount(){
     return this.$store.state.shopcarcount
   }
 }
 // ,methods:{
 //   removeUser(){
 //     sessionStorage.removeItem("username");
 //     this.$store.commit("login","亲,请登录!");
 //   }
 // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
