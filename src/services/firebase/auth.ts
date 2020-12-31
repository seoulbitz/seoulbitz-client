import firebase from './firebase';

export enum SignUpResult {
  success = 'success',
  emailAlreadyInUse = 'emailAlreadyInUse',
  invalidEmail = 'invalidEmail',
  weakPassword = 'weakPassword'
}

export enum LogInResult {
  success = 'success',
  invalidEmail = 'invalidEmail',
  userDisabled = 'userDisabled',
  userNotFound = 'userNotFound',
  wrongPassword = 'wrongPassword',
  userEmailNotVerified = 'userEmailNotVerified'
}

export enum ResendVerificationEmailResult {
  tooManyRequests = 'tooManyRequests'
}

const createAuthService = () => {
  const getVerifiedUser = () => {
    return new Promise<firebase.User | null>((resolve, reject) => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user && user.emailVerified) {
          resolve(user);
        } else {
          resolve(null);
        }
      });
    });
  };

  const getCurrentUser = () => {
    return new Promise<firebase.User | null>((resolve, reject) => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          resolve(user);
        } else {
          resolve(null);
        }
      });
    });
  };

  const signUp = async (username: string, email: string, password: string) => {
    try {
      await logOut();
      const userCredential = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;
      await user.updateProfile({ displayName: username });
      await user.sendEmailVerification({
        url: window.location.href
      });
      return SignUpResult.success;
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        return SignUpResult.emailAlreadyInUse;
      }

      if (err.code === 'auth/invalid-email') {
        return SignUpResult.invalidEmail;
      }

      if (err.code === 'auth/weak-password') {
        return SignUpResult.weakPassword;
      }

      console.log(err);
      throw err;
    }
  };

  const resendVerificationEmail = async () => {
    try {
      const user = firebase.auth().currentUser;

      if (!user) {
        throw Error('Unexpected error. Please try again.');
      }

      await user.sendEmailVerification({
        url: window.location.href
      });
      return user;
    } catch (err) {
      console.log(err);
      if (err.code === 'auth/too-many-requests') {
        return ResendVerificationEmailResult.tooManyRequests;
      }
      throw err;
    }
  };

  const logIn = async (email: string, password: string) => {
    try {
      await logOut();
      const userCredential = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

      if (!userCredential.user.emailVerified) {
        const error: any = new Error('User not verified');
        error.code = 'auth/user-email-not-verified';
        throw error;
      }

      return LogInResult.success;
    } catch (err) {
      console.log(err);
      if (err.code === 'auth/invalid-email') {
        return LogInResult.invalidEmail;
      }

      if (err.code === 'auth/user-disabled') {
        return LogInResult.invalidEmail;
      }

      if (err.code === 'auth/user-not-found') {
        return LogInResult.userNotFound;
      }

      if (err.code === 'auth/wrong-password') {
        return LogInResult.wrongPassword;
      }

      if (err.code === 'auth/user-email-not-verified') {
        return LogInResult.userEmailNotVerified;
      }

      throw err;
    }
  };

  const logOut = async () => {
    await firebase.auth().signOut();
  };

  return {
    getVerifiedUser,
    getCurrentUser,
    signUp,
    logIn,
    logOut,
    resendVerificationEmail
  };
};

const auth = createAuthService();

export default auth;
