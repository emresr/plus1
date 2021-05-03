import firebase from "./firebase";

const db = firebase.ref("/leaderboard/");

const getAll = () => {
   return db;
};
const create = (data) => {
   return db.push(data);
};
const getFirst10 = () => {
   return db.orderByChild("point").limitToFirst(10);
};
export default { getAll, create, getFirst10 };
