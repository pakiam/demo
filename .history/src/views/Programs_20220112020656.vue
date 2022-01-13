<template>
  <v-container v-if="!isLoading" fluid>
    <v-row dense>
      <v-col v-for="program in programs" :key="program.id" cols="4">
        <v-card>
          <v-img
            :src="program.img"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
          >
            <v-card-title v-text="card.title"></v-card-title>
          </v-img>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-bookmark</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'PagePrograms',
  data () {
    return {
      programs: null,
      isLoading: true
    }
  },
  methods: {
    ...mapActions({
      getPrograms: 'programs/getPrograms'
    })
  },
  async mounted () {
    try {
      const response = await this.getPrograms()
      this.programs = response
    } catch (error) {
      console.log('Programs mounter', error)
    } finally {
      this.isLoading = false
    }
  }
}
</script>

<style lang="scss"></style>
