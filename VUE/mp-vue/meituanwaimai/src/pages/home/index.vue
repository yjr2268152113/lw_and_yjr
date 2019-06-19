<template>
<div class="home">
    <seach></seach>
    <recommand></recommand>
    <scroll-view>
      <div class="restaurantsList">
        <div
          class="restaurants-list"
          v-for="(item,index) in restaurant"
          :key="index"
          @click="toIndex"
        >
          <div class="restaurants-info-image">
            <image :src="item.src" class="restaurants-image" />
          </div>
          <div class="restaurants-info">
            <div class="restaurants-info-name">{{item.name}}</div>
            <div class="restaurants-info-rating">
              <!-- <star :size="24" :score="item.score"></star> -->
              <div class="restaurants-info-rating-sales">月售 {{item.sales}}</div>
            </div>
            <div
              class="restaurants-info-price"
            >起送 {{item.initial_price}}￥ | 配送 {{item.distribution_price}}</div>
          </div>
          <div class="restaurants-distribution">
            <span class="restaurants-distribution-time">{{item.time}} 分钟</span>
            <span class="restaurants-distribution-distance">{{item.distance}}</span>
          </div>
        </div>
      </div>

    </scroll-view>

  </div>
</template>
<script>
import search from '@/components/search/search';
import recommand from '@/components/recommand/recommand'
import fly  from '@/utils/fly'
export default {
    data(){
        return {
            restaurant:[],
            isLoading:false
        }
    },
    components:{
        search,
        recommand
    },
    onLoad(){
        wx.showLoading({
            title:'加载中'
        })
        this.$http
        .get("sell#!method=get")
        .then(res=>{
            this.restaurant=[
                ...this.restaurant,...res.data.data.restaurant
            ]
            wx.hideLoading()
        })
    }
}
</script>
