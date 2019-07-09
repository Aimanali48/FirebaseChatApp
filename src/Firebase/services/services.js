import firebase from 'firebase';
import { myFirebase, myFirestore } from '../Firebase';

//Sign In
export const onLoginPress = async history => {
  try {
    var provider = new firebase.auth.GoogleAuthProvider();
    const result = await myFirebase.auth().signInWithPopup(provider);
    const user = result.user;
    const token = result.credential.accessToken;
    const { uid, displayName, photoURL } = user;
    if (user) {
      var specific = await myFirestore
        .collection('users')
        .doc(uid)
        .get()
        .catch(err => {
          console.log(err);
        });
      console.log(specific.data());

      if (specific.data() === undefined) {
        //this condition not working to set new user
        myFirestore
          .collection('users')
          .doc(uid)
          .set({
            id: uid,
            nickname: displayName,
            aboutMe: '',
            photoUrl: photoURL
          })
          .then(data => {
            localStorage.setItem('token', token);
            alert('login success');
            history.push('/main');
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        alert('login success');
        history.push('/main');
      }
    } else {
      alert('info not available');
    }
  } catch (err) {
    console.log(err);
  }
};
