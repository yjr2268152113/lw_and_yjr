<template>
     <div class="map-tool">
      <p @click="popupShowOnClick">
        <!-- <svg-icon icon-class="city" /> -->
        <span v-if="mapData.district">{{mapData.district}}</span>
        <span v-else-if="mapData.city">{{mapData.city}}</span>
        <span v-else>未知城市</span>
      </p>
      <p @click="mapPopupShowOnClick">
        <!-- <svg-icon icon-class="map" /> -->
        <span>地图</span>
      </p>
      <p>
        <!-- <svg-icon icon-class="loaction" /> -->
        <span>定位</span>
      </p>
    </div>
</template>

<script>
export default {
       name:'maplocation',
    data(){
        return {
            mapData:{},//定义后地理位置信息
        }
    },
    method:{
        mapPopupShowOnClick(){}
    }
}
</script>

<style>

</style>
