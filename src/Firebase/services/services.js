import firebase from 'firebase';
import { myFirebase, myFirestore } from '../Firebase';
import { loginUser } from '../../redux/actions/action';

//Sign In
export const onLoginPress = async history => {
  try {
    var provider = new firebase.auth.GoogleAuthProvider();
    const result = await myFirebase.auth().signInWithPopup(provider);
    const user = result.user;
    const token = result.credential.accessToken;
    const { uid, displayName, photoURL } = user;
    if (user) {
      const result = await myFirestore
        .collection('users')
        .where('id', '==', uid)
        .get();
      const doc = result.docs.map(x => x.data());
      console.log(...doc); //logged in user data

      if (!doc || doc === null || doc === undefined) {
        // Set new data since this is a new user
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
          });
      } else {
        alert('login success');
        getUser(doc);
        history.push('/main');
      }
    } else {
      alert('info not available');
    }
  } catch (err) {
    console.log(err);
  }
};

const getUser = doc => {
  loginUser(...doc);
};
