import * as firebase from "firebase";
import "firebase/database";

let config = {
 YOUR CONFIG,
};

if (!firebase.apps.length) {
   firebase.initializeApp(config);
} else {
   firebase.app();
}
export default firebase.database();
