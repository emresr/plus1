import Layout from "../components/layout";
import service from "../utils/service";
import { useList, useListVals } from "react-firebase-hooks/database";
import styles from "../styles/Leaderboard.module.scss";
import Head from "next/head";
import { readlink } from "node:fs";
const Leaderboard = () => {
   const [alltime] = useListVals(service.getAllTime());
   const [weekly] = useListVals(service.getWeekly());
   const [today] = useListVals(service.getToday());

   const numbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   console.log("weekly", weekly);

   function sort(lmao: any) {
      lmao.sort((a, b) => (a.point > b.point ? 1 : -1));
      lmao.slice(1, 2);
      return lmao;
   }
   sort(today);
   sort(weekly);

   interface Rank {
      name: string;
      point: number;
   }
   return (
      <div>
         <Head>
            <title>Leaderboard | Plus1</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Layout>
            {" "}
            <div>
               <div className={styles.leaderboard}>
                  <div className={styles.rankcontainer}>
                     <div className={styles.each_rank}>
                        <h1>Weekly</h1>
                        <table className={styles.rankings}>
                           <tr>
                              <th> Name</th>
                              <th>Score</th>
                           </tr>

                           {weekly.length > 0 &&
                              weekly.map(
                                 (rank: any, index) =>
                                    index < 10 && (
                                       <tr key={index}>
                                          <td>{rank.name}</td>
                                          <td>{rank.point}</td>
                                       </tr>
                                    )
                              )}
                        </table>
                     </div>
                     <div className={styles.each_rank}>
                        <h1>Today</h1>
                        <table className={styles.rankings}>
                           <tr>
                              <th> Name</th>
                              <th>Score</th>
                           </tr>

                           {today.length > 0 &&
                              today.map(
                                 (rank: any, index) =>
                                    index < 10 && (
                                       <tr key={index}>
                                          <td>{rank.name}</td>
                                          <td>{rank.point}</td>
                                       </tr>
                                    )
                              )}
                        </table>
                     </div>
                     <div className={styles.each_rank}>
                        <h1>All Time</h1>
                        <table className={styles.rankings}>
                           <tr>
                              <th> Name</th>
                              <th>Score</th>
                           </tr>

                           {alltime.length > 0 &&
                              alltime.map((rank: any, index) => (
                                 <tr key={index}>
                                    <td>{rank.name}</td>
                                    <td>{rank.point}</td>
                                 </tr>
                              ))}
                        </table>
                     </div>
                  </div>
               </div>
            </div>
         </Layout>{" "}
      </div>
   );
};

export default Leaderboard;
