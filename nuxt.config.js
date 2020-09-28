
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  // mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  env: {
    API_PATHS: {
      host: 'https://iz.ru/api/0',
      tag: 'tag'
    }
  },
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    script: [
      {
        src: 'https://yastatic.net/pcode/adfox/loader.js',
        crossorigin: 'anonymous',
        async: 'async'
      },
      {
        type: 'application/ld+json',
        json: {
          '@context': 'http://schema.org/',
          '@type': 'Person',
          name: 'IZ.RU',
          url: 'https://iz.ru',
          sameAs: [
            'https://vk.com/izvestia',
            'https://www.facebook.com/izvestia.ru',
            'https://ok.ru/group/53243993063542',
            'https://twitter.com/izvestia_ru',
            'https://plus.google.com/u/0/+izvestiaru',
            'https://flipboard.com/@IZ_RU',
            'https://www.instagram.com/izvestia_ru/',
            'https://www.youtube.com/channel/UCpusbvpcIFlVxax9KajEijg',
            'https://t.me/izvestia'
          ]
        }
      },
      {
        type: 'application/ld+json',
        json: {
          '@context': 'http://schema.org/',
          '@type': 'WebSite',
          url: 'https://iz.ru/',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://iz.ru/search?text={search_term_string}',
            'query-input': 'required name=search_term_string'
          }
        }
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/style/utils/fonts',
    '@/assets/style/main',
    '@/assets/style/utils/reset'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    // { src: '@/mixins/metaHead.js', mode: 'client' }
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
  // loading: '@/components/LoadingBar.vue'
  // loading: {
  //   color: '#ffffff',
  //   height: '5px'
  //   // rtl: true
  // }
  // router: {
  //   middleware: 'navigation'
  // }
}
