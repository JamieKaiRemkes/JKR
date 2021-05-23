<template lang="pug">
  .img
    .fracture(v-for='(fracture, i) in fractures' :key='i' :style='computeRandomFractureCSS()')
    .filter(v-html="require(`../assets/filters/glass.svg?raw`)")
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      required: true
    },
    fractures: {
      type: Number,
      required: false,
      default: 3
    }
  },
  data () {
    return {

    }
  },
  computed: {
    image () {
      return this.path ? this.path : false
    }
  },
  methods: {
    computeRandomFractureCSS () {
      return {
        // Transform with a range of 0% to 1%
        '--translate-y': `${Math.floor(Math.random() * 2)}%`,
        '--translate-x': `${Math.floor(Math.random() * 2)}%`,
        // Scale with a range of 0.9 and 1.0
        '--scale': (Math.floor(Math.random() * 10) + 91) / 100,
        // Compute polygon with 3 to 6 number of sides
        '--polygon': this.computeRandomPolygon(Math.floor(Math.random() * 6) + 3),
        // Set background image
        'background-image': 'url(' + this.path + ')'
      }
    },
    computeRandomPolygon (points) {
      let polygon = `${Math.floor(Math.random() * 101)}% ${Math.floor(Math.random() * 101)}%`
      for (let i = 0; i < points; i++) {
        const newpoint = `${Math.floor(Math.random() * 101)}% ${Math.floor(Math.random() * 101)}%`
        polygon = polygon + ',' + newpoint
      }
      return polygon
    }
  }
}
</script>

<style lang="sass">
  .img
    position: relative
    // display: inline-block
    // overflow: hidden
    .fracture
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0
      background-position: center
      background-size: cover
      background-repeat: no-repeat
      // background-color: white
      // mix-blend-mode: screen
      // opacity: 0.5
      // filter: grayscale(1)
      // transform: translate(var(--translate-y), var(--translate-x)) scale(var(--scale))
      // clip-path: polygon(var(--polygon))
      filter: url(#glitch)
      // transform: rotate3d(360, 120, -90, 60deg) rotateZ(-30deg)
      // Make the first fracture always be on top left
      &:first-of-type
        clip-path: polygon(0% 0%,40% 0%,100% 44%,50% 100%,0% 75%,6% 43%)
        transform: none
        // filter: none
        filter: url(#glitch)
      &:nth-of-type(2)
        clip-path: polygon(42% 2%,100% 0%,99% 51%,89% 87%,33% 83%,61% 32%)
        transform: none
        filter: none
      &::before
        content: ''
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: 0
        background: inherit
        filter: none
        z-index: -1

</style>
