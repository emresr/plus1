import * as firebase from "firebase";
import "firebase/database";

let config = {
   YOUR_CONFIG,
};

if (!firebase.apps.length) {
   firebase.initializeApp(config);
} else {
   firebase.app();
}
export default firebase.database();
