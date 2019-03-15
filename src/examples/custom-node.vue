<template>
  <div>
    <div ref="cont" id="cont" class="container">
      <vue-justgage v-show="showNode1" ref="gauge1" class="gauge"></vue-justgage>
      <vue-justgage ref="gauge2" id="gauge2" class="gauge"></vue-justgage>
      <vue-justgage ref="gauge3" id="gauge3" class="gauge" data-title="#3" data-value="75" data-counter="true"></vue-justgage>
      <vue-justgage v-show="showNode4" ref="gauge4" class="gauge" data-title="#4" data-value="100" data-counter="true"></vue-justgage>
    </div>
    <div class="container">
      <button type="button" id="g1_show" @click="showG1">Show G1</button>
      <button type="button" id="g4_show" @click="showG4">Show G4</button>
    </div>
    <div class="container">
      <button type="button" id="g1_refresh" @click="refresh(1)">Refresh G1</button>
      <button type="button" id="g2_refresh" @click="refresh(2)">Refresh G2</button>
      <button type="button" id="g3_refresh" @click="refresh(3)">Refresh G3</button>
      <button type="button" id="g4_refresh" @click="refresh(4)">Refresh G4</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gauge1: null,
      gauge2: null,
      gauge3: null,
      gauge4: null,
      showNode1: false,
      showNode4: false
    }
  },
  mounted() {
    this.gauge2 = this.$refs.gauge2.draw({
      id: "gauge2",
      title: "#2",
      value: 50,
      min: 0,
      max: 100,
      humanFriendly: false,
      decimals: 0,
      counter: true
    });

    this.gauge3 = this.$refs.gauge3.draw({
      id: "gauge3"
    });
  },
  methods: {
    showG1() {
      if(this.showNode1) {
        return;
      }else {
        this.showNode1 = true;
        this.gauge1 = this.$refs.gauge1.draw({
          parentNode: this.$refs.gauge1.$el,
          width: 150,
          height: 150,
          title: "#1",
          value: 25,
          min: 0,
          max: 100,
          decimals: 0,
          counter: true
        });
      }
    },
    showG4() {
      if(this.showNode4) {
        return;
      }else {
        this.showNode4 = true;
        this.gauge4 = this.$refs.gauge4.draw({
          parentNode: this.$refs.gauge4.$el,
          width: 150,
          height: 150
        });
      }
    },
    refresh(index) {
      var gauge = {
        gauge1: this.gauge1,
        gauge2: this.gauge2,
        gauge3: this.gauge3,
        gauge4: this.gauge4
      }
      if(gauge[`gauge${index}`]) {
        gauge[`gauge${index}`].refresh(this.getRandomInt(0, 100));
      }
    }
  }
}
</script>

<style scoped>
button {
  padding: 8px 14px;
}

.container {
  width: 850px;
  margin: 20px auto 0 auto;
  text-align: center;
}

.gauge {
  width: 150px;
  height: 150px;
  display: inline-block;
  border: 1px solid #ccc;
  margin: 5px;
}
</style>
