export const state = () => ({
  slides:[],
  about:{},
  settings:{},
  project:{},
  index_blocks:[],
  article:{},
  articles:[],
  index_categories:[],
  projects:[],
  how_we_work:{},
  categories:[],
  locales: ['en', 'fr'],
  locale: 'en'
});

export const actions = {
  async nuxtServerInit({ dispatch }) {
      await dispatch('getSettings');
  },

  async getSlides({ commit }) {
        const data = await this.$axios.$get('/slides');
        commit('mutate',{
            property:'slides',
            with:data
        });
    },
  async getIndex({ commit }) {
      const data = await this.$axios.$get('/index_blocks');
      commit('mutate',{
        property:'index_blocks',
        with:data
      });
  },
  async getArticles({ commit }) {
    const data = await this.$axios.$get('/articles');
    commit('mutate',{
      property:'articles',
      with:data
    });
  },


  async getArticle({ commit },id) {
    const data = await this.$axios.$get(`/article/${id}`);
    commit('mutate',{
      property:'article',
      with:data
    });
  },
  async getAbout({ commit }) {
    const data = await this.$axios.$get('/about');
    commit('mutate',{
      property:'about',
      with:data
    });
  },
  async getProjects({ commit }) {
    const data = await this.$axios.$get('/projects');
    commit('mutate',{
      property:'projects',
      with:data
    });
  },
  async getProject({ commit },id) {
    const data = await this.$axios.$get(`/project/${id}`);
    commit('mutate',{
      property:'project',
      with:data
    });
  },

  async getSettings({ commit }) {
    const data = await this.$axios.$get('/settings');
    commit('mutate',{
      property:'settings',
      with:data
    });
  },
  async getCategories({ commit }) {
    const data = await this.$axios.$get('/categories');
    commit('mutate',{
      property:'categories',
      with:data
    });
  },
  async getIndexCategories({ commit }) {
    const data = await this.$axios.$get('/index_categories');
    commit('mutate',{
      property:'index_categories',
      with:data
    });
  }

};

export const mutations = {

  mutate(state, payload) {
    state[payload.property] = payload.with;
  },

  openMenu (state) {
    state.isMenuOpen = true;
    let opacity_appeared =  document.getElementsByClassName("burger_opacity_appeared");
    let hide_in_burger =  document.getElementsByClassName("hide_in_burger");

    // for (let item of opacity_appeared) {
    //   item.classList.remove("zero_opacity");
    // }
    // for (let i = 0; i < hide_in_burger.length; i++) {
    //   hide_in_burger[i].classList.add("zero_opacity");
    // }

    document.body.style.overflowY = "hidden";

  },
  closeMenu (state) {


    state.isMenuOpen = false;
    // let opacity_appeared =  document.getElementsByClassName("burger_opacity_appeared");
    // let hide_in_burger =  document.getElementsByClassName("hide_in_burger");

    // for (let item of opacity_appeared) {
    //   item.classList.add("zero_opacity");
    // }
    // for (let item of hide_in_burger) {
    //   item.classList.remove("zero_opacity")
    // }

    document.body.style.overflowY = "visible";
  },
  setMobileStatus(state, mobileStatus) {
    state.isMobile = mobileStatus;
  },
  closeThankYou(state) {
    state.isThankYouOpen = false;
  },
  openThankYou(state) {
    state.isThankYouOpen = true;
  }
};

