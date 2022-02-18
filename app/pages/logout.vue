<template lang="pug">
  .logout
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  async created () {
    await this.$auth.logout()
  }
})
</script>
