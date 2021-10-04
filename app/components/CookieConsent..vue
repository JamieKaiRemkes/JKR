<i18n lang='yaml'>
en:
  cookiemsg: "Like most apps we analyze app usage to help optimize your experience. You can find more on how we do this in our {0}."
  cookiepolicy: "privacy policy"
  accept: "Accept"
  decline: "Decline"
nl:
  cookiemsg: "Zoals de meeste apps analyseren wij app gebruik om uw ervaring te verbeteren. Vind meer over hoe wij dit doen in onze {0}."
  cookiepolicy: "privacy verklaring"
  accept: "Accepteren"
  decline: "Afwijzen"
</i18n>

<template lang="pug">
  .cookie-consent
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'CookieConsent',
  created () {
    this.init()
  },
  methods: {
    init () {
      if (!this.$store.getters['localStorage/getCookieConsent']) {
        this.$nuxt.$emit('msg', {
          i18n: this.$i18n.messages,
          icon: 'ui/cookie',
          text: 'cookiemsg',
          fills: [
            {
              text: 'cookiepolicy',
              to: 'privacy-policy'
            }
          ],
          options: [
            {
              text: 'accept',
              callback: this.acceptCookies
            },
            {
              text: 'decline',
              callback: this.disableCookies
            }
          ]
        })
      }
    },
    disableCookies () {
      this.$store.commit('localStorage/disableCookies')
    },
    acceptCookies () {
      this.$store.commit('localStorage/acceptCookies')
    }
  }
})
</script>

<style lang="sass" scoped>
  .cookie-consent
    display: none
</style>
