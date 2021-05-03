import * as firebase from "firebase";
import "firebase/database";

let config = {
   FIREBASE_CONFIG_HERE,
};

firebase.initializeApp(config);

export default firebase.database();
