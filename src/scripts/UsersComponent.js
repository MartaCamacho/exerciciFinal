
export default {
  name: 'UsersComponent',
  props: { 
    users: {
        type: [Array, String], 
        required: true
    }
  },
  filters: {
    UpperCase(value) {
      if(!value) return "";
      return value.toString().toUpperCase();
    },
  }
};