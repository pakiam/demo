<template>
  <div class="app-aside">
    <v-container>
      <v-row dense class="mb-4">
        <v-col cols="12">
          <v-card class="mx-auto" width="256" tile>
            <v-navigation-drawer permanent>
              <v-system-bar>
                <v-subheader>
                  <template v-if="isCartEmpty"> Корзина пуста </template>
                  <template v-else>
                    <router-link
                      class="v-subheader theme--light"
                      :to="{ name: 'Cart' }"
                      style="text-decoration: none"
                    >
                      {{
                        $numberLingFormWithNumberFunc(
                          cartItems,
                          'программа',
                          'программы',
                          'программ'
                        )
                      }}
                      - {{ cartPrice }}&nbsp;₽</router-link
                    >
                  </template>
                </v-subheader>
              </v-system-bar>
              <!-- Search form -->
              <v-form
                @submit.prevent="
                  onSearchProgramByName({ string: searchString, source: 'form' })
                "
              >
                <v-container>
                  <v-row no-gutters>
                    <v-col cols="12" md="12">
                      <v-text-field
                        v-model="searchString"
                        label="Программы НМО"
                        append-icon="mdi-magnify"
                        @input="onSearchProgramByName({string: searchString, source: 'input' })"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
              <!-- /Search form -->
            </v-navigation-drawer>
          </v-card>
        </v-col>
      </v-row>

      <v-row dense>
        <v-col cols="12">
          <!-- CategoryFilter -->
          <v-card class="mx-auto" width="256" tile>
            <v-navigation-drawer permanent>
              <v-subheader class="text-h5"> Категории </v-subheader>
            </v-navigation-drawer>

            <v-list v-if="categories">
              <v-list-item-group :value="selectedCategory" @input="onInput" color="primary">
                <v-list-item
                  v-for="category in categories"
                  :key="category.id"
                  @click="onSelectCategory(category.id)"
                >
                  <v-list-item-content>
                    <v-list-item-title class="text-h6">
                      {{ category.frontName }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
          <!-- /CategoryFilter -->
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'AppAside',
  props: {
    onSearchProgramByName: {
      type: Function,
      required: true,
    },
  },
  data () {
    return {
      searchString: null,
      categories: null,
      selectedCategory: 0,
    }
  },
  computed: {
    ...mapGetters({
      cartItems: 'cart/totalItems',
      cartPrice: 'cart/totalPrice',
      isCartEmpty: 'cart/isEmpty',
    }),
  },
  methods: {
    ...mapActions({
      getCategories: 'categories/getCategories',
    }),
    onInput (value) {
      console.log('onInput', value)
      if (value === this.selectedCategory) return
    },
    onSelectCategory (categoryId) {
      console.log('23', categoryId === this.selectedCategory)
      if (categoryId === this.selectedCategory) return
      this.$emit('onSelectCategory', categoryId)
    },
    clearSearch () {
      this.searchString = null
    },
  },
  async mounted () {
    // TODO: refac ? move logic outside
    this.selectedCategory = Number(this.$route.query.category) || 0

    try {
      const response = await this.getCategories()
      this.categories = response
    } catch (error) {
      console.log('AppAside mounted', error)
    } finally {
    }
  },
}
</script>

<style></style>
