<template>
  <div class="container">
    <vue-justgage ref="g1" id="g1" class="gauge"></vue-justgage>
    <a href="#" id="g1_refresh" class="button grey" @click="random">Random Refresh</a>
    <br />
    <a href="#" id="g1_setmax100" class="button grey" @click="setMax(100)">Set Max 100</a>
    <a href="#" id="g1_setmax200" class="button grey" @click="setMax(200)">Set Max 200</a>
    <a href="#" id="g1_setmax400" class="button grey" @click="setMax(400)">Set Max 400</a>
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
      title: "Max is 100.",
      value: 50,
      min: 0,
      max: 100,
      decimals: 0,
      gaugeWidthScale: 0.6
    });
  },
  methods: {
    random() {
      this.g1.refresh(this.getRandomInt(0, 100));
    },
    setMax(num) {
      var text = new Map([
        [100, "Max is 100."], 
        [200, "Whoops, max jumped to 200."], 
        [400, "Blimey, max blasted to 400!"]
      ]);
      this.g1.refresh(this.g1.originalValue, num);
      this.g1.txtTitle.attr({
          "text": text.get(num)
      });
    }
  }
}
</script>

<style scoped>
.container {
  width: 450px;
  margin: 50px auto 0 auto;
  text-align: center;
}

.gauge {
  width: 450px;
  height: 450px;

}

a:link.button,
a:active.button,
a:visited.button,
a:hover.button {
  margin: 30px 5px 0 2px;
  padding: 7px 13px;
}
</style>
