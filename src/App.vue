<template>
  <div id="app">
    <div class="fixed_list">
      JustGage插件：
      <ul>
        <li v-for="item in fixed_list" :key="item.id">
          <router-link :to="item.link">{{item.text}}</router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      fixed_list: [
        { id: 0, link: '/defaults', text: 'defaults' },
        { id: 1, link: '/autoAdjust', text: 'auto-adjust' },
        { id: 2, link: '/counter', text: 'counter' },
        { id: 3, link: '/customInterval', text: 'custom-interval' },
        { id: 4, link: '/customNode', text:'custom-node'},
        { id: 5, link: '/customSectors', text:'custom-sectors'},
        { id: 6, link: '/customValueRenderer', text: 'custom-value-renderer'},
        { id: 7, link: '/customizeStyle', text: 'customize-style'},
        { id: 8, link: '/fontOptions', text: 'font-options'},
        { id: 9, link: '/formatNumber', text: 'format-number'},
        { id: 10, link: '/html5DataAttributeConfig', text: 'html5-data-attribute-config'},
        { id: 11, link: '/humanFriendlyNumbers', text: 'human-friendly-numbers'},
        { id: 12, link: '/pointer', text: 'pointer'},
        { id: 13, link: '/refreshMaximum', text: 'refresh-maximum'},
        { id: 14, link: '/responsiveGauges', text: 'responsive-gauges'},
        { id: 15, link: '/reverse', text: 'reverse'}
      ]
    }
  }
}
</script>

<style scoped>
.fixed_list {
  position: fixed;
  top: 30px;
  left: 30px;
  z-index: 10;
}
</style>
