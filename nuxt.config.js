module.exports = {
  css: [
    'assets/main.sass'
  ],
  router: {
    linkActiveClass: 'active-link'
  },
  loading: false,
  /*
  ** Headers of the page
  */
  head: {
    title: 'Алибек М ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
      { name: 'theme-color', content: '#000' },
      { name: 'msapplication-navbutton-color', content: '#000' },
      { name: 'apple-mobile-web-app-status-bar-style', content: '#000' },
      { hid: 'description', name: 'Описание', content: 'Контент' }
    ],
    link: [
      { rel: 'shortcut icon', type: 'image/x-icon', href: 'favicon/favicon.ico' },
      { rel: 'apple-touch-icon', href: 'favicon/apple-touch-icon.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', href: 'favicon/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', href: 'favicon/apple-icon-114x114.png' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.6/css/bootstrap-grid.min.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.2.0/aos.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/element-ui/1.4.1/theme-default/index.css' }
    ],
    script: [
      {src: 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.2.0/aos.js'},
      {src: 'https://cdnjs.cloudflare.com/ajax/libs/element-ui/1.4.1/index.js'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#1789FC',
    height: '5px',
    failedColor: '#FA709A'
  },
  /*
  ** Build configuration
  */
  build: {
    postcss: [
      require('autoprefixer')({
        browsers: ['> 2%', 'last 5 versions', 'iOS 8']
      }),
      require('postcss-font-magician')
      // require('postcss-cssnext'),
      // require("stylelint")()
    ],
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
