import UsersComponent from '../components/UsersComponent.vue';
import { mapState } from 'vuex';

export default {
  components: {
    UsersComponent
  },
  mounted () {
    this.$store.dispatch('loadUsers')
  },
  computed: mapState([
    'users'
  ])
};