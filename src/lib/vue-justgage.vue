<template>
  <div id="g1"></div>
</template>

<script>
import JustGage from '../plugin/justgage';
export default {
  name: 'vueJustgage',
  data() {
    return {
      g1: null
    }
  },
  methods: {
    draw(option) {
      this.g1 = new JustGage(option);
      return this.g1;
    },
    refresh(val, max) {
      this.g1.refresh(val,max);
    }
  }
}
</script>

<style scoped>

</style>
