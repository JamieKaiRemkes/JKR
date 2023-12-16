export default defineNuxtPlugin(async ( nuxtApp ) => {
  nuxtApp.hook('page:finish', async () => {
    await nuxtApp.$i18n.finalizePendingLocaleChange()
  })

  // Optional: wait for locale before scrolling for a smoother transition
  nuxtApp.$router.options.scrollBehavior = async (to, from, savedPosition) => {
    // Make sure the route has changed
    if (to.name !== from.name) {
      await app.i18n.waitForPendingLocaleChange()
    }
    return savedPosition || { x: 0, y: 0 }
  }
})
