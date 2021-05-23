<template lang='pug'>
  .container
    //- .three(v-if='this.renderer' v-html='this.renderer.domElement.outerHTML')
</template>

<script>
import * as Three from 'three'

export default {
  name: 'ThreeTest',
  data () {
    return {
      container: null,
      camera: null,
      scene: null,
      renderer: null,
      mesh: null
    }
  },
  methods: {
    init () {
      this.container = this.$el

      this.camera = new Three.PerspectiveCamera(70, this.container.offsetWidth / this.container.offsetHeight, 0.01, 10)
      this.camera.position.z = 1

      this.scene = new Three.Scene()

      const geometry = new Three.BoxGeometry(0.2, 0.2, 0.2)
      const material = new Three.MeshNormalMaterial()

      this.mesh = new Three.Mesh(geometry, material)
      this.scene.add(this.mesh)

      this.renderer = new Three.WebGLRenderer({ antialias: true, alpha: true })
      this.renderer.setSize(this.container.offsetWidth, this.container.offsetHeight)
      this.container.appendChild(this.renderer.domElement)
    },
    animate () {
      requestAnimationFrame(this.animate)
      this.mesh.rotation.x += 0.01
      this.mesh.rotation.y += 0.02
      this.resizeCanvas()
      this.renderer.render(this.scene, this.camera)
    },
    resizeCanvas () {
      const height = this.container.offsetHeight
      const width = this.container.offsetWidth

      this.renderer.setSize(width, height)
      this.camera.aspect = width / height
      this.camera.updateProjectionMatrix()
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.init()
      this.animate()
    })
  }
}
</script>

<style lang="sass">
  .container
    position: relative
    flex: 1 1 100%
    width: 100%
    height: 100%
    canvas
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0
      display: block
      height: 100% !important
      width: 100% !important
</style>
