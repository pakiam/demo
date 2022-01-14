<template>
  <Portal to="popup">
    <PopupBase
      :label="label"
      @close="$router.back()"
    >
      <slot
        slot="backdrop"
        name="backdrop"
      />
      <slot />
    </PopupBase>
  </Portal>
</template>

<script>
import PopupBase from './PopupBase.vue'

export default {
  name: 'PopupRouterView',
  components: {
    PopupBase,
  },
  props: {
    label: {
      required: true,
      type: String,
    },
  },
}
</script>
