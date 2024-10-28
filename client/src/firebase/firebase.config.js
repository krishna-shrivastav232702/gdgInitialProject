import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "gdgproject-606f0.firebaseapp.com",
    projectId: "gdgproject-606f0",
    storageBucket: "gdgproject-606f0.appspot.com",
    messagingSenderId: "749446208400",
    appId: "1:749446208400:web:859adfdd5dffd3ceb1b115",
    measurementId: "G-FDCRHEKN5W"
};

const app = initializeApp(firebaseConfig);
export default app;