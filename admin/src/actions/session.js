import { push } from 'svelte-spa-router';
import { Auth } from '../Firebase';
import { user, error } from '../store/store.js';

const verifyUserSession = async () => {
  try {
    Auth.onAuthStateChanged(userData => {
      if (userData) user.set(userData.email)
    });
  } catch (error) {
    console.log(error);
  }
}

const signIn = async (email, password) => {
  if (!email || !password) {
    error.set('E-mail ou senha inválido')
    return;
  }
  try {
    const response = await Auth.signInWithEmailAndPassword(email, password);
    user.set(response.user.email);
    error.set(null);
  } catch (err) {
    error.set(err.message);
  }
};

const signOut = async () => {
  try {
    await Auth.signOut();
    user.set(null);
    push('/');
  } catch (error) {
    console.log(error);
  }
};

export {
  verifyUserSession,
  signIn,
  signOut
};