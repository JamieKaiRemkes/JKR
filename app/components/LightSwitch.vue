<template lang="pug">
  .lightswitch
    label {{ $store.getters["localStorage/getDarkMode"] }}
      input(type='checkbox' :checked='$store.getters["localStorage/getDarkMode"]' @click='$store.commit("localStorage/toggleDarkMode")')
</template>

<style lang="sass" scoped>
  .lightswitch
    .label
      height: var(--icon-size)
      width: var(--icon-size)
      background: var(--color-light-secondary)
    input
      display: none
</style>
