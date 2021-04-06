import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBo2kFsQTqWoOe0hGD3EFDAIIU9AcrOpnE",
    authDomain: "cit313test.firebaseapp.com",
    databaseURL: "https://cit313test-default-rtdb.firebaseio.com",
    projectId: "cit313test",
    storageBucket: "cit313test.appspot.com",
    messagingSenderId: "523065173910",
    appId: "1:523065173910:web:8c25190296762ae5715fb7"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;