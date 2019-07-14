import firebase from 'firebase';
import { myFirebase, myFirestore } from '../Firebase';

export const signIn = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  return myFirebase.auth().signInWithPopup(provider);
};

export const getUser = uid => {
  return myFirestore
    .collection('users')
    .doc(uid)
    .get();
};

export const setUser = (uid, displayName, photoURL) => {
  return myFirestore
    .collection('users')
    .doc(uid)
    .set({
      id: uid,
      nickname: displayName,
      aboutMe: '',
      photoUrl: photoURL
    });
};
