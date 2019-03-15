import Vue from 'vue';
import Router from 'vue-router';
import Defaults from '../examples/defaults';
import AutoAdjust from '../examples/auto-adjust';
import Counter from '../examples/counter';
import CustomInterval from '../examples/custom-interval';
import CustomNode from '../examples/custom-node';
import CustomSectors from '../examples/custom-sectors';
import CustomValueRenderer from '../examples/custom-value-renderer';
import CustomizeStyle from '../examples/customize-style';
import FontOptions from '../examples/font-options';
import FormatNumber from '../examples/format-number';
import Html5DataAttributeConfig from '../examples/html5-data-attribute-config';
import HumanFriendlyNumbers from '../examples/human-friendly-numbers';
import Pointer from '../examples/pointer';
import RefreshMaximum from '../examples/refresh-maximum';
import ResponsiveGauges from '../examples/responsive-gauges';
import Reverse from '../examples/reverse';


Vue.use(Router);
Vue.config.productionTip = false;

export default new Router({
  routes: [{
    path: '/',
    redirect: '/defaults'
  },
  {
    path: '/defaults',
    name: 'defaults',
    component: Defaults
  }, {
    path: '/autoAdjust',
    name: 'autoAdjust',
    component: AutoAdjust
  }, {
    path: '/counter',
    name: 'counter',
    component: Counter
  }, {
    path: '/customInterval',
    name: 'customInterval',
    component: CustomInterval
  }, {
    path: '/customNode',
    name: 'customNode',
    component: CustomNode
  }, {
    path: '/customSectors',
    name: 'customSectors',
    component: CustomSectors
  }, {
    path: '/customValueRenderer',
    name: 'customValueRenderer',
    component: CustomValueRenderer
  }, {
    path: '/customizeStyle',
    name: 'customizeStyle',
    component: CustomizeStyle
  }, {
    path: '/fontOptions',
    name: 'fontOptions',
    component: FontOptions
  }, {
    path: '/formatNumber',
    name: 'formatNumber',
    component: FormatNumber
  }, {
    path: '/html5DataAttributeConfig',
    name: 'html5DataAttributeConfig',
    component: Html5DataAttributeConfig
  }, {
    path: '/humanFriendlyNumbers',
    name: 'humanFriendlyNumbers',
    component: HumanFriendlyNumbers
  }, {
    path: '/pointer',
    name: 'pointer',
    component: Pointer
  }, {
    path: '/refreshMaximum',
    name: 'refreshMaximum',
    component: RefreshMaximum
  }, {
    path: '/responsiveGauges',
    name: 'responsiveGauges',
    component: ResponsiveGauges
  }, {
    path: '/reverse',
    name: 'reverse',
    component: Reverse
  }]
})