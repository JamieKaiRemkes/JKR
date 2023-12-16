<template lang="pug">
NuxtLayout
</template>

<script setup lang="ts">
const colorMode = useColorMode()

onMounted(() =>
  useHead({
    title: computed(() => new Date().toDateString()),
    meta: [
      {
        name: 'theme-color',
        content: computed(() => colorMode.value === 'dark' || colorMode.unknown ? '111111' : '#ffffff')
      },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: computed(() => colorMode.value === 'dark' || colorMode.unknown ? '111111' : '#ffffff')
      }
    ]
  })
)
</script>
