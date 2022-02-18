export const state = () => ({
  darkMode: false,
  syncSystemDarkMode: true,
  cookieConsent: false
})

export const getters = {
  getDarkMode: (state) => {
    return state.syncSystemDarkMode ? window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches : state.darkMode
  },
  getSyncSystemDarkMode: (state) => {
    return state.syncSystemDarkMode
  },
  getCookieConsent: (state) => {
    return state.cookieConsent
  }
}

export const mutations = {
  acceptCookies: (state) => {
    state.cookieConsent = true
  },
  disableCookies: (state) => {
    state.cookieConsent = false
  },
  enableSyncSystemDarkMode: (state) => {
    state.syncSystemDarkMode = true
  },
  disableSyncSystemDarkMode: (state) => {
    state.syncSystemDarkMode = false
  },
  enableDarkMode: (state) => {
    state.darkMode = true
  },
  disableDarkMode: (state) => {
    state.darkMode = false
  }
}
