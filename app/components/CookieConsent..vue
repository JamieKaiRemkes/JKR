<i18n lang='yaml'>
en:
  msg: "Accept cookies?"
  accept: "Accept"
  decline: "Decline"
nl:
  msg: "Accepteer cookies?"
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
    if (!this.$store.getters['localStorage/getCookieConsent']) {
      this.$nuxt.$emit('msg', {
        text: `🍪 ${this.$t('msg')}`,
        options: [
          {
            text: `${this.$t('accept')}`,
            callback: this.acceptCookies
          },
          {
            text: `${this.$t('decline')}`,
            callback: this.disableCookies
          }
        ]
      })
    }
  },
  methods: {
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
