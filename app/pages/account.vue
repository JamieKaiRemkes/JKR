<i18n lang='yaml'>
  nl:
    title: "Welkom bij jouw account"
    text: "Deze pagina word binnekort bijgewerkt met persoonlijke instellingen, een chat functie en meer... Voor nu alvast badankt voor het registreren en houd deze pagina in de gate voor een update!"
    logout: "Log uit"
  en:
    title: "Welcome to your account"
    text: "This page will be updated shortly with personal settings, a chat and a lot more... For now, thanks for making an account and keep your eye out for updates!"
    logout: "Logout"
</i18n>

<template lang="pug">
  .accountpage
    .container
      h1 {{ $t('title') }}
      p {{ $t('text') }}
      Button.danger(@click.native='$router.push({path: localePath("logout")})' :text='$t("logout")')
</template>

<style lang="sass" scoped>
  .accountpage
    .container
      display: grid
      grid-gap: var(--ui-margin-y)
      +contain
      +padx
</style>
