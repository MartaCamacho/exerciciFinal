import { mapState } from 'vuex';

export default {
  name: 'Home',
  data() {
    return {
      userCoincidenceName: [],
      pictureCoincidenceName: [],
    }
  },
  computed: mapState([
    'consultedUsers',
    'users',
    'consultedPictures',
    'pictures'
  ]),
  mounted(){
    const vue = this;
    let consulted = vue.consultedUsers;
    let consultedPics = vue.consultedPictures;
    function getOccurrence(array, value) {
      return array.filter((v) => (v === value)).length;
    }

    vue.users.map(user => {
      if (consulted.includes(user.id) == true){
        vue.userCoincidenceName = [...vue.userCoincidenceName, {
          name: user.name,
          count: getOccurrence(consulted, user.id)
          }]
      } else {
        return
      }
    })

    vue.pictures.map(picture => {
      if (consultedPics.includes(picture.id) == true){
        vue.pictureCoincidenceName = [...vue.pictureCoincidenceName, {
          name: picture.title,
          count: getOccurrence(consultedPics, picture.id)
          }]
      } else {
        return
      }
    })
  }
};