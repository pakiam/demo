<template>
  <div class="page-program">
    <Program :program="program" />
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
  },
  components: {
    Program,
  },
  methods: {},
  mounted () {
    console.log('ALLO!')
  },
}
</script>

<style langs="scss"></style>
