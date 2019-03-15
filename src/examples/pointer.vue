<template>
  <div>
    <div class="wrapper">
      <div class="box">
        <vue-justgage ref="g1" id="g1" class="gauge"></vue-justgage>
      </div>
      <div class="box">
        <vue-justgage ref="g2" id="g2" class="gauge"></vue-justgage>
      </div>
      <div class="box">
        <vue-justgage ref="g3" id="g3" class="gauge"></vue-justgage>
      </div>
      <div class="box">
        <vue-justgage ref="g4" id="g4" class="gauge"></vue-justgage>
      </div>
    </div>
    <div class="container">
      <button type="button" id="gauge_refresh" @click="refresh">Refresh Gauges</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      g1: null,
      g2: null,
      g3: null,
      g4: null
    }
  },
  mounted() {
    this.g1 = this.$refs.g1.draw({
      id: 'g1',
      value: 65,
      min: 0,
      max: 100,
      symbol: '%',
      pointer: true,
      gaugeWidthScale: 0.6,
      customSectors: [{
        color: '#ff0000',
        lo: 50,
        hi: 100
      }, {
        color: '#00ff00',
        lo: 0,
        hi: 50
      }],
      counter: true
    });

    this.g2 = this.$refs.g2.draw({
      id: 'g2',
      value: 45,
      min: 0,
      max: 100,
      symbol: '%',
      pointer: true,
      pointerOptions: {
        toplength: -15,
        bottomlength: 10,
        bottomwidth: 12,
        color: '#8e8e93',
        stroke: '#ffffff',
        stroke_width: 3,
        stroke_linecap: 'round'
      },
      gaugeWidthScale: 0.6,
      counter: true
    });

    this.g3 = this.$refs.g3.draw({
      id: 'g3',
      value: 40,
      min: 0,
      max: 100,
      symbol: '%',
      donut: true,
      pointer: true,
      gaugeWidthScale: 0.4,
      pointerOptions: {
        toplength: 10,
        bottomlength: 10,
        bottomwidth: 8,
        color: '#000'
      },
      customSectors: [{
        color: "#ff0000",
        lo: 50,
        hi: 100
      }, {
        color: "#00ff00",
        lo: 0,
        hi: 50
      }],
      counter: true
    });

    this.g4 = this.$refs.g4.draw({
      id: 'g4',
      value: 70,
      min: 0,
      max: 100,
      symbol: '%',
      pointer: true,
      pointerOptions: {
        toplength: 8,
        bottomlength: -20,
        bottomwidth: 6,
        color: '#8e8e93'
      },
      gaugeWidthScale: 0.1,
      counter: true
    });
  },
  methods: {
    refresh() {
      this.g1.refresh(this.getRandomInt(0, 100));
      this.g2.refresh(this.getRandomInt(0, 100));
      this.g3.refresh(this.getRandomInt(0, 100));
      this.g4.refresh(this.getRandomInt(0, 100));
    }
  }
}
</script>

<style scoped>
.wrapper {
  position: relative;
  width: 640px;
  height: 480px;
  margin: 50px auto 0 auto;
  padding-bottom: 30px;
  border: 1px solid #ccc;
  border-radius: 3px;
  clear: both;
}

.box {
  float: left;
  width: 50%;
  height: 50%;
  box-sizing: border-box;
}

.container {
  width: 450px;
  margin: 0 auto;
  text-align: center;
}

.gauge {
  width: 320px;
  height: 240px;
}

button {
  margin: 30px 5px 0 2px;
  padding: 16px 40px;
  border-radius: 5px;
  font-size: 18px;
  border: none;
  background: #34aadc;
  color: white;
  cursor: pointer;
}
</style>
