<template>
  <div class="page-program">
    <h1>This is an program page</h1>
  </div>
</template>

<script>
export default {
  name: 'PageProgram',
  props: {
    program: {
      type: Object,
      required: true,
    },
  },
  methods: {},
  mounted () {
    console.log('ALLO!')
  },
}
</script>

<style langs="scss"></style>
