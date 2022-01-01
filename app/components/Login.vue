</template>
<template lang="pug">
  .login
    NuxtLink(v-if='$auth.loggedIn' :to='localePath("account")')
      img.tumb(v-if='$auth.user.picture' :src='$auth.user.picture')
      span(v-else) {{ userName }}
    Icon(v-else name='ui/login' @click.native='login')
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    userName () {
      const str = this.$auth.user.name
      const acronym = str.split(' ').map(x => x[0]).join('')
      return acronym.toUpperCase()
    }
  },
  methods: {
    login () {
      this.$store.dispatch('user/login')
      this.$auth.loginWith('auth0')
    }
  }
})
</script>

<style lang="sass" scoped>
  .login
    display: flex
    align-content: center
    justify-content: center
    transition: all var(--animation-speed) var(--animation-ease)
    span, .tumb
      display: flex
      align-self: center
      justify-self: center
      height: var(--icon-size)
      width: var(--icon-size)
      border-radius: 100%
      background: var(--color-light-secondary)
      font-size: 0.6rem
      font-weight: bold
      color: var(--color-dark)
      text-transform: uppercase
      text-decoration: none
      transition: inherit
      margin-left: 0.2rem
    .nuxt-link-exact-active

    .icon
      padding: 0.1rem
      margin-left: 0.2rem
</style>
