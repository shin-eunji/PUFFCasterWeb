import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBTHH6aNSQ6r8NU4ybrsVpNgF1SGEJ7iYA",
    authDomain: "puffcast-b6641.firebaseapp.com",
    databaseURL: "https://puffcast-b6641.firebaseio.com",
    projectId: "puffcast-b6641",
    storageBucket: "puffcast-b6641.appspot.com",
    messagingSenderId: "76295808839",
    appId: "1:76295808839:web:5c6ec87c8c30bc618f4e62"
};

firebase.initializeApp(firebaseConfig);

export default firebase;