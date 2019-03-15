<template>
  <div class="container">
    <vue-justgage ref="g1" id="g1"></vue-justgage>
    <vue-justgage ref="g2" id="g2"></vue-justgage>
    <vue-justgage ref="g3" id="g3"></vue-justgage>
    <vue-justgage ref="g4" id="g4"></vue-justgage>
    <p>
      JustGage auto-adjusts to the size of containing element. And to the screen zoom level. And screen density. Nice. This means you’ll get clean, sharp and nice looking gauge at all times. Try zooming the page to see the results.
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
      g4: null
    }
  },
  mounted() {
    this.g1 = this.$refs.g1.draw({
      id: "g1",
      value: this.getRandomInt(0, 100),
      min: 0,
      max: 100,
      title: "Big Fella",
      label: "pounds"
    });

    this.g2 = this.$refs.g2.draw({
      id: "g2",
      value: this.getRandomInt(0, 100),
      min: 0,
      max: 100,
      title: "Small Buddy",
      label: "oz"
    });

    this.g3 = this.$refs.g3.draw({
      id: "g3",
      value: this.getRandomInt(0, 100),
      min: 0,
      max: 100,
      title: "Tiny Lad",
      label: "oz"
    });

    this.g4 = this.$refs.g4.draw({
      id: "g4",
      value: this.getRandomInt(0, 100),
      min: 0,
      max: 100,
      title: "Little Pal",
      label: "oz"
    });

    setInterval(() => {
      this.g1.refresh(this.getRandomInt(50, 100));
      this.g2.refresh(this.getRandomInt(50, 100));
      this.g3.refresh(this.getRandomInt(0, 50));
      this.g4.refresh(this.getRandomInt(0, 50));
    }, 2500);
  }
}
</script>

<style scoped>
.container {
  text-align: center;
}

#g1 {
  width:400px; height:320px;
  display: inline-block;
  margin: 1em;
}

#g2, #g3, #g4 {
  width:100px; height:80px;
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
