<template>
  <div class="b-category-filter">
    <v-card
      class="mx-auto"
      width="256"
      tile
    >
      <v-navigation-drawer permanent>
        <v-subheader class="text-h5">
          Категории
        </v-subheader>
      </v-navigation-drawer>

      <v-list>
        <v-list-item-group
          v-model="selectedCategory"
          mandatory
          color="primary"
        >
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
  </div>
</template>

<script>
export default {
  name: 'CategoryFilter',
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
  data () {
    return {
      selectedCategory: 0,
    }
  },
  async mounted () {
    this.selectedCategory = Number(this.$route.query.category) || 0
  },
  methods: {
    onSelectCategory (categoryId) {
      if (categoryId === this.selectedCategory) return
      this.$emit('onSelectCategory', categoryId)
    },
  },
}
</script>

<style lang="scss"></style>
