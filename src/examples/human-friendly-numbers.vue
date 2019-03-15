<template>
  <div class="container">
    <vue-justgage ref="gg1" id="gg1" style="width: 200px; height: 150px;margin: 0 auto;"></vue-justgage>
    <a href="#" id="gg1_refresh" class="button grey" @click="random">Random Refresh</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gg1:null
    }
  },
  mounted() {
    this.gg1 = this.$refs.gg1.draw({
      id: "gg1",
      value: 1024,
      min: 0,
      max: 10000,
      title: "Target",
      label: "",
      humanFriendly: true,
      startAnimationTime: 10000,
      refreshAnimationTime: 10000
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
  margin: 0 auto;
  text-align: center;
}
</style>
