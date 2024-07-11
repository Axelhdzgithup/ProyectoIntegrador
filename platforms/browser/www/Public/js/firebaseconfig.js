const firebaseConfig = {
  apiKey: "AIzaSyDoS_M_cDxN_kJ-vX5jfG12gnPnfFa0Cq4",
  authDomain: "myhealthpal-4b2d6.firebaseapp.com",
  databaseURL: "https://myhealthpal-4b2d6-default-rtdb.firebaseio.com",
  projectId: "myhealthpal-4b2d6",
  storageBucket: "myhealthpal-4b2d6.appspot.com",
  messagingSenderId: "346732083941",
  appId: "1:346732083941:web:958b3b6d1d7067e71b720c"

};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage(); // Inicializa el servicio de almacenamiento
