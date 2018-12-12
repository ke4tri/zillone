import firebase from 'firebase/app';
import 'firebase/auth';

const authenticate = () => {
  const provider = new firebase.auth.GoogleAuthProvider(); // gitHub provider
  return firebase.auth().signInWithPopup(provider);
};

export default {
  authenticate,
};
