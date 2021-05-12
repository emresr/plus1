import Layout from "../components/layout";
import service from "../utils/service";
import { useList, useListVals } from "react-firebase-hooks/database";
import styles from "../styles/Leaderboard.module.scss";
import Head from "next/head";
const Leaderboard = () => {
   const [ranking, loading] = useListVals(service.getFirst10());
   console.log(ranking);
   const numbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
                     <div>
                        <table className={styles.rankings}>
                           <tr>
                              <th> Name</th>
                              <th>Score</th>
                           </tr>

                           {!loading &&
                              ranking.length > 0 &&
                              ranking.map((rank: any) => (
                                 <tr>
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
