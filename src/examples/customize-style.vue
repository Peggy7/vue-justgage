<template>
  <div class="container">
    <vue-justgage ref="g1" id="g1"></vue-justgage>
    <vue-justgage ref="g2" id="g2"></vue-justgage>
    <vue-justgage ref="g3" id="g3"></vue-justgage>
    <vue-justgage ref="g4" id="g4"></vue-justgage>
    <vue-justgage ref="g5" id="g5"></vue-justgage>
    <vue-justgage ref="g6" id="g6"></vue-justgage>
    <p>
      Not digging default style? Then mock your own, Picasso! JustGage features bunch of styling options including gauge width, gauge color and shadow, gauge level colors, colors for title, value, min &amp; max etc.
    </p>
    <p>
      Check non-minified version of justgage.js for list of all setup parameters.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      g1: null,
      g2: null,
      g3: null,
      g4: null,
      g5: null,
      g6: null
    }
  },
  mounted() {
    this.g1 = this.$refs.g1.draw({
      id: "g1",
      value: this.getRandomInt(0, 100),
      min: 0,
      max: 100,
      title: "Custom Width",
      label: "",
      gaugeWidthScale: 0.2
    });

    this.g2 = this.$refs.g2.draw({
      id: "g2",
      value: this.getRandomInt(0, 100),
      min: 0,
      max: 100,
      title: "Custom Shadow",
      label: "",
      shadowOpacity: 1,
      shadowSize: 5,
      shadowVerticalOffset: 10
    });

    this.g3 = this.$refs.g3.draw({
      id: "g3",
      value: this.getRandomInt(0, 100),
      min: 0,
      max: 100,
      title: "Custom Colors",
      label: "",
      levelColors: [
        "#00fff6",
        "#ff00fc",
        "#1200ff"
      ]
    });

    this.g4 = this.$refs.g4.draw({
      id: "g4",
      value: this.getRandomInt(0, 100),
      min: 0,
      max: 100,
      title: "Hide Labels",
      hideMinMax: true
    });


    this.g5 = this.$refs.g5.draw({
      id: "g5",
      value: this.getRandomInt(0, 100),
      min: 0,
      max: 100,
      title: "Animation Type",
      label: "",
      startAnimationTime: 2000,
      startAnimationType: ">",
      refreshAnimationTime: 1000,
      refreshAnimationType: "bounce"
    });

    this.g6 = this.$refs.g6.draw({
      id: "g6",
      value: this.getRandomInt(0, 100),
      min: 0,
      max: 100,
      title: "Minimal",
      label: "",
      hideMinMax: true,
      gaugeColor: "#fff",
      levelColors: ["#000"],
      hideInnerShadow: true,
      startAnimationTime: 1,
      startAnimationType: "linear",
      refreshAnimationTime: 1,
      refreshAnimationType: "linear"
    });

    setInterval(() => {
      this.g1.refresh(this.getRandomInt(0, 100));
      this.g2.refresh(this.getRandomInt(0, 100));
      this.g3.refresh(this.getRandomInt(0, 100));
      this.g4.refresh(this.getRandomInt(0, 100));
      this.g5.refresh(this.getRandomInt(0, 100));
      this.g6.refresh(this.getRandomInt(0, 100));
    }, 2500);
  }
}
</script>

<style scoped>
.container {
  text-align: center;
}

#g1, #g2, #g3, #g4, #g5, #g6 {
  width:200px; height:160px;
  display: inline-block;
  margin: 1em;
}

p {
  display: block;
  width: 450px;
  margin: 2em auto;
  text-align: left;
}
</style>
