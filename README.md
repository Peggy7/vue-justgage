# vue-justgage

> A Vue plugin of JustGage


### [中文文档](README-CN.md)

# Reference and Thanks
[justgage](https://github.com/toorshia/justgage)


# Install

``` bash
npm install vue-justgage --save-dev
```

or use dist/vueJustgage.js without webpack
``` html
<script src="vue.min.js"></script>
<!-- must place this line after vue.js -->
<script src="dist/vueJustgage.js"></script>
```

# Usage

You can import it in **main.js**
``` javascript
import vueJustgage from 'vue-justgage';
Vue.use(vueJustgage);
```
or import it in your own component.
``` html
<script>
import Vue from 'vue';
import vueJustgage from 'vue-justgage';
Vue.use(vueJustgage);
export default {
  ...
}
</script>
```

# Sample

Please use methods after **mounted** hook.
``` vue
<template>
  <vue-justgage ref="g1" id="g1" class="gauge"></vue-justgage>
  <button type="button" id="gauge_refresh" @click="refresh">Refresh Gauges</button>
</template>

<script>
export default {
  data() {
    return {
      dflt: {
        min: 0,
        max: 200,
        donut: true,
        gaugeWidthScale: 0.6,
        counter: true,
        hideInnerShadow: true
      }
    }
  },
  mounted() {
    var g1 = this.$refs.g1.draw({
      id: 'g1',
      value: 125,
      title: 'javascript call',
      defaults: this.dflt
    });
  },
  methods: {
    refresh() {
      this.g1.refresh(this.getRandomInt(0, 100));
    }
  }
}
</script>
```

# Options

options about **container**

| option | type | default | description |
| :------ | :------ | :------ | :------ |
| id | string | | container element id |
| parentNode | node object | null | container element |
| width | int | null | gauge width |
| height | int | null | gauge height |
| defaults | bool | false | defaults parameter to use |


options about **gauge**

| option | type | default | description |
| :------ | :------ | :------ | :------ |
| value | float | 0 | value gauge is showing |
| gaugeWidthScale | float | 1 | width of the gauge element |
| gaugeColor | string | '#edebeb' | background color of gauge element |
| levelColors | string[] | [ "#a9d70b", "#f9c802", "#ff0000" ] |colors of indicator, from lower to upper, in RGB format |
| customSectors | [ ] of objects | [ ] | number of digits after floating point, available option:{color, lo, hi} |
| noGradient | bool | false | whether to use gradual color change for value, or sector-based |
| donut | bool | false | show full donut gauge |
| donutStartAngle | int | 90 | angle to start from when in donut mode |
| hideInnerShadow | bool | false | hide inner shadow |
| shadowOpacity | int | 0.2 | shadow opacity, values 0 ~ 1 |
| shadowSize | int | 5 | inner shadow size |
| shadowVerticalOffset | int | 3 | how much shadow is offset from top |
| reverse | bool | false | reverse min and max |
| relativeGaugeSize | bool | false | whether gauge size should follow changes in container element size |
| pointer | bool | false | show value pointer |
| pointerOptions | object | [ ] of objects | define pointer look, available option:{toplength, bottomlength, bottomwidth, color, stroke, stroke_width, stroke_linecap} |

options about **text**

| option | type | default | description |
| :------ | :------ | :------ | :------ |
| title | string | ' ' | gauge title |
| min | float | 0 | min value |
| max | float | 100 | max value |
| hideMinMax | bool | false | hide min and max values |
| counter | bool | false | animate level number change |
| label | string | ' ' | text to show below value |
| decimals | int | 0 | number of digits after floating point |
| textRenderer | func | null | function applied before rendering text |
| titleFontColor | string | '#999999' | color of gauge title |
| titleFontFamily | string | 'sans-serif' | font family of gauge title |
| titlePosition | string | 'above' | position of gauge title,'above' or 'below' |
| valueFontColor | string | '#010101' | color of label showing current value |
| valueFontFamily | string | 'Arial' | font family of label showing current value |
| symbol | string | ' ' | special symbol to show next to value |
| humanFriendly | string | false | font family of label showing current value |
| labelFontColor | string | '#b3b3b3' | color of label showing label under value |
| valueMinFontSize | int | 16 | absolute minimum font size for the value |
| titleMinFontSize | int | 10 | absolute minimum font size for the title |
| labelMinFontSize | int | 10 | absolute minimum font size for the label |
| minLabelMinFontSize | int | 10 | absolute minimum font size for the minimum label |
| maxLabelMinFontSize | int | 10 | absolute minimum font size for the maximum label |
| hideValue | bool | false | hide value text |
| humanFriendlyDecimal | int | 0 | number of decimal places for our human friendly number to contain |
| formatNumber | bool | false | formats numbers with commas where appropriate |

options about **animation**

| option | type | default | description |
| :------ | :------ | :------ | :------ |
| startAnimationTime | int | 700 | length of initial animation |
| startAnimationType | string | '>'  |type of initial animation (linear, >, <,  <>, bounce) |
| refreshAnimationTime | int | 700 |  length of refresh animation |
| refreshAnimationType  | string | '>' |  type of refresh animation (linear, >, <,  <>, bounce) |

# Methods

``` html
<vue-justgage ref="g1" id="g1" class="gauge"></vue-justgage>
```

- **draw**: new a JustGage instance
``` javascript
this.$refs.g1.draw(options)
```

 - **refresh**:refresh gauge
``` javascript
this.$refs.g1.refresh(this.getRandomInt(0, 100));
```

PS: the method getRandomInt can be used directly as ```this.getRandomInt()```

-- --
### For detailed explanation on how things work, consult the [docs for vue-justgage](https://github.com/Peggy7/vue-justgage).
