export default {
  name: 'bootcamp-input',
  data() {
    return {
      valueInput: '',
      state: 'default',
      txtPlaceholder: 'Type some fanny tasks!',
      errorMessage: 'No more items, please!',
    }
  },
  props: {
    /**
     * props que recebe valor no component pai
     */
    itemsList: {
      type: Array,
      required: true,
    },
  },
  watch: {
    /**
     * escuta alterações na lista e adiciona um estado para o input
     */
    itemsList(newValue) {
      this.state = newValue.length >= 6 ? 'warning' : 'default'
    },
  },
  computed: {
    /**
     * verifica qual texto vai no placeholder
     */
    getMessagePlaceholder() {
      return this.state == 'default' ? this.txtPlaceholder : this.errorMessage
    },
  },
  methods: {
    /**
     * validação para inserir um item na lista
     * emit evento para adicionar item na lista
     * limpa valor do input
     */
    addItemList() {
      if (this.validateInputValue()) {
        this.$emit('addItemList', this.valueInput)
        this.valueInput = ''
      }
    },
    /**
     * validação para inserir um item na lista
     */
    validateInputValue() {
      return this.valueInput.replace(/ /g, '').length > 0 && this.state != 'warning'
    },
  },
}
