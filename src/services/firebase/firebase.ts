import firebase from 'firebase/app';
import 'firebase/auth'; // If you need it

const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
};

// Check that `window` is in scope for the analytics module!
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase;
