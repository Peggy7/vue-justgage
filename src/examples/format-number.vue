<template>
  <div class="container">
    <vue-justgage ref="gg1" id="gg1" class="gauge"></vue-justgage>
    <a href="#" id="gg1_refresh" @click="random">Random Refresh</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gg1: null
    }
  },
  mounted() {
    this.gg1 = this.$refs.gg1.draw({
      id: "gg1",
      value: 40960,
      min: 1024,
      max: 1000000,
      gaugeWidthScale: 0.6,
      counter: true,
      formatNumber: true
    });
  },
  methods: {
    random() {
      this.gg1.refresh(this.getRandomInt(1024, 1000000));
    }
  }
}
</script>

<style scoped>
.container {
  width: 450px;
  margin: 0 auto;
  text-align: center;
}

.gauge {
  width: 450px;
  height: 450px;
}
</style>
