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
    let counts = [];
    
    let theUsers = vue.users.map(user => 
      {
        if (consulted.includes(user.id) == true){
          let result = consulted.filter(o1 => vue.users.some(o2 => o1 === o2.id))
          result.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
          let id = counts.map(count => 
            {return vue.userCoincidenceName = [...vue.userCoincidenceName, {name: user.name, count: count}]
            })
          console.log(id)
        
        } else {
          return
        }
      
      })
      console.log(vue.userCoincidenceName)
      return theUsers
  }
  
};