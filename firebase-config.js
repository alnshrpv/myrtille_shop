import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC1Vunb18-k_werwyiUoBnQVPajIFhb7sY",
  authDomain: "myrtille-66b16.firebaseapp.com",
  projectId: "myrtille-66b16",
  storageBucket: "myrtille-66b16.appspot.com",
  messagingSenderId: "1067315505988",
  appId: "1:1067315505988:web:cdb553ecabaaf0edc34511",
  measurementId: "G-EGG2JCQNBS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { auth, analytics, db };
