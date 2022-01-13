<template>
  <div class="page-program">
    <Program :program="program" :isInCart="isInCart" />
  </div>
</template>

<script>
import Program from '../components/program/Program.vue'

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
    Program,
  },
  methods: {},
  mounted () {
  },
}
</script>

<style langs="scss"></style>
