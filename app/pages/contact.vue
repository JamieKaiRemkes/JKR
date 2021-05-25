<i18n lang="yaml">
en:
  title: "Send me a message!"
  paragraph: "You want to continue our journey together? Maybe you just have a general question, don't be afraid! Please send me a message or give me a call, I'll get back to you as quickly as possible!"
nl:
  title: "Stuur mij een bericht!"
</i18n>

<template lang="pug">
  .container
    .contact
      h1.title {{ $t('title') }}
      p.paragraph {{ $t('paragraph') }}
      Button.mail(text='Mail me' :href='`mailto:${mailAdress}`')
      Button.call(text='Call me' :href='`tel:${phoneNumber}`')
      .plane
</template>

<script>
export default {
  nuxtI18n: {
    paths: {
      en: '/contact',
      nl: '/contact'
    }
  },
  data () {
    return {
      phoneNumber: process.env.CONTACT_PHONE,
      mailAdress: process.env.CONTACT_MAIL
    }
  },
  head () {
    return {
      title: this.$t('title')
    }
  }
}
</script>

<style lang="sass" scoped>
  .container
    display: flex
    .contact
      flex: 1 1 100%
      display: grid
      grid-template-areas: 'title title .' 'paragraph paragraph .' 'mail call .' 'plane plane plane'
      grid-template-columns: minmax(auto, 20rem) minmax(auto, 20rem) 1fr
      grid-template-rows: auto auto auto 1fr
      grid-gap: var(--ui-margin-y) var(--ui-margin-x)
      +contain
      +padx
      +xs
        grid-template-areas: 'title title' 'paragraph paragraph' 'mail call' 'plane plane'
        grid-template-columns: 1fr 1fr
      .title
        grid-area: title
      .paragraph
        grid-area: paragraph
      .mail
        grid-area: mail
      .call
        grid-area: call
      .plane
        grid-area: plane
        background-image: url('~assets/images/backgrounds/contact.gif')
        background-repeat: no-repeat
        background-position: center
        background-size: contain
</style>
