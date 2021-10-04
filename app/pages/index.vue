<i18n lang="yaml">
en:
  title: "Hi, I'm Jamie Kai Remkes!"
  subtitle: "A nerd, film enthusiast and all-round creative."
nl:
  title: "Hi, ik ben Jamie Kai Remkes!"
  subtitle: "Een nerd, film liefhebber en all-round creativeling."
</i18n>

<template lang="pug">
  .home
    .container
      h1.title {{ $t('title') }}
      h2.subtitle {{ $t('subtitle') }}
      .img(:style="{ 'background-image': 'url(' + require('~/assets/images/backgrounds/home.png') + ')' }")
      Socials
</template>

<script>
import Socials from '~/components/Socials'
export default {
  name: 'Index',
  nuxtI18n: {
    paths: {
      en: '',
      nl: ''
    }
  },
  components: {
    Socials
  },
  head () {
    return {
      title: this.$t('title')
    }
  }
}
</script>

<style lang="sass" scoped>
  .home
    flex: 1 1 auto !important
    position: relative
    display: flex
    .container
      position: relative
      flex: 1 0
      display: grid
      grid-template-areas: 'title img' 'subtitle img' 'socials img '
      grid-auto-columns: minmax(10rem, 1fr) 1fr
      grid-auto-rows: auto auto minmax(10rem, 1fr)
      +padx
      +contain
      +xs
        grid-template-areas: 'title title' 'subtitle subtitle' 'socials img'
        grid-auto-columns: auto 1fr
      .title
        grid-area: title
        +animate(slide-in-right, 2)
      .subtitle
        grid-area: subtitle
        +animate(slide-in-right, 3)
      .img
        grid-area: img
        background-size: contain
        background-position: center bottom
        background-repeat: no-repeat
        +animate(slide-in-up, 4)
        // Set some padding for the backgound image
        margin: var(--ui-margin-y) var(--ui-margin-x) 0 var(--ui-margin-y)
      .socials
        grid-area: socials
</style>
