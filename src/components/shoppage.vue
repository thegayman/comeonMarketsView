<template>
  <div class="span18 last">
    <div id="result" class="result table clearfix">
      <ul>
      <li v-for="product in productList">
        <router-link to="/shopdetail"> <img    v-bind:src='"http://localhost:9090/"+ product.image'
                        style="width: px;height:170px; display: inline-block;"/>
                        <span style='color:green'>{{product.pname}}</span>
                        <span class="price"> 商城价：
                  ￥{{product.shop_price}}元
              </span>
         </router-link>

     </li>

      </ul>
    </div>
    <div class="pagination">
    <span>第1页
              </span>
    </div>

  </div>
</template>
<script>
import leftCategory from './leftCategory'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueSource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueSource)
export default {
  name: 'shoppage',
  data () {
    return{
      productList: [
              ]
   }
  }, created (){
      console.log(this.$route.params.csid);
        console.log(this.$route.params.cid);
        var url = "http://localhost:9090/product/findByCategory";
        var params = new URLSearchParams();
        params.append('cid', this.$route.params.cid);
        params.append('csid', this.$route.params.csid);
      this.$http.get(url,params) .then(
        function(response){
        this.productList = response.body;
        },
        function(response){
          console.log("error")
        }
      )
    } ,
    components: {
     leftCategory
    }
}
</script>
