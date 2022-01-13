<template>
  <div class="page-program">
    1
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
  methods: {
    onClose () {
      this.$router.pop()
    },
  },
}
</script>

<style langs="scss"></style>
