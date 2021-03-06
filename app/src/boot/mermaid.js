import Vue from 'vue'
import VueMermaid from "vue-mermaid"

//Vue.use(VueCytoscape)
Vue.use(VueMermaid);


import { Icon } from 'leaflet'

import 'leaflet/dist/leaflet.css'

delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

import VueFriendlyIframe from 'vue-friendly-iframe';

Vue.component('vue-friendly-iframe', VueFriendlyIframe);

import VueFormJsonSchema from 'vue-form-json-schema';

Vue.component('vue-form-json-schema', VueFormJsonSchema);

import CKEditor from '@ckeditor/ckeditor5-vue';

Vue.use( CKEditor );
