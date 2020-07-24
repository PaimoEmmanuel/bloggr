  import * as firebase from 'firebase';
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD2lAb4hEMeb3eSETZEZdtXoAiitSjv-RU",
    authDomain: "fir-31780.firebaseapp.com",
    databaseURL: "https://fir-31780.firebaseio.com",
    projectId: "fir-31780",
    storageBucket: "fir-31780.appspot.com",
    messagingSenderId: "125459476937",
    appId: "1:125459476937:web:ffc4e8ddb69ac59a793818",
    measurementId: "G-QFNV73GGGC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

 const database = firebase.database();
 const storage = firebase.storage();

 export {firebase, storage, database as default}