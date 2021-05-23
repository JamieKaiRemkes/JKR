<template lang='pug'>
  .container
    //- .three(v-if='this.renderer' v-html='this.renderer.domElement.outerHTML')
</template>

<script>
import * as Three from 'three'
<<<<<<< HEAD
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export default {
  name: 'ThreeTest',
  props: {
    img: {
      type: String,
      required: true
    }
  },
=======

export default {
  name: 'ThreeTest',
>>>>>>> 49a71e6 (Basic page setup)
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

<<<<<<< HEAD
      this.camera = new Three.PerspectiveCamera(70, this.container.offsetWidth / this.container.offsetHeight, 0.01, 1000)
      this.camera.position.z = 1

      this.scene = new Three.Scene()
      this.renderer = new Three.WebGLRenderer({ antialias: true, alpha: true })
      this.renderer.setSize(this.container.offsetWidth, this.container.offsetHeight)

      // Add controls
      const controls = new OrbitControls(this.camera, this.renderer.domElement)
      console.log(controls)

      // Ambient
      this.scene.add(new Three.AmbientLight(0xFFFFFF))
=======
      this.camera = new Three.PerspectiveCamera(70, this.container.offsetWidth / this.container.offsetHeight, 0.01, 10)
      this.camera.position.z = 1

      this.scene = new Three.Scene()
>>>>>>> 49a71e6 (Basic page setup)

      const geometry = new Three.BoxGeometry(0.2, 0.2, 0.2)
      const material = new Three.MeshNormalMaterial()

<<<<<<< HEAD
      // Add image to scene
      const planeGeometry = new Three.PlaneGeometry(60, 20, 1, 1)
      const texture = new Three.TextureLoader().load(this.img, (texture) => {
        texture.needsUpdate = true
        plane.scale.set(1.0, texture.image.height / texture.image.width, 1.0)
      })

      this.scene.background = texture
      // console.log(texture)
      // const imageAspect = texture.image.width / texture.image.height
      // console.log(imageAspect)

      const planeMaterial = new Three.MeshLambertMaterial({ map: texture })
      const plane = new Three.Mesh(planeGeometry, planeMaterial)
      plane.receiveShadow = true
      // rotate and position the plane
      // plane.rotation.x = -0.5 * Math.PI
      plane.position.set(0, 0, -5)
      // add the plane to the scene
      // this.scene.add(plane)

      this.mesh = new Three.Mesh(geometry, material)
      this.scene.add(this.mesh)

=======
      this.mesh = new Three.Mesh(geometry, material)
      this.scene.add(this.mesh)

      this.renderer = new Three.WebGLRenderer({ antialias: true, alpha: true })
      this.renderer.setSize(this.container.offsetWidth, this.container.offsetHeight)
>>>>>>> 49a71e6 (Basic page setup)
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
