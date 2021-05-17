<i18n lang="yaml">
en:
  page_title: "See how time passed from my perspective."
  page_intro: "It's not easy to get to know someone in a small amount of time. Especially if you are just reading about them. For me, the best way to get to know someone new is to go for a walk together. So let's walk, talk and I'll tell you about some of my best moments."
  start_journey: "Start our journey"
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
        h3.title {{ $t('page_title') }}
        p.intro {{ $t('page_intro') }}
        Button(:text="$t('start_journey')" @click.prevent.native='scrollToFirstMoment')
        Socials
      .moment(v-for='(moment, i) in moments')
        h5.title {{ $t(moment.title) }}
        .img
          img(:src='moment.img')
        h6.date {{ $d(moment.date) }}
</template>

<script>
import Socials from '~/components/Socials'
import Button from '~/components/Button'

export default {
  nuxtI18n: {
    paths: {
      en: '/timeline',
      nl: '/tijdlijn'
    }
  },
  components: {
    Socials,
    Button
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
  },
  mounted () {
    // Code that will run only after the
    // entire view has been rendered
    const options = {
      root: this.$el.querySelector('.moments'),
      rootMargin: '10px',
      threshold: 0.8
    }
    this.$nextTick(function () {
      const observer = new IntersectionObserver(this.viewportHandler, options)
      const elements = this.$el.querySelectorAll('.moment')
      for (const elm of elements) {
        observer.observe(elm)
      }
    })
  },
  methods: {
    viewportHandler (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate')
          }, 100)
        } else {
          setTimeout(() => {
            entry.target.classList.remove('animate')
          }, 100)
        }
      })
    },
    scrollToFirstMoment () {
      const el = this.$el.querySelector('.moment')
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
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
      grid-template-columns: repeat(auto-fit, minmax(auto, calc( 100vw - var(--ui-margin-x) * 2 )))
      grid-template-rows: 1fr
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
        grid-template-rows: auto auto auto 1fr
        grid-gap: var(--ui-margin-y)
        scroll-snap-align: none start
        padding-left: var(--ui-margin-x)
        .title
          +animate(slide-in-left, 2)
        .intro
          +animate(slide-in-left, 3)
        .btn
          +animate(slide-in-left, 4)
          justify-self: start
          // Display only on mobile because if screen is bigger first moment is already visible
          display: none
          +xs
            display: block
        .socials
          grid-row: -1
      .moment
        position: relative
        display: flex
        flex-direction: column
        padding: 0 0 var(--ui-margin-y) 0
        +animate(slide-in-left, 4)
        margin: var(--ui-margin-y) var(--ui-margin-x)
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
          align-self: center
        // Add the time 'line'
        &::after
          content: ''
          align-self: center
          position: absolute
          top: calc( 100% - var(--ui-margin-y) )
          left: 50%
          height: 100vh
          width: 0.2rem
          border-radius: 0.2rem
          background: var(--color-dark)
          z-index: -1
        // Animate on viewport entry
        &.animate
          .title
            +animate(slide-in-up)
          .img
            filter: grayscale(0)
            img
              +shadow(1)
          .date
            +animate(slide-in-down)
        .title
          padding-bottom: calc(var(--ui-margin-y) / 2)
          +animate(slide-out-down)
        .img
          filter: grayscale(1)
          transition: all calc(var(--animation-speed) * 3) var(--animation-curve)
          // To make .date appear behind .img
          z-index: 100
          img
            // Force img to size up
            min-width: 15rem
            width: auto
            max-width: 100%
            height: auto
            max-height: 100%
            border-radius: 0.4rem
        .date
          white-space: nowrap
          +animate(slide-out-up)
          padding-top: calc(var(--ui-margin-y) / 2)
</style>
