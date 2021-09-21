<i18n lang="yaml">
en:
  page_title: "Projects"
  project_title_printing: "3D printing and engeneering"
  project_title_code: "Code and software"
  project_title_film: "Film and photography"
nl:
  page_title: "Projecten"
</i18n>

<template lang="pug">
  .projects
    .contain
      .pagetitle
        h3.title {{ title }}
      .scroll
        .project(v-for="(project, i) in projects" :data-index='i')
          FracturedImg.tumb(:path='project.tumb')
          Button.more(text='More')
      Socials
      .pagination(:style='paginationOffset')
        .paralax
          Icon(name='ui/up' @click.native='previousProject').previous
          h6 {{(currentProjectIndex + 1)}} / {{projects.length}}
          Icon(name='ui/down' @click.native='nextProject').next
</template>

<script>
export default {
  nuxtI18n: {
    paths: {
      en: '/projects',
      nl: '/projecten'
    }
  },
  data () {
    return {
      title: '',
      projects: [
        {
          title: 'project_title_printing',
          tumb: require('~/assets/images/projects/3d.gif')
        },
        {
          title: 'project_title_code',
          tumb: require('~/assets/images/projects/code.gif')
        },
        {
          title: 'project_title_film',
          tumb: require('~/assets/images/projects/film.gif')
        }
      ],
      currentProjectIndex: 0,
      scroll: 0,
      scrollHeight: 0
    }
  },
  head () {
    return {
      title: this.$t('page_title')
    }
  },
  computed: {
    currentProjectTitle () {
      return this.projects[this.currentProjectIndex] ? this.$t(this.projects[this.currentProjectIndex].title) : this.$t('page_title')
    },
    paginationOffset () {
      let percentageScrolled = this.scroll / this.scrollHeight
      percentageScrolled = percentageScrolled * 100
      return {
        '--offset-y': percentageScrolled + '%'
      }
    }
  },
  beforeDestroy () {
    this.$el.querySelector('.scroll').removeEventListener('scroll', this.handleScroll)
  },
  mounted () {
    const options = {
      root: this.$el.querySelector('.scroll'),
      rootMargin: '10px',
      threshold: 0.8
    }
    // Code that will run only after the entire view has been rendered
    this.$nextTick(function () {
      // Create scroll handler
      this.$el.querySelector('.scroll').addEventListener('scroll', this.handleScroll)
      this.$el.addEventListener('resize', this.getScrollHeight)
      this.getScrollHeight()

      // Create observer
      const observer = new IntersectionObserver(this.viewportHandler, options)
      const elements = this.$el.querySelectorAll('.project')
      for (const elm of elements) {
        observer.observe(elm)
      }
    })
  },
  methods: {
    viewportHandler (entries) {
      entries.forEach((entry, i, a) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            this.currentProjectIndex = parseInt(entry.target.dataset.index)
            entry.target.classList.add('animate')
            // Start retyping project name
            this.retypeTitle()
          }, 100)
        } else {
          setTimeout(() => {
            entry.target.classList.remove('animate')
          }, 100)
        }
      })
    },
    handleScroll (e) {
      this.scroll = e.target.scrollTop
    },
    getScrollHeight () {
      const el = this.$el.querySelector('.scroll')
      this.scrollHeight = el.scrollHeight - el.offsetHeight
    },
    timeout (ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    },
    retypeTitle () {
      this.deleteTitle(this.typeTitle)
    },
    async deleteTitle (callback) {
      if (this.title.length > 0) {
        this.title = this.title.slice(0, -1)
        await this.timeout(10)
        this.deleteTitle(callback)
      } else {
        callback()
      }
    },
    async typeTitle () {
      if (this.title.length >= 0 && this.title.length < this.currentProjectTitle.length) {
        this.title = this.title + this.currentProjectTitle.charAt(this.title.length)
        await this.timeout(70)
        this.typeTitle()
      }
    },
    previousProject () {
      const previousprojectIndex = this.currentProjectIndex - 1
      this.goToProject(previousprojectIndex)
    },
    nextProject () {
      const nextProjectIndex = this.currentProjectIndex + 1
      this.goToProject(nextProjectIndex)
    },
    goToProject (i) {
      //  Get element
      const el = this.$el.querySelector(`div[data-index="${i}"].project`)
      // Check if element can be found
      if (el) {
        el.scrollIntoView()
      }
    }
  }
}
</script>

