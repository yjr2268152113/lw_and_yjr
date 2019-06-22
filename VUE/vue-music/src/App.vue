<template>
  <div id="app">
    <!-- 头部 header -->
    <vheader>
      <i slot="left-icon" class="icon">&#xe692;</i>
      <span slot="content">Magic Music</span>
      <router-link to="/user" slot="right-icon">
      <i class="icon">&#xe63c;</i>
      </router-link>
    </vheader>
    <!-- tap -->
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
 <!-- play -->
 <!-- sideber -->
 <sidebar></sidebar>
  </div>
</template>

<script>
import vheader from "@/components/header";
import tab from "@/components/tab";
import sidebar from "@/components/sidebar"
export default {
  data() {
    return {};
  },
  components: {
    vheader,
    tab,
    sidebar
  }
};
</script>
<style lang="stylus">
@import './assets/css/function'

@font-face {
  font-family: 'icon';
  src: url('//at.alicdn.com/t/font_kmywdojzhchj8aor.eot');
  src: url('//at.alicdn.com/t/font_kmywdojzhchj8aor.eot?#iefix') format('embedded-opentype'), url('//at.alicdn.com/t/font_kmywdojzhchj8aor.woff') format('woff'), url('//at.alicdn.com/t/font_kmywdojzhchj8aor.ttf') format('truetype'), url('//at.alicdn.com/t/font_kmywdojzhchj8aor.svg#iconfont') format('svg');
}

.icon {
  font-family: 'icon' !important;
  font-size: 18px;
  font-style: normal;
  color: #ffffff;
}

html, body {
  line-height: 1;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  font-family: PingFang SC, STHeitiSC-Light, Helvetica-Light, arial, sans-serif;
  background: rgba(8, 5, 58, 0.9);
  color: #ffffff;
}
</style>

