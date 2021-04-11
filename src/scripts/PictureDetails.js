import PictureDetailsComponent from '../components/PictureDetailsComponent.vue';
import { mapState } from 'vuex';

export default {
  name: 'PictureDetails',
  components: {
    PictureDetailsComponent
  },
  props:{ id: [String, Number], picture: Object },
  mounted () {
    let vue = this;
    let TheId = vue.id;
    this.$store.dispatch('loadCurrentPicture', TheId);
    this.$store.dispatch('addCurrentPictureToSeen', TheId);
  },
  computed: mapState([
    'currentPicture',
    'consultedPictures'
  ])
};