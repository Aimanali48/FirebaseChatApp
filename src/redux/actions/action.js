import { SET_CURRENT_USER } from './types';
import { myFirebase, myFirestore } from '../../Firebase/Firebase';
import firebase from 'firebase';
import { getUser, setUser } from '../../Firebase/services/services';

export const LoginUser = history => async dispatch => {
  try {
    var provider = new firebase.auth.GoogleAuthProvider();
    const result = await myFirebase.auth().signInWithPopup(provider);
    const user = result.user;
    const token = result.credential.accessToken;
    const { uid, displayName, photoURL } = user;
    if (user) {
      const document = await getUser(uid);
      const payload = document.data();
      console.log(payload);
      dispatch({
        type: SET_CURRENT_USER,
        payload
      });

      if (payload === undefined) {
        setUser(uid, displayName, photoURL).then(() => {
          myFirestore
            .collection('users')
            .doc(uid)
            .onSnapshot(doc => {
              console.log(doc.data());
              dispatch({
                type: SET_CURRENT_USER,
                payload: doc.data()
              });
            });
        });
        localStorage.setItem('token', token);
        alert('login success submission');
        history.push('/main');
      } else {
        alert('Login success first if');
        history.push('/main');
        localStorage.setItem('token', token);
      }
    } else {
      alert('info not available');
    }
  } catch (err) {
    console.log(err);
  }
};
