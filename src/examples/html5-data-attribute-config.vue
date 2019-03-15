<template>
  <div class="container">
    <vue-justgage ref="gg1" id="gg1" class="gauge" data-value="1200" data-min="0" data-max="1000000" data-gaugeWidthScale="0.6"></vue-justgage>
    <input type="button" id="gg1_refresh" class="btn" value="Random Refresh" @click="random" />
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
      formatNumber: true,
      counter: true
    });
  },
  methods: {
    random() {
      this.gg1.refresh(this.getRandomInt(0, 1000000));
    }
  }
}
</script>

<style scoped>
.container {
  width: 320px;
  margin: 30px auto 0 auto;
  text-align: center;
}

.gauge {
  width: 320px;
  height: 320px;
}

.btn {
  margin: 30px 5px 0 2px;
  padding: 15px 20px;
}
</style>
