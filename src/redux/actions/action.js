import firebase from 'firebase';
import { myFirebase, myFirestore } from '../../Firebase/Firebase';

//Sign In
export const onLoginPress = history => {
  try {
    var provider = new firebase.auth.GoogleAuthProvider();
    myFirebase
      .auth()
      .signInWithPopup(provider)
      .then(async result => {
        let user = result.user;
        var token = result.credential.accessToken;
        //If user already exis

        if (user) {
          const result = await myFirestore
            .collection('users')
            .where('id', '==', user.uid)
            .get();

          // since this is a new user
          if (result.docs.length === 0) {
            myFirestore
              .collection('users')
              .doc(user.uid)
              .set({
                id: user.uid,
                nickname: user.displayName,
                aboutMe: '',
                photoUrl: user.photoURL
              })
              .then(() => {
                history.push('/main');
              });
          } else {
            console.log('login success');
            history.push('/main');
          }
        } else {
          alert('info not available');
        }
      });
  } catch (err) {
    console.log(err);
  }
};
