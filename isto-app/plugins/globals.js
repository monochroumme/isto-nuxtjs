import Vue from 'vue';
import {mapGetters} from 'vuex'

const Statics = {
  install(Vue, Options) {
    Vue.mixin({
      computed: {
        locale() {
          return this.$i18n.locale;
        },
        ...mapGetters({

        })
      }
    })
  }
};

Vue.use(Statics);
