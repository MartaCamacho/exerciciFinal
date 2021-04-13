import store from "./../store/index";
export default {
    name: 'App',
    methods: {
      back(){
        this.$router.go(-1)
      },
    }, 
    computed: {
      SearchForm: {
        get() {
            return store.state.filters.search;
        },
        set(value) {
            store.commit("SetSearch", value)
        }
      }
    }
  };