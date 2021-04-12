
export default {
  props: { 
    users: {
        type: Array, 
        required: true
    }
  },
  filters: {
    UpperCase(value) {
      if(!value) return "";
      return value.toString().toUpperCase();
    },
    ArrayCon(value) {
      if(!value) return "";
      return value.toString().split();
    }
  }
};