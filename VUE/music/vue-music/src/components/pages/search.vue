<template>
  <div class="search">
      <div class="search-bx-wrapper">
          <!-- 搜索框 -->
          <searchBox @query="onQueryChange"></searchBox>
      </div>
      <div class="shortcut-wrapper" ref="shortcutWrapper" v-show="!query">
        
        <scroll class="shortcut" ref="shortcut" :data="shortcut" :refreshDelay="refreshDelay">
             <div>
               <!-- 热门搜索 -->
               <div class="hot-key">
                 <h1 class="title">热门搜索</h1>
                 <ul>
                   <li
                   class="item"
                   v-for="(item,index) in hotKey"
                   :key="index"
                   @click="addQuery(item.first)"
                   >
                   <span>{{item.first}}</span>

                   </li>
                 </ul>
               </div>
               <!-- 搜索历史 -->
               <div class="search-history" v-show="searchHistory.length">
                 <h1 class="title">
                   <span class="text">搜索历史</span>
                   <span class="clear" @click="showConfirm">
                     <i class="icon">&#xe612;</i>
                   </span>
                 </h1>
                 <!-- 搜索历史列表 -->
                 <searchList :searches="searchHistory" @select="addQuery"></searchList> 
               </div>
             </div>
        </scroll>
      </div>
      <!-- 搜索结果 -->
      <div class="search-result" v-show="query" ref="searchResult">
       <suggest :query="query"  
       @listScroll="blurIput"
       @select="saveSearch"
       ref="suggest"
       ></suggest>
      </div>
  </div>
</template>

<script>
import searchBox from  '@/components/searchBox'
import scroll  from '@/components/scroll'
import searchList  from '@/components/pages/searchList'
import suggest  from '@/components/suggest'
import api from '@/api'
import {mapGetters} from 'vuex'
import {searchMixin} from '@/common/mixin.js'
const limit=20
export default {
  components:{
      searchBox,
      scroll,
      searchList,
      suggest
  },
  mixins:[searchMixin],
  computed:{
    ...mapGetters([
      'searchHistory'
    ])
  },
  data(){
    return {
      query:'',
      hotKey:[],
      shortcut:[],
      refreshDelay:1
    }
  
  },
  methods:{
    showConfirm(){
    },
    onQueryChange(query){
     this.query=query
    },
  
    blurIput(){

    },
    _getHotKey(){
      api.HotSearchKey().then((res)=>{
        if(res.code===200){
          this.hotKey=res.result.hots.slice(0,10)
        }
      })
    }

  },
  created(){
    this._getHotKey()
   
  }
}
</script>

<style lang="stylus" scoped>
@import "../../assets/css/function"
.search
  overflow hidden
  &-box-wrapper
    margin px2rem(40px)
  .shortcut-wrapper
    position fixed
    top  px2rem(360px)
    bottom 0
    width 100%
    .shortcut
      height 100%
      overflow hidden 
      .hot-key
        margin  0 px2rem(40px) px2rem(40px) px2rem(40px)
        .title
          margin-bottom   px2rem(40px)
          font-size  14px
          color hsla(0,0%,100%,0.5)
        .item
          display  inline-block
          padding  px2rem(10px) px2rem(20px)
          margin  0 px2rem(20px) px2rem(20px) 0
          border-radius  6px
          font-size 16px
          color hsla(0,0%,100%,0.3)
          background #2f3054
      .search-history
        position relative
        margin 0 px2rem(40px)
        .title
          display flex
          align-items center
          height px2rem(80px)
          font-size 14px
          color hsla(0,0%,100%,0.5)
          .text
            flex 1
          .clear
            .icon 
              font-size 18px
              color hsla(0,0%,100%,0.3)
              


</style>
