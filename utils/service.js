import firebase from "./firebase";

const db = firebase.ref("/leaderboard/");

const getAll = () => {
   return db;
};
const create = (data) => {
   return db.push(data);
};

const getToday = () => {
   return db
      .orderByChild("date")
      .startAt(
         new Date().toISOString().substr(0, 10)
      ); /* .orderByChild("point"); */
};
const getWeekly = () => {
   const today = new Date();
   let tomorrow = new Date();
   tomorrow.setDate(today.getDate() + 1);
   let lastWeek = new Date();
   lastWeek.setDate(today.getDate() - 6);
   return db
      .orderByChild("date")
      .startAt(lastWeek.toISOString().substr(0, 10))
      .endAt(tomorrow.toISOString().substr(0, 10));
};
const getAllTime = () => {
   return db.orderByChild("point").limitToFirst(10);
};
export default { getAll, create, getToday, getWeekly, getAllTime };
