<template>
  <div class="container">
    <vue-justgage ref="gg1" id="gg1" class="gauge"></vue-justgage>
    <vue-justgage ref="gg2" id="gg2" data-value="25" class="gauge"></vue-justgage>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dflt: {
        min: 0,
        max: 200,
        donut: true,
        gaugeWidthScale: 0.6,
        counter: true,
        hideInnerShadow: true
      }
    }
  },
  mounted() {
    var gg1 = this.$refs.gg1.draw({
      id: 'gg1',
      value: 125,
      title: 'javascript call',
      defaults: this.dflt
    });
    
    var gg2 = this.$refs.gg2.draw({
      id: 'gg2',
      title: 'data-attributes',
      defaults: this.dflt
    });
  }
}
</script>

<style scoped>
.container {
  width: 600px;
  margin: 100px auto;
  text-align: center;
}

.gauge {
  width: 250px;
  height: 250px;
  display: inline-block;
}
</style>
