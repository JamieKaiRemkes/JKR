import Vue from 'vue'
import VueGtag from 'vue-gtag'

export default ({ isDev, app, store }) => {
  const cookieConsent = store.getters['localStorage/getCookieConsent']
  const useGTAG = (cookieConsent === true) && isDev // needs !

  Vue.use(VueGtag, {
    appName: 'JKR',
    config: {
      id: process.env.GTAG
    },
    bootstrap: useGTAG === true,
    enabled: useGTAG === true,
    pageTrackerScreenviewEnabled: true
  },
  app.router)
  // eslint-disable-next-line no-console
  if (!useGTAG) { console.log('Skipping GTAG') }
}
