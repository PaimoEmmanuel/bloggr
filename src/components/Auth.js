import { firebase } from '../firebase/firebase';

export const signupAuth = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email.trim(), password);
};

export const signinAuth = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email.trim(), password);
};

export const signOut = () => {
    return firebase.auth().signOut()
}