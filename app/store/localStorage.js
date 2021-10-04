export const state = () => ({
  cookieConsent: false
})

export const getters = {
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
  }
}
