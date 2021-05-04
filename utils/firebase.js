import * as firebase from "firebase";
import "firebase/database";

let config = {
   apiKey: "AIzaSyAquxR7q7azZ3z1KeDR-D_H_Wc4H2PZnOw",
   authDomain: "plus1-61415.firebaseapp.com",
   projectId: "plus1-61415",
   databaseURL:
      "https://plus1-61415-default-rtdb.europe-west1.firebasedatabase.app/",
   storageBucket: "plus1-61415.appspot.com",
   messagingSenderId: "885951298573",
   appId: "1:885951298573:web:5eefffd3876c11a72b6944",
};

firebase.initializeApp(config);

export default firebase.database();
