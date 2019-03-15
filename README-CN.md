# vue-justgage

> 基于[JustGage](https://github.com/toorshia/justgage)插件改造的vue插件


### [README in English](README.md)

# 安装

``` bash
npm install vue-justgage --save-dev
```

或直接引入 dist/vueJustgage.js 文件到项目里
``` html
<script src="vue.min.js"></script>
<!-- must place this line after vue.js -->
<script src="dist/vueJustgage.js"></script>
```

# 用法

可以在 **main.js** 里全局引入：
``` javascript
import vueJustgage from 'vue-justgage';
Vue.use(vueJustgage);
```
也可以单独在.vue文件里引入：
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

# 简单示例

实例化插件请在 **mounted** 钩子之后。
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

# 属性

有关**容器**的属性

| option | type | default | description |
| :------ | :------ | :------ | :------ |
| id | string | | 容器id |
| parentNode | node object | null | 容器DOM |
| width | int | null | 容器的宽 |
| height | int | null | 容器的高 |
| defaults | bool | false | 默认配置 |


有关**仪表盘**的属性

| option | type | default | description |
| :------ | :------ | :------ | :------ |
| value | float | 0 | 仪表盘的值 |
| gaugeWidthScale | float | 1 | 仪表盘管道的宽度 |
| gaugeColor | string | '#edebeb' | 仪表盘管道的颜色 |
| levelColors | string[] | 设置颜色数组如levelColors: ["#00fff6","#ff00fc","#1200ff"]，则将数值均匀分成三段，从小到大依次匹配颜色数组中的值 |
| customSectors | [ ] of objects | [ ] | 自定义仪表盘管道颜色的范围，可选值：{color, lo, hi} |
| noGradient | bool | false | 仪表盘管道是否渐变 |
| donut | bool | false | 是否以圆圈的形式展示 |
| donutStartAngle | int | 90 | 若以圆圈形式展示，开始的角度 |
| hideInnerShadow | bool | false | 是否显示内阴影 |
| shadowOpacity | int | 0.2 | 内阴影的透明度, 值范围 0 ~ 1 |
| shadowSize | int | 5 | 内阴影的宽度 |
| shadowVerticalOffset | int | 3 | 内阴影的偏移量 |
| reverse | bool | false | 反转最大值和最小值 |
| relativeGaugeSize | bool | false | 仪表盘的大小是否依赖容器的大小 |
| pointer | bool | false | 是否显示仪表盘指针 |
| pointerOptions | object | [ ] of objects | 自定义仪表盘指针的样式，可选项：{toplength, bottomlength, bottomwidth, color, stroke, stroke_width, stroke_linecap} |

有关**文字**的属性

| option | type | default | description |
| :------ | :------ | :------ | :------ |
| title | string | ' ' | 仪表盘的标题 |
| min | float | 0 | 仪表盘的最小值 |
| max | float | 100 | 仪表盘的最大值 |
| hideMinMax | bool | false | 是否展示仪表盘的最大最小值 |
| counter | bool | false | 仪表盘的值是否从0开始计数到最大 |
| label | string | ' ' | 仪表盘值下的文字 |
| decimals | int | 0 | 仪表盘的值的小数点 |
| textRenderer | func | null | 自定义仪表盘的值 |
| titleFontColor | string | '#999999' | 仪表盘的标题颜色 |
| titleFontFamily | string | 'sans-serif' | 仪表盘的标题字体 |
| titlePosition | string | 'above' | 仪表盘的标题位置,'above' or 'below' |
| valueFontColor | string | '#010101' | 仪表盘的值颜色 |
| valueFontFamily | string | 'Arial' | 仪表盘的值字体 |
| symbol | string | ' ' | 仪表盘的值后面接的字符串 |
| humanFriendly | string | false | 是否自动以人更好理解的形式展示值 |
| labelFontColor | string | '#b3b3b3' | 仪表盘值下的文字颜色 |
| valueMinFontSize | int | 16 | 仪表盘的值的字体最小大小 |
| titleMinFontSize | int | 10 | 仪表盘的标题的字体最小大小 |
| labelMinFontSize | int | 10 | 仪表盘下的文字的字体最小大小 |
| minLabelMinFontSize | int | 10 | 仪表盘最小值的字体最小大小 |
| maxLabelMinFontSize | int | 10 | 仪表盘最大值的字体最小大小 |
| hideValue | bool | false | 是否展示仪表盘的值 |
| humanFriendlyDecimal | int | 0 | 是否自动以人更好理解的小数点形式展示值 |
| formatNumber | bool | false | 格式化仪表盘的值 |

有关**动画**的属性

| option | type | default | description |
| :------ | :------ | :------ | :------ |
| startAnimationTime | int | 700 | 动画开始时间 |
| startAnimationType | string | '>'  |动画类型 (linear, >, <,  <>, bounce) |
| refreshAnimationTime | int | 700 |  刷新动画的时间 |
| refreshAnimationType  | string | '>' | 刷新动画的类型 (linear, >, <,  <>, bounce) |

# Methods

``` html
<vue-justgage ref="g1" id="g1" class="gauge"></vue-justgage>
```

- **draw**: 实例化一个JustGage
``` javascript
this.$refs.g1.draw(options)
```

 - **refresh**: 刷新仪表盘
``` javascript
this.$refs.g1.refresh(this.getRandomInt(0, 100));
```

注：可以直接使用```this.getRandomInt()```方法。

-- --
更多与实例有关的详细解释可以去[我的博客 vue-justgage详解](https://segmentfault.com/a/1190000018516292)查看。