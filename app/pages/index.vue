<i18n lang="yaml">
en:
  welcome_msg: 'Welcome to my site!'
nl:
  welcome_msg: 'Welkom op mijn site!'
</i18n>

<template lang="pug">
  .container
    h1 {{ $t('welcome_msg') }}
    h2 {{ $t('welcome_msg') }}
    h3 {{ $t('welcome_msg') }}
    h4 {{ $t('welcome_msg') }}
    h5 {{ $t('welcome_msg') }}
    h6 {{ $t('welcome_msg') }}
    p {{ $t('welcome_msg') }}
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
.container
  flex: 1 0 100%
  display: flex
  flex-direction: column
  align-content: center
  justify-content: center
</style>
