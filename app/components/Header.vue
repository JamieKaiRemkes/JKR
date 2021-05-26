<i18n lang="yaml">
en:
  page_name_home: "Home"
  page_name_timeline: "Timeline"
  page_name_project: "Projects"
  page_name_contact: "Contact"
nl:
  page_name_home: "Thuis"
  page_name_timeline: "Tijdlijn"
  page_name_project: "Projecten"
  page_name_contact: "Contact"
</i18n>

<template lang="pug">
  header
    Icon.back(v-if='backButton' name='ui/back' :class='{hide: mobileMenuOpen}' @click.native='$router.back')
    Logo.logo(v-else :class='{hide: mobileMenuOpen}')
    nav(:class='{hide: !mobileMenuOpen}')
      ul
        li(v-for='(item, i) in menu' :key='i')
          NuxtLink(:to='localePath(item.pathName)') {{$t(item.pathTitle)}}
    Burger.burger(name='menu' :menuOpen='mobileMenuOpen' @click.native='mobileMenuOpen = !mobileMenuOpen')
    .slot(v-if='hasSlot')
      slot
</template>

<script>
import Logo from '~/components/Logo.vue'
import Burger from '~/components/Burger.vue'

export default {
  components: {
    Logo,
    Burger
  },
  props: {
    backButton: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      menu: [
        {
          pathTitle: 'page_name_home',
          pathName: 'index'
        },
        {
          pathTitle: 'page_name_timeline',
          pathName: 'timeline'
        },
        {
          pathTitle: 'page_name_project',
          pathName: '/projects'
        },
        {
          pathTitle: 'page_name_contact',
          pathName: '/contact'
        }
      ],
      mobileMenuOpen: false
    }
  },
  computed: {
    hasSlot () {
      return !!this.$slots.default || !!this.$scopedSlots.default
    }
  },
  watch: {
    $route () {
      this.mobileMenuOpen = false
    }
  }
}
</script>

<style lang="sass" scoped>
  header
    position: sticky
    top: 0
    left: 0
    right: 0
    bottom: 0
    display: grid
    grid-auto-flow: column
    grid-template-areas: 'logo . nav slot'
    grid-template-columns: auto 1fr auto auto
    padding: var(--ui-margin-y) var(--ui-margin-x)
    transition: all var(--animation-speed) var(--animation-curve)
    z-index: 100
    +contain
    +sm
      grid-template-areas: 'logo . nav burger slot'
      grid-template-columns: auto 1fr auto auto auto
    .logo, .back
      grid-area: logo
      height: var(--icon-size)
      width: var(--icon-size)
      margin-right: var(--ui-margin-x)
      transition: all var(--animation-speed) var(--animation-curve)
      +animate(slide-in-down)
      +sm
        &.hide
          width: 0
          opacity: 0
          margin-right: 0
    nav
      grid-area: nav
      display: flex
      flex-direction: row
      align-items: center
      width: 100%
      overflow: auto
      transition: all var(--animation-speed) var(--animation-curve)
      +animate(slide-in-left, 1)
      +sm
        &.hide
          // Because apple cant figure out how to deal with 0px widths this must be an positive int
          width: 1px
          opacity: 0
      ul
        display: flex
        flex-direction: row
        padding: 0
        margin: 0
        li
          list-style: none
          margin-right: var(--ui-margin-x)
          &:last-of-type
            margin-right: 0
          a
            color: var(--color-dark)
            font-weight: var(--font-weight-bold)
            text-decoration: none
            &.nuxt-link-exact-active
              color: var(--color-secondary)
    .burger
      grid-area: burger
      align-self: center
      display: none
      margin-left: var(--ui-margin-x)
      +animate(slide-in-left, 2)
      +sm
        display: block
    .slot
      grid-area: slot
      margin-left: var(--ui-margin-x)
      +animate(slide-in-left, 3)
</style>
