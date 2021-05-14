<i18n lang="yaml">
en:
  title: "Hi, I'm Jamie Kai Remkes!"
  subtitle: "A nerd, film enthusiast and all-round creative."
nl:
  title: "Hi, ik ben Jamie Kai Remkes!"
  subtitle: "Een nerd, film liefhebber en all-round creatieveling."
</i18n>

<template lang="pug">
  .home
    .container.img(:style="{ 'background-image': 'url(' + require('~/assets/images/backgrounds/home.png') + ')' }")
      h2.title {{ $t('title') }}
      h4.subtitle {{ $t('subtitle') }}

</template>

<script>
export default {
  nuxtI18n: {
    paths: {
      en: '',
      nl: ''
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
      grid-template-areas: 'title .' 'subtitle .' '. .'
      grid-auto-columns: 1.6fr minmax(10rem, 1fr)
      grid-auto-rows: auto auto minmax(10rem, 1fr)
      background-size: contain
      background-position: right bottom
      background-repeat: no-repeat
      +padx
      +xs
        background-position: center bottom
        grid-template-areas: 'title' 'subtitle' '.'
      .title
        grid-area: title
        +xs
          text-align: center
      .subtitle
        grid-area: subtitle
        +xs
          text-align: center
</style>
