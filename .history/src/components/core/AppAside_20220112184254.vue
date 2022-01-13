<template>
  <div class="app-aside">
    <v-card class="mx-auto" width="256" tile>
      <v-navigation-drawer permanent>
        <v-system-bar>
          <v-subheader> 2 программы - 1528₽ </v-subheader>
        </v-system-bar>
        <!-- Search form -->
        <v-form>
          <v-container>
            <v-row no-gutters>
              <v-col cols="12" md="12">
                <v-text-field
                  v-model="searchString"
                  label="Программы НМО"
                  append-icon="mdi-magnify"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
        <!-- /Search form -->

        <v-list>
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                John Leider
              </v-list-item-title>
              <v-list-item-subtitle>john@vuetifyjs.com</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-icon>mdi-menu-down</v-icon>
            </v-list-item-action>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
      </v-navigation-drawer>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'AppAside',
  data () {
    return {
      searchString: null,
    }
  },
}
</script>

<style></style>