<style lang="sass" scoped>
  .projects
    flex: 1 1 100% !important
    position: relative
    display: flex
    flex-direction: column
    overflow: hidden
    .contain
      flex: 1 1 100%
      position: relative
      display: grid
      grid-template-areas: 'title scroll pagination' '. scroll pagination' 'socials scroll pagination'
      grid-template-columns: auto 1fr auto
      grid-template-rows: auto 1fr auto
      overflow: hidden
      overflow-x: visible
      +contain
      +padx
      // Add shadow border to the top of the scrollbox
      &::before, &::after
        content: ''
        position: absolute
        top: 0
        left: 0
        right: 0
        height: calc(var(--ui-margin-y) * 4)
        background: linear-gradient(var(--color-light), transparent)
        z-index: 10
      &::after
        top: unset
        bottom: 0
        background: linear-gradient(transparent, var(--color-light))
      .pagetitle
        grid-area: title
        white-space: nowrap
        writing-mode: vertical-lr
        // Push text slightly to the left and top to align text with logo and img
        transform: translate(-20%, -1px)
        // "Pull" grid area to the left
        margin-right: -1rem
        // Make space for curser
        padding-bottom: 0.4rem
        // Scroll if text is to large
        overflow-y: auto
        // Get on top of the shadow
        z-index: 100
        .title
          height: 100%
          &::after
            content: ''
            position: absolute
            left: 0
            right: 0
            bottom: 0
            height: 0.2rem
            background: var(--color-secondary)
            border-radius: 0.1rem
            +animate(blink, 4, infinite)
      .scroll
        grid-area: scroll
        flex: 1 1 100%
        position: relative
        display: flex
        flex-direction: column
        align-items: stretch
        overflow-y: auto
        overflow-x: visible
        margin: 0 var(--ui-margin-x)
        scroll-behavior: smooth
        // +sm
        scroll-snap-type: y mandatory
        .project
          scroll-snap-align: center center
          flex: 1 0 100%
          height: 100%
          width: 100%
          overflow: hidden
          display: grid
          grid-template-areas: '. . .' '. tumb .' '. more .' '. . .'
          grid-template-columns: var(--ui-margin-x) 1fr var(--ui-margin-x)
          grid-template-rows: calc(var(--ui-margin-y) * 2) 1fr auto calc(var(--ui-margin-y) * 2)
          // Needs padding to remain height 100%
          padding-bottom: var(--ui-margin-y)
          &.animate
            .tumb, .more
              opacity: 1
              transform: scale(1)
          .tumb
            grid-area: tumb
            margin-bottom: var(--ui-margin-y)
            opacity: 0
            transform: scale(0.95)
            transition: all var(--animation-speed) var(--animation-curve)
          .three
            grid-area: tumb
            // background: url('~assets/images/moments/pirate.gif')
          .more
            grid-area: more
            justify-self: end
            opacity: 0
            transform: scale(0.95)
            transition: all var(--animation-speed) var(--animation-curve)
      .socials
        grid-area: socials
        // Get on top of the shadow
        z-index: 100
      .pagination
        grid-area: pagination
        align-self: stretch
        display: grid
        grid-template-areas: '.' 'paralax' '.'
        grid-template-rows: 1fr auto 1fr
        transition: all 1s ease
        +animate(slide-in-left)
        // Get on top of the shadow
        z-index: 100
        .paralax
          transition: all 0.5s
          transform: translateY(calc((var(--offset-y) - 50%) * 3))
          grid-area: paralax
          display: grid
          grid-gap: var(--ui-margin-y)
          justify-items: center
</style>
