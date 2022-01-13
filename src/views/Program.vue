<template>
  <div class="page-program">
    <ProgramPopup :program="program" :isInCart="isInCart" />
  </div>
</template>

<script>
import ProgramPopup from '../components/program/ProgramPopup.vue'

export default {
  name: 'PageProgram',
  props: {
    program: {
      type: Object,
      required: true,
    },
    isInCart: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    ProgramPopup,
  },
  methods: {},
  mounted () {
  },
}
</script>

<style langs="scss"></style>
