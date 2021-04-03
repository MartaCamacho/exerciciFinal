import axios from 'axios';
export default {
  name: 'UsersComponent',
  data() {
    return {
      usersTotal: []
    }
  },
  mounted(){
    const vue = this;
    axios.get('http://jsonplaceholder.typicode.com/users').then(response => vue.usersTotal = response.data) 
  }
};