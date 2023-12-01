<template lang="pug">
#__page(:class="{ 'dark-mode': store.getDarkMode }")
  Filters
  Msg
  Header(:backButton='true')
  Nuxt.content
</template>

<script setup lang="ts">
const store = useLocalStore()
</script>

<style lang="sass">
// 'inherits' styles from default because of scope
</style>
