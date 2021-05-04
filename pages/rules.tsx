import Layout from "../components/layout";
import styles from "../styles/Rules.module.css";
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
                  {" "}
                  <h2>Get +1 for each true digit</h2>
                  <h2>Get -1 for each true number but in wrong place</h2>
                  <h2>
                     <span></span> +3 all digits true
                  </h2>
                  <h1>Goal: find number by getting +3 with atleast try.</h1>
               </div>
               <div>Example</div>
            </div>
         </Layout>
      </div>
   );
};

export default Rules;
