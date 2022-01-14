<template>
  <div class="b-search-form">
    <v-form
      @submit.prevent="
        onSearchProgramByName({
          string: searchString,
          source: 'form',
        })
      "
    >
      <v-container>
        <v-row no-gutters>
          <v-col cols="12" md="12">
            <v-text-field
              v-model="searchString"
              label="Программы НМО"
              append-icon="mdi-magnify"
              @input="
                onSearchProgramByName({
                  string: searchString,
                  source: 'input',
                })
              "
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
export default {
  name: 'SearchForm',
  data () {
    return {
      searchString: null,
    }
  },
  props: {
    onSearchProgramByName: {
      type: Function,
      required: true,
    },
  },
}
</script>

<style lang="scss"></style>
