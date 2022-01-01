export const state = () => ({
  darkMode: false,
  cookieConsent: false
})

export const getters = {
  getDarkMode: (state) => {
    return state.darkMode
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
  toggleDarkMode: (state) => {
    state.darkMode = !state.darkMode

    // Set Adress bar color
    const body = document.querySelector('body')
    const meta = document.querySelector('meta[name="theme-color"]')
    if (state.darkMode) {
      body.classList.add('dark-mode')
    } else {
      body.classList.remove('dark-mode')
    }
    const barColor = getComputedStyle(body).getPropertyValue('--color-light')
    meta.setAttribute('content', barColor)
    console.log(barColor)
  }
}
