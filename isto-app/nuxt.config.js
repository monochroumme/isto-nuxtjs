let routerBase;
if (process.env.DEPLOY_ENV === 'GH_PAGES') {
  routerBase = {
    router: {
      base: '/isto-nuxtjs/'
    }
  }
} else if (process.env.DEPLOY_ENV === 'FRONT') {
  routerBase = {
    router: {
      base: '/front/'
    }
  }
} else {
  routerBase = {
    router: {
      base: '/'
    }
  }
}

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  axios: {
    baseURL: 'http://isto.dev-onfire.work/api'
  },
  ...routerBase,
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#4B555E' },
  /*
  ** Global CSS
  */
  css: [
    { src: '~/assets/scss/app.scss', lang: 'scss' }
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
      '~/plugins/bus',
      '~/plugins/globals',
      '~/plugins/SmoothScroll',
      '~/plugins/util/axios'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  server: {
      port: 3000
  },
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    [ 'nuxt-env', {
      keys: [
        { key: 'baseUrl', default: 'http://isto.dev-onfire.work/storage/'},
        { key: 'additionalUrl', default: 'http://isto.dev-onfire.work/'},
      ]
    }],
    ['nuxt-i18n', {
      locales: [
        {
          code: 'ua',
          file: 'ua.js'
        },
        {
          code: 'en',
          file: 'en.js'
        },
        {
          code: 'ru',
          file: 'ru.js'
        }
      ],
      langDir: 'locales/',
      defaultLocale: 'en',
      vueI18n: {
        fallbackLocale: 'ru',
      },

      detectBrowserLanguage: false,


    }
    ]
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
