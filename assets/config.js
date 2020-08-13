(() => {
  window.bellScheduleConfig = {
    schoolName: "Dublin High School",
    appName: "DHS Bell Schedule App",
    schoolColour: "#14415B",
    schoolIdentifier: "dublinMS",
  };
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC6-1dfBuSDjhruDasTl5vExqOXcFHEfww",
    authDomain: "ubsa-fb.firebaseapp.com",
    databaseURL: "https://ubsa-fb.firebaseio.com",
    projectId: "ubsa-fb",
    storageBucket: "ubsa-fb.appspot.com",
    messagingSenderId: "295845474213",
    appId: "1:295845474213:web:d92ded7f28644e85a7824c",
    measurementId: "G-J5J9JQLREW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
})();
