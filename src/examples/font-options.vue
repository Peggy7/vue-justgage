<template>
  <div class="container">
    <vue-justgage ref="g1" id="g1" class="gauge"></vue-justgage>
    <a href="#" id="g1_refresh" @click="random">Random Refresh</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      g1: null
    }
  },
  mounted() {
    this.g1 = this.$refs.g1.draw({
      id: "g1",
      title: "Font Options",
      value: 72,
      min: 0,
      max: 100,
      gaugeWidthScale: 0.6,
      counter: true,
      titleFontColor: "red",
      titleFontFamily: "Georgia",
      titlePosition: "below",
      valueFontColor: "blue",
      valueFontFamily: "Georgia"
    });
  },
  methods: {
    random() {
      this.g1.refresh(this.getRandomInt(0, 100));
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
