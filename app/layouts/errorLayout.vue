<template lang="pug">
  #__page(:class="{ 'dark-mode': $store.getters['localStorage/getDarkMode'] }")
    Filters
    Msg
    Header(:backButton='true')
    Nuxt.content
</template>

<script>
import Header from '~/components/Header.vue'

export default {
  name: 'ErrorLayout',
  components: {
    Header
  }
}
</script>

<style lang="sass">
// 'inherits' styles from default because of scope
</style>
