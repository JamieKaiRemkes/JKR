export default {
  // Setup env to load build env in nuxt while generating static site
  env: {
    CONTACT_MAIL: process.env.CONTACT_MAIL || 'example@example.com',
    GTAG: process.env.GTAG || 'G-0000000000',
    CONTACT_PHONE: process.env.CONTACT_PHONE || 1234567890
  },

  publicRuntimeConfig: {
  },

  // Server settings
  server: {
    host: '0.0.0.0',
    port: 8080
  },

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Router config
  router: {
    trailingSlash: false
  },

  // Router transitions
  pageTransition: {
    name: 'page',
    mode: 'out-in'
  },

  layoutTransition: {
    name: 'layout',
    mode: 'out-in'
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'J.K.R.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // Include apps styles
    '@/assets/sass/app.sass'
  ],

  // Sass global styles
  styleResources: {
    sass: [
      // Include app mixins and global vars
      '@/assets/sass/app.sass'
    ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/i18nTransitionFix',
    { src: '@/plugins/vueGtag', mode: 'client' },
    { src: '@/plugins/VueTouchEvents', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://github.com/nuxt-community/svg-module
    '@nuxtjs/svg'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://www.npmjs.com/package/@nuxtjs/style-resources
    '@nuxtjs/style-resources',
    // Add i18n
    'nuxt-i18n',
    // Load env
    '@nuxtjs/dotenv',
    // Persistant storage
    'nuxt-vuex-localstorage'
  ],

  // Configure i18n
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US'
      },
      {
        code: 'nl',
        iso: 'nl-NL'
      }
    ],
    defaultLocale: 'en',
    strategy: 'prefix',
    seo: true,
    baseUrl: () => window.location.origin,
    vueI18nLoader: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieCrossOrigin: false,
      cookieDomain: null,
      cookieKey: 'locale',
      cookieSecure: false,
      // Always redirect according to cookie
      alwaysRedirect: true,
      fallbackLocale: 'en',
      // Better for SEO
      onlyOnRoot: true
    },
    // To fix jumping pages on locale change
    skipSettingLocaleOnNavigate: true
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: 'J.K.R.',
      short_name: 'J.K.R.',
      theme_color: '#ffffff',
      // Lang is set by i18n
      lang: '',
      start_url: '/',
      display: 'standalone',
      orientation: 'portrait',
      icon: {
        source: '@/static/icon.png',
        sizes: [64, 120, 144, 152, 192, 384, 512],
        type: 'image/png',
        purpose: 'maskable'
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
