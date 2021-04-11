import PicturesComponent from '../components/PicturesComponent.vue';
import { mapState } from 'vuex';

export default {
  components: {
    PicturesComponent
  },
  mounted () {
    this.$store.dispatch('loadPictures')
  },
  computed: mapState([
    'pictures'
  ])
};