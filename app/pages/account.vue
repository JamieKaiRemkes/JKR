<i18n lang='yaml'>
  nl:
    logout: "Logout"
  en:
    logout: "Logout"
</i18n>

<template lang="pug">
  .accountpage
    .container
      h1 Welcome to your account
      Button.cta(@click.native='$router.push({path: localePath("logout")})' :text='$t("logout")')
</template>

<style lang="sass" scoped>
  .accountpage
    .container
      +contain
      +padx
</style>
