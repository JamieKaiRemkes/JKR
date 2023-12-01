export const useLocalStore = defineStore('localStore', {
  state: () => ({
    darkMode: false,
    syncSystemDarkMode: false,
    cookieConsent: false
  }),
  getters: {
    getDarkMode: (state) => {
      // TODO: Fix window undefined
      return state.syncSystemDarkMode ? window?.matchMedia && window?.matchMedia('(prefers-color-scheme: dark)').matches : state.darkMode
    },
    getSyncSystemDarkMode: (state) => {
      return state.syncSystemDarkMode
    },
    getCookieConsent: (state) => {
      return state.cookieConsent
    }
  },
  actions: {
    acceptCookies() {
      this.cookieConsent = true
    },
    disableCookies() {
      this.cookieConsent = false
    },
    enableSyncSystemDarkMode() {
      this.syncSystemDarkMode = true
    },
    disableSyncSystemDarkMode() {
      this.syncSystemDarkMode = false
    },
    enableDarkMode() {
      this.darkMode = true
    },
    disableDarkMode() {
      this.darkMode = false
    }
  }
})

