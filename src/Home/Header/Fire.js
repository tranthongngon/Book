import firebase from 'firebase'
 const config = {
    apiKey: "AIzaSyDHeDjW7DmFdtObBTI-PghzUircJAJN3dE",
    authDomain: "react-app-53d87.firebaseapp.com",
    databaseURL: "https://react-app-53d87.firebaseio.com",
    projectId: "react-app-53d87",
    storageBucket: "react-app-53d87.appspot.com",
    messagingSenderId: "768111797068",
    appId: "1:768111797068:web:94659e4b414d60520ee5e9",
 };
const fire = firebase.initializeApp(config);
export default fire;