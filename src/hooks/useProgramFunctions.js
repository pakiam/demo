import { toRefs } from '@vue/composition-api'

export default function useProgramFunctions (props) {
  const { program } = toRefs(props)
  /**
   * @description Opens item's page
   * @param {Object} program
   */
  function onOpen () {
    this.$emit('onOpen', program.value)
  }

  return {
    onOpen,
  }
}
