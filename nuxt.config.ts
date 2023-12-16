export default defineNuxtConfig({
  runtimeConfig: {
    // Env will be injected by creating NUXT_ or NUXT_PUBLIC_ respectively prefixed env vars at runtime
    authDomain: process.env.AUTH_DOMAIN || "jamie-kai-remkes.eu.auth0.com",
    auth_client_key: process.env.AUTH_CLIENT_KEY || "NpkBazVj69lRu57ioVKF0MHhuYRgv69l",
    public: {
      contactMail: process.env.CONTACT_MAIL || "example@example.com",
      contactPhone: process.env.CONTACT_PHONE || '1234567890',
      gtag: process.env.GTAG || "G-0000000000",
    }
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },

  $meta: {
    title: "JKR",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0",
      },
      { hid: "description", name: "description", content: "" },
      {
        name: "theme-color",
        content:
          "window.getComputedStyle(document.querySelector('body')).getPropertyValue('--color-light')",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
  },

  // Global CSS
  css: [
    // Include apps styles
    "@/assets/sass/app.sass",
  ],

  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@import "@/assets/sass/mixins/_mixins.sass"',
        },
      },
    },
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  // plugins: [
  //   '@/plugins/i18nTransitionFix',
  //   { src: '@/plugins/vueGtag', mode: 'client' },
  //   { src: '@/plugins/VueTouchEvents', mode: 'client' },
  //   { src: '@/plugins/clickOutside', mode: 'client' }
  // ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    'nuxt-svgo',
  //   // https://go.nuxtjs.dev/eslint
  //   '@nuxtjs/eslint-module',
  //   // https://github.com/nuxt-community/svg-module
  //   '@nuxtjs/svg',
  //   // https://go.nuxtjs.dev/axios
  //   '@nuxtjs/axios',
  //   // https://go.nuxtjs.dev/pwa
  //   '@nuxtjs/pwa',
  //   // https://www.npmjs.com/package/@nuxtjs/style-resources
  //   '@nuxtjs/style-resources',
  //   // Persistant storage
  //   'nuxt-vuex-localstorage',
  //   // Auth0
  //   '@nuxtjs/auth-next'
  ],

  // auth: {
  //   // Options
  //   strategies: {
  //     auth0: {
  //       domain: process.env.AUTH_DOMAIN || "jamie-kai-remkes.eu.auth0.com",
  //       clientId:
  //         process.env.AUTH_CLIENT_KEY || "NpkBazVj69lRu57ioVKF0MHhuYRgv69l",
  //     },
  //   },
  // },

  colorMode: {
    preference: 'system',
    fallback: 'light',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode'
  },

  svgo: {
    svgo: false
  },

  i18n: {
    locales: [
      {
        code: "en",
        iso: "en-US",
        name: "English"
      },
      {
        code: "nl",
        iso: "nl-NL",
        name: "Nederlands"
      },
    ],
    defaultLocale: "en",
    strategy: "prefix",
    baseUrl: () => window.location.origin,
    detectBrowserLanguage: {
      useCookie: true,
      cookieCrossOrigin: false,
      cookieDomain: null,
      cookieKey: "locale",
      cookieSecure: false,
      alwaysRedirect: true,
      fallbackLocale: "en",
    },
    // To fix jumping pages on locale change
    skipSettingLocaleOnNavigate: true,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: "JKR",
      short_name: "JKR",
      theme_color: "#ffffff",
      // Lang is set by i18n
      lang: "",
      start_url: "/",
      display: "standalone",
      orientation: "portrait",
      icon: {
        source: "@/static/icon.png",
        sizes: [64, 120, 144, 152, 192, 384, 512],
        type: "image/png",
        purpose: "maskable",
      },
    },
  },
});
