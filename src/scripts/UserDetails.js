import UserDetailsComponent from '../components/UserDetailsComponent.vue';
import { mapState } from 'vuex';

export default {
  name: 'UserDetails',
  components: {
    UserDetailsComponent
  },
  props:{ id: [String, Number], user: Object },
  mounted () {
    let vue = this;
    let TheId = vue.id;
    this.$store.dispatch('loadCurrentUser', TheId);
  },
  computed: mapState([
    'currentUser'
  ])
};