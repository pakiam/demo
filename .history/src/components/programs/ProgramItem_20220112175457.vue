<template>
  <v-col :cols="columns">
    <v-card>
      <v-img
        :src="program.img"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="200px"
      >
        <v-card-title v-text="program.frontName"></v-card-title>
      </v-img>

      <v-card-actions>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: 'ProgramItem',
  props: {
    /**
     * @description
     * img
     * frontName
     */
    program: {
      type: Object,
      required: true,
    },
    columns: {
      type: Number,
      default: 4,
    },
  },
}
</script>

<style></style>
