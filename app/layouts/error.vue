<i18n lang="yaml">
en:
  error_message_not_found: "Whoops, this page doesn't seems to exist."
  error_message_unknown: "Whoops, something must have gone wrong."
  subtitle: "We're experiencing some technical difficulties..."
nl:
  error_message_not_found: "Oeps, deze pagina lijkt niet te bestaan."
  error_message_unknown: "Oeps, er is iets fout gegaan."
  subtitle: "We ervaren momenteel wat technische ongemakken..."
</i18n>

<template lang="pug">
  .error(v-touch:swipe.right='back')
    .container
      h1.title {{ $t(title) }}
      h2.subtitle {{ $t('subtitle') }}
      .img(:style="{ 'background-image': 'url(' + require('~/assets/images/backgrounds/error.png') + ')' }")
      Socials(:shareButton='false')
</template>

<script>
import Socials from '~/components/Socials'

export default {
  components: {
    Socials
  },
  layout: 'errorLayout',
  props: {
    error: {
      type: Object,
      required: false,
      default: Object
    }
  },
  head () {
    return {
      title: this.$t(this.title)
    }
  },
  nuxtI18n: {
    paths: {
      en: 'whoops',
      nl: 'oeps'
    }
  },
  computed: {
    title () {
      return this.error.statusCode === 404 ? 'error_message_not_found' : 'error_message_unknown'
    }
  },
  methods: {
    back () {
      this.$router.back()
    }
  }
}
</script>

<style lang="sass" scoped>
  .error
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
