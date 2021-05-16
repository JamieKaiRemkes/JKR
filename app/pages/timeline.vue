<i18n lang="yaml">
en:
  page_title: "See how time passed from my perspective."
</i18n>

<template lang="pug">
  .timeline
    .moments
      .start
        h2 {{ $t('page_title') }}
      .moment(v-for='(moment, i) in moments')
        h4 {{ $t(moment.title) }}
        img(:src='moment.img')
        h6 {{ $d(moment.date) }}
</template>

<script>
export default {
  data () {
    return {
      moments: [
        {
          title: 'moments_title_birth',
          date: new Date(),
          img: require('~/assets/images/moments/birth.png')
        },
        {
          title: 'moments_title_crazy',
          date: new Date(),
          img: require('~/assets/images/moments/crazy.png')
        },
        {
          title: 'moments_title_birth',
          date: new Date(),
          img: require('~/assets/images/moments/birth.png')
        },
        {
          title: 'moments_title_crazy',
          date: new Date(),
          img: require('~/assets/images/moments/crazy.png')
        },
        {
          title: 'moments_title_birth',
          date: new Date(),
          img: require('~/assets/images/moments/birth.png')
        },
        {
          title: 'moments_title_crazy',
          date: new Date(),
          img: require('~/assets/images/moments/crazy.png')
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
  .timeline
    display: grid
    .moments
      display: grid
      grid-auto-flow: column
      grid-gap: var(--ui-margin-y) var(--ui-margin-x)
      +pady
      +animate(slide-in-left, 4)
      // Scroll behavior and snapping
      overflow-x: auto
      overflow-y: hidden
      scroll-snap-type: x mandatory
      // Get side padding while scolling
      &::after
        content: ''
        width: 1px
      .start
        scroll-snap-align: none start
        padding-left: var(--ui-margin-x)
      .moment
        position: relative
        display: grid
        // Align scroll snapping
        scroll-snap-align: none center
        // Set max width soo it won't be to big while scrolling
        max-width: calc( 100vw - var(--ui-margin-x) * 2 )
        width: 100%
        max-height: 100vh
        &:nth-of-type(odd)
          grid-column: span 1
          grid-row: span 1
          align-self: start
        &:nth-of-type(even)
          grid-column: span 1
          grid-row: span 1
          align-self: end
        // Add the time 'line'
        &::after
          content: ''
          align-self: center
          position: absolute
          top: 50%
          left: 50%
          height: 100vh
          width: 0.2rem
          background: var(--color-dark)
          z-index: -1
        img
          width: 100%
          object-fit: contain
          overflow: hidden
          filter: grayscale(1) sepia(0.2)
          transition: all var(--animation-speed) var(--animation-curve)
          &:hover
            filter: grayscale(0)
</style>
