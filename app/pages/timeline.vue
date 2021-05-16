<i18n lang="yaml">
en:
  page_title: "See how time passed from my perspective."
  moments_title_birth: "My birth."
  moments_title_crazy: "First time some crazy shinned through."
  moments_title_pirate: "The time I wanted to be a pirate."
  moments_title_walk: "The first (and only) time I walked 30km for four days."
  moments_title_robot: "My first experience with robotics."
  moments_title_theatre: "The first time I had a lead role."
  moments_title_diploma: "Getting my highschool diploma."
  moments_title_study: "Enjoying the student life."
  moments_title_hack: "'Hacking' my first smart home gadgets."
  moments_title_camera: "Spending all my money on a new hobby."
  moments_title_love: "Meeting the love of my life."
  moments_title_app: "Creating my first app as a freelancer."
  moments_title_infomercial: "Making my first infomercial."
</i18n>

<template lang="pug">
  .timeline
    .moments
      .start
        h2.title {{ $t('page_title') }}
        Socials
      .moment(v-for='(moment, i) in moments')
        h4 {{ $t(moment.title) }}
        img(:src='moment.img')
        h6 {{ $d(moment.date) }}
</template>

<script>
import Socials from '~/components/Socials'
export default {
  nuxtI18n: {
    paths: {
      en: '/timeline',
      nl: '/tijdlijn'
    }
  },
  components: {
    Socials
  },
  data () {
    return {
      moments: [
        {
          title: 'moments_title_birth',
          date: new Date(1999, 5, 2),
          img: require('~/assets/images/moments/birth.png')
        },
        {
          title: 'moments_title_crazy',
          date: new Date(2006, 3, 20),
          img: require('~/assets/images/moments/crazy.png')
        },
        {
          title: 'moments_title_pirate',
          date: new Date(2007, 7, 26),
          img: require('~/assets/images/moments/pirate.gif')
        },
        {
          title: 'moments_title_walk',
          date: new Date(2011, 6, 20),
          img: require('~/assets/images/moments/walk.gif')
        },
        {
          title: 'moments_title_robot',
          date: new Date(2011, 7, 1),
          img: require('~/assets/images/moments/robot.png')
        },
        {
          title: 'moments_title_theatre',
          date: new Date(2011, 7, 23),
          img: require('~/assets/images/moments/theatre.png')
        },
        {
          title: 'moments_title_diploma',
          date: new Date(2016, 6, 14),
          img: require('~/assets/images/moments/diploma.png')
        },
        {
          title: 'moments_title_study',
          date: new Date(2016, 8, 15),
          img: require('~/assets/images/moments/study.png')
        },
        {
          title: 'moments_title_hack',
          date: new Date(2016, 11, 4),
          img: require('~/assets/images/moments/hack.gif')
        },
        {
          title: 'moments_title_love',
          date: new Date(2018, 6, 7),
          img: require('~/assets/images/moments/love.png')
        },
        {
          title: 'moments_title_app',
          date: new Date(2019, 5, 5),
          img: require('~/assets/images/moments/app.gif')
        },
        {
          title: 'moments_title_infomercial',
          date: new Date(2019, 2, 31),
          img: require('~/assets/images/moments/infomercial.gif')
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
  .timeline
    display: grid
    .start
      position: relative
      .title
        +animate(slide-in-left, 2)
    .moments
      display: grid
      grid-auto-flow: column
      grid-template-columns: repeat(auto-fit, minmax(auto, calc( 100vw - var(--ui-margin-x) * 2 )))
      grid-gap: var(--ui-margin-y) var(--ui-margin-x)
      // Scroll behavior and snapping
      overflow-x: auto
      overflow-y: hidden
      +sm
        scroll-snap-type: x mandatory
      // Get side padding while scolling
      &::after
        content: ''
        width: 1px
      .start
        display: grid
        scroll-snap-align: none start
        padding-left: var(--ui-margin-x)
      .moment
        position: relative
        display: flex
        flex-direction: column
        padding: 0 0 var(--ui-margin-y) 0
        +animate(slide-in-left, 3)
        // Align scroll snapping
        scroll-snap-align: none center
        // Set min/max width soo it won't be to big while scrolling
        max-width: calc( 100vw - var(--ui-margin-x) * 2 )
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
          flex: 1 0 100%
          // Set max height to contain img
          max-height: 60vh
          filter: grayscale(1)
          transition: all var(--animation-speed) var(--animation-curve)
          &:hover
            filter: grayscale(0)
</style>
