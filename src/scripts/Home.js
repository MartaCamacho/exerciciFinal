import { mapState } from 'vuex';

export default {
  name: 'Home',
  data() {
    return {
      userCoincidenceName: [],
    }
  },
  computed: mapState([
    'consultedUsers',
    'users'
  ]),
  mounted(){
    const vue = this;
    let consulted = vue.consultedUsers;
    let theUsers = vue.users.map(user => {
        if (consulted.includes(user.id) == true){
          function getOccurrence(array, value) {
            return array.filter((v) => (v === value)).length;
          }
          vue.userCoincidenceName = [...vue.userCoincidenceName, {
            name: user.name,
            count: getOccurrence(consulted, user.id)
            }]
        } else {
          return
        }
      })
      return theUsers
  }
};