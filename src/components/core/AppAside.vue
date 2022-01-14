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
                          cartItemsCount,
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
              <SearchForm :onSearchProgramByName="onSearchProgramByName" />
              <!-- /Search form -->
            </v-navigation-drawer>
          </v-card>
        </v-col>
      </v-row>

      <v-row dense v-if="categories">
        <v-col cols="12">
          <!-- CategoryFilter -->
          <CategoryFilter
            :categories="categories"
            @onSelectCategory="onSelectCategory"
          />
          <!-- /CategoryFilter -->
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// TODO: refac this
import { mapActions, mapGetters } from 'vuex'

import CategoryFilter from './CategoryFilter.vue'
import SearchForm from './SearchForm.vue'

export default {
  name: 'AppAside',
  components: {
    CategoryFilter,
    SearchForm,
  },
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
    }
  },
  computed: {
    ...mapGetters({
      cartItemsCount: 'cart/totalCount',
      cartPrice: 'cart/totalPrice',
      isCartEmpty: 'cart/isEmpty',
    }),
  },
  methods: {
    ...mapActions({
      getCategories: 'categories/getCategories',
    }),
    onSelectCategory (categoryId) {
      this.$emit('onSelectCategory', categoryId)
    },
    clearSearch () {
      this.searchString = null
    },
  },
  async mounted () {
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
