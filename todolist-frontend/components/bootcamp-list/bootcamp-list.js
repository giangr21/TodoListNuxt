export default {
  name: 'bootcamp-list',
  props: {
    /**
    * props que recebe valor no component pai
    */
    itemsList: {
      type: Array,
      required: true,
    },
  },
  methods: {
    /**
     * envia action para o pai gerar uma action
     */
    actionItemList(action, item, checked = false) {
      this.actionButton = {
        action,
        item,
        checked,
      }
      this.$emit('actionItemList', this.actionButton)
    },
  }
}
