<template>
  <div class="page-program">
    <v-dialog transition="dialog-bottom-transition" max-width="600">
      <template v-slot:default="true">
        <v-card>
          <v-toolbar color="primary" dark>Opening from the bottom</v-toolbar>
          <v-card-text>
            <div class="text-h2 pa-12">{{ program.frontName }}</div>
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn text @click="onClose">Close</v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
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
