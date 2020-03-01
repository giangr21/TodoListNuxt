import BootcampInput from '~/components/bootcamp-input/bootcamp-input.vue';
import BootcampList from '~/components/bootcamp-list/bootcamp-list.vue';

export default {
  /**
   * registra os componentes
   */
  components: {
    BootcampInput,
    BootcampList,
  },
  computed: {
    itemsList() {
      return this.$store.getters['todos/TODOS']
    }
  },
  mounted(){
    this.$store.dispatch('todos/feachTodos')
  },
  methods: {
    /**
     * adiciona item na list
     * recebe valor vindo do componente filho
     */
    addItemList(value) {
      this.$store.dispatch("todos/addTodo", value)
    },
    /**
     * recebe valor vindo do componente
     * conforme action faz alteração na lista
     */
    actionItemList(value) {
      if (value.action == 'delete') {
        this.deleteItemList(value)
      }
      if (value.action == 'toggle') {
        this.changeStateItemList(value)
      }
    },
    /**
     * conforme action faz alteração na lista
     */
    deleteItemList(value) {
      this.$store.dispatch("todos/removeTodo", value.item)
    },
    /**
     * muda estado de item na lista
     */
    changeStateItemList(value) {
      this.$store.dispatch("todos/updateTodo", value.item)
    },
  },
}
