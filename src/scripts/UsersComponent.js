
export default {
  props: { 
    users: {
        type: Object, 
        required: true
    }
  },
  methods: {
    Show(userId) {
      this.$router.push({
        name: 'UserDetails',
        params: {
          theId: userId
        }
      });
    }
  }
};