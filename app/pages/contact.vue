<i18n lang="yaml">
en:
  title: "Contact me."
  paragraph: "You want to continue our journey together? Maybe you just have a general question, don't be afraid! Please send me a message or give me a call, I'll get back to you as quickly as possible!"
  mail-me: "Send mail!"
  call-me: "Call me!"
nl:
  title: "Neem contact op."
  paragraph: "Wil jij samen verder? Misschien heb je gewoon een vraag, wees niet bang. Stuur mij een bericht of bel me. Dan neem ik zo spoedig mogenlijk contact met je op!"
  mail-me: "Stuur een mail!"
  call-me: "Bel mij!"
</i18n>

<template lang="pug">
  .container
    .contact
      h1.title {{ $t('title') }}
      p.paragraph {{ $t('paragraph') }}
      Button.mail(:text='$t("mail-me")' :href='`mailto:${mailAdress}`')
      Button.call(:text='$t("call-me")' :href='`tel:${phoneNumber}`')
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
      grid-template-areas: 'plane plane plane' 'title title .' 'paragraph paragraph .' 'mail call .'
      grid-template-columns: minmax(auto, 20rem) minmax(auto, 20rem) 1fr
      grid-template-rows: 1fr auto auto auto
      grid-gap: var(--ui-margin-y) var(--ui-margin-x)
      +contain
      +padx
      padding-bottom: var(--ui-margin-y)
      +xs
        grid-template-areas: 'plane plane' 'title title' 'paragraph paragraph' 'mail call'
        grid-template-columns: 1fr 1fr
        grid-template-rows: 1fr auto auto auto
      .title
        grid-area: title
        +animate(slide-in-right)
      .paragraph
        grid-area: paragraph
        +animate(slide-in-right, 2)
      .mail
        grid-area: mail
        +animate(slide-in-right, 4)
      .call
        grid-area: call
        +animate(slide-in-right, 3)
      .plane
        grid-area: plane
        background-image: url('~assets/images/backgrounds/contact.gif')
        background-repeat: no-repeat
        background-position: center
        background-size: contain
        +animate(slide-in-up, 3)
</style>
