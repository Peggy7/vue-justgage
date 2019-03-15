<template>
  <div class="container">
    <vue-justgage ref="gg1" id="gg1" class="gauge"></vue-justgage>
    <p id="gg1_text">0-50 is green, 51-100 is red</p>
    <a href="#" id="gg1_refresh" class="button grey" @click="random">Random Refresh</a>
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
      value : 72.15,
      min: 0,
      max: 100,
      decimals: 2,
      gaugeWidthScale: 0.6,
      customSectors: [{
        color : "#00ff00",
        lo : 0,
        hi : 50
      },{
        color : "#ff0000",
        lo : 50,
        hi : 100
      }],
      counter: true
    });
  },
  methods: {
    random() {
      this.gg1.refresh(this.getRandomInt(0, 100));
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
</style>
