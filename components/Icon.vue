<template lang="pug">
component.icon(:is="icons[props.name]")
</template>

<script setup lang="ts">
import { filename } from 'pathe/utils'

const props = defineProps({
  name: {
    type: String,
    required: true
  }
})

const glob = import.meta.glob('~/assets/icons/**/*.svg',  { eager: true })

const icons = Object.fromEntries(
  Object.entries(glob).map(([key, value]) => [filename(key), value.default])
)
</script>

<style lang="sass">
.icon
  flex: 0 0 auto
  display: flex
  flex-direction: column
  height: var(--icon-size)
  width: var(--icon-size)
  padding: 0
  margin: 0
  // color: var(--color-dark)
  // fill: currentColor !important
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
</style>
