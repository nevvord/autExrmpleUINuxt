
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || 'Kotovsk',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@assets/scss/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    //Multiple Lang: https://dev.to/christopherkade/adding-internationalization-to-your-nuxt-js-applications-39jd
    "~/plugins/i18n.js",
    {src: '~/plugins/vue-notification.js', ssr: false}
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    ['nuxt-fontawesome', {
      imports: [
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        },
        {
          set:'@fortawesome/free-brands-svg-icons',
          icons: ['fab']
        }
      ]
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
    },
    vendor: ['axios']
  }
}
