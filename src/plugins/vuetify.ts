import Vue from 'vue';
import Vuetify from 'vuetify';

import 'vuetify/dist/vuetify.min.css';
import {Iconfont} from 'vuetify/types/services/icons';

Vue.use(Vuetify);

const opts = {
  icons: {
    iconfont: 'mdiSvg' as Iconfont,
  },
};

export default new Vuetify(opts);
