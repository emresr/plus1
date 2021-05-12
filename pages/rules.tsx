import Layout from "../components/layout";
import styles from "../styles/Rules.module.scss";
import Head from "next/head";

const Rules = () => {
   return (
      <div>
         <Head>
            <title>Rules | Plus1</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Layout>
            <div className={styles.rules_page}>
               <div className={styles.rules}>
                  <h1>
                     Goal: Find unique three-digit number by getting +3 point.
                  </h1>{" "}
                  <h2 style={{ marginTop: "10px" }}>
                     Get +1 for each true digit in true place.
                  </h2>
                  <h2>Get -1 for each true number but in wrong place.</h2>
               </div>
               <div className={styles.example}>
                  <h1>Example</h1>
                  <h2>
                     Random number: <span>123</span>
                  </h2>
                  <div className={styles.tablecontainer}>
                     <table className={styles.table}>
                        <tr>
                           <th> Number</th>
                           <th>Point</th>
                        </tr>
                        <tr>
                           <td>
                              <span className={styles.trueplace}>12</span>0
                           </td>
                           <td>+2</td>
                        </tr>
                        <tr>
                           <td>
                              84<span className={styles.wrongplace}>2</span>
                           </td>
                           <td>-1</td>
                        </tr>
                        <tr>
                           <td>789</td>
                           <td>0</td>
                        </tr>
                        <tr>
                           <td>
                              <span className={styles.wrongplace}>21</span>

                              <span className={styles.trueplace}>3</span>
                           </td>
                           <td>+1-2</td>
                        </tr>
                        <tr>
                           <td>
                              {" "}
                              <span className={styles.trueplace}>1</span>
                              <span className={styles.wrongplace}>3</span>9
                           </td>
                           <td>+1-1</td>
                        </tr>{" "}
                        <tr>
                           <td>
                              {" "}
                              <span className={styles.trueplace}>123</span>
                           </td>
                           <td>+3 🎉</td>
                        </tr>
                     </table>
                  </div>
               </div>
            </div>
         </Layout>
      </div>
   );
};

export default Rules;
