<template>
  <div class="container">
    <vue-justgage ref="g1" id="g1"></vue-justgage>
    <vue-justgage ref="g2" id="g2"></vue-justgage>
    <vue-justgage ref="g3" id="g3"></vue-justgage>
    <p>
      You need to measure, say, between 350 and 980? No problem, just tell it to justGage. Displayed value and color are calculated as a percentage in defined range, with optional min and max labels shown.
    </p>
    <p>
      Also, if displayed value is out of range, relax and kick your feet up - justGage will take care of it for you.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      g1: null,
      g2: null,
      g3: null
    }
  },
  mounted() {
    this.g1 = this.$refs.g1.draw({
      id: "g1",
      value: this.getRandomInt(350, 980),
      min: 350,
      max: 980,
      title: "Lone Ranger",
      label: "miles traveled"
    });

    this.g2 = this.$refs.g2.draw({
      id: "g2",
      value: 32,
      min: 50,
      max: 100,
      title: "Empty Tank",
      label: ""
    });

    this.g3 = this.$refs.g3.draw({
      id: "g3",
      value: 120,
      min: 50,
      max: 100,
      title: "Meltdown",
      label: ""
    });

    setInterval(() => {
      this.g1.refresh(this.getRandomInt(350, 980));
      this.g2.refresh(this.getRandomInt(0, 49));
      this.g3.refresh(this.getRandomInt(101, 200));
    }, 2500);
  }
}
</script>

<style scoped>
.container {
  text-align: center;
}

#g1,
#g2,
#g3 {
  width: 200px;
  height: 160px;
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
