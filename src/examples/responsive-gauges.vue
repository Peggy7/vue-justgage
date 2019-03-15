<template>
  <div class="container">
    <div class="wrapper clear">
      <vue-justgage ref="g1" id="g1" class="gauge"></vue-justgage>
      <vue-justgage ref="g2" id="g2" class="gauge"></vue-justgage>
      <vue-justgage ref="g3" id="g3" class="gauge"></vue-justgage>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  mounted() {
    var g1 = this.$refs.g1.draw({
        id: "g1",
        value: this.getRandomInt(0, 1000),
        min: 0,
        max: 1000,
        relativeGaugeSize: true,
        donut: true
    });

    var g2 = this.$refs.g2.draw({
        id: "g2",
        value: this.getRandomInt(0, 100),
        min: 0,
        max: 100,
        title: "Very long title",
        relativeGaugeSize: true,
        donut: true
    });

    var g3 = this.$refs.g3.draw({
        id: "g3",
        value: this.getRandomInt(0, 100),
        min: 0,
        max: 100,
        title: "Very long title",
        label: "label",
        relativeGaugeSize: true,
        donut: true
    });
  }
}
</script>

<style scoped>
body {
  text-align: center;
  padding: 0px;
  margin: 0px;
}
/* clearfix */

.clear:before,
.clear:after {
  content: "";
  display: table;
}

.clear:after {
  clear: both;
}

.clear {
  *zoom: 1;
}

.wrapper {
  position: absolute;
  top: 10px;
  right: 100px;
  bottom: 10px;
  left: 300px;
  margin: 30px;
  border: 1px solid #cccccc;
}

.gauge {
  display: block;
  float: left;
}

#g1 {
  width: 20%;
}

#g2 {
  width: 60%;
}

#g3 {
  width: 20%;
}
</style>
