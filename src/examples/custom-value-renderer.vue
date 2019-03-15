<template>
  <div class="container">
    <vue-justgage ref="gg1" id="gg1" style="width: 200px; height: 150px; margin: 0 auto;"></vue-justgage>
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
      value: 50,
      min: 0,
      max: 100,
      title: "Target",
      label: "temperature",
      textRenderer: this.customValue
    });
  },
  methods: {
    customValue(val) {
      if (val < 50) {
          return 'low';
      } else if (val > 50) {
          return 'high';
      } else if (val === 50) {
          return 'ideal';
      }
    },
    random() {
      this.gg1.refresh(this.getRandomInt(0, 100));
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  text-align: center;
}
</style>
