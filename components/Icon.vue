<template lang="pug">
component.icon(:is="is")
</template>

<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true
  }
})

const is = computed(() => {
  const path = `../assets/icons/${props.name}.svg?component`;

  return defineAsyncComponent(() => import(path))
})
</script>

<style lang="sass">
.icon
  flex: 0 0 auto
  display: flex
  flex-direction: column
  height: var(--icon-size)
  width: var(--icon-size)
  color: var(--color-dark)
  &.s
    height: calc(var(--icon-size) * 0.8)
    width: calc(var(--icon-size) * 0.8)
  &.m
    height: calc(var(--icon-size) * 3)
    width: calc(var(--icon-size) * 3)
  &.l
    height: calc(var(--icon-size) * 8)
    width: calc(var(--icon-size) * 8)
  &.overwritefill
    svg *
      fill: currentColor
  svg
    flex: 1 0
    height: 100%
    width: 100%
    fill: currentColor !important
</style>
