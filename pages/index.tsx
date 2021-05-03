import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useState, useEffect, FC } from "react";
import Link from "next/link";
import Layout from "../components/layout";
import service from "../utils/service";
import { useList, useListVals } from "react-firebase-hooks/database";

export default function Home() {
   interface Inputs {
      zero: number;
      one: number;
      two: number;
   }
   const [input, setInput] = useState<Inputs>();

   interface Points {
      plus: number;
      minus: number;
   }
   const [points, setPoints] = useState<Array<Points>>([]);

   const [answers, setAnswers] = useState<Array<string>>([]);

   const [error, setError] = useState<string>();
   /*       "No duplicate pls.Look rules 21.1"
    */

   const [tryCount, setTryCount] = useState<number>(0);
   console.log("try", tryCount);
   const numbers: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
   // Random number
   function Random() {
      var c = Math.floor(Math.random() * (999 - 100 + 1) + 100);
      const x = c.toString();
      const y = x.split("");
      if (y[0] === y[1] || y[2] === y[1] || y[2] === y[0]) {
         console.log("2 same number...");
      }
      return c;
   }

   const [random, setRandom] = useState<Number>(123);

   const yeni = () => {
      setRandom(Random());
      const x = random.toString();
      const y = x.split("");
      if (y[0] === y[1] || y[2] === y[1] || y[2] === y[0]) {
         console.log("2 same number...");
      }
      setRandom(Random());
   };

   const x: string = /* "912" */ random.toString();

   function Game(zero: number, one: number, two: number) {
      const lmao: Array<string> = x.split("");
      console.log("lmao", lmao[1]);
      console.log(zero, one, two);
      if (
         lmao[0] == zero.toString() &&
         lmao[1] == one.toString() &&
         lmao[2] == two.toString()
      ) {
         return 3;
      } else if (lmao[0] == zero.toString() && lmao[1] == one.toString()) {
         return 2;
      } else if (lmao[0] == zero.toString() && lmao[2] == one.toString()) {
         return 2;
      } else if (lmao[1] == zero.toString() && lmao[2] == one.toString()) {
         return 2;
      } else if (lmao[0] == zero.toString()) {
         return 1;
      } else if (lmao[1] == one.toString()) {
         return 1;
      } else if (lmao[2] == two.toString()) {
         return 1;
      } else {
         return 0;
      }
   }
   function Minus(zero: number, one: number, two: number) {
      const lmao: Array<string> = x.split("");

      if (
         (lmao[0] == one.toString() &&
            lmao[1] == two.toString() &&
            lmao[2] == zero.toString()) ||
         (lmao[0] == two.toString() &&
            lmao[1] == zero.toString() &&
            lmao[2] == one.toString())
      ) {
         return -3;
      }
      // 0 = one
      else if (lmao[0] == one.toString() && lmao[1] == two.toString()) {
         return -2;
      } else if (lmao[0] == one.toString() && lmao[1] == zero.toString()) {
         return -2;
      } else if (lmao[0] == one.toString() && lmao[2] == zero.toString()) {
         return -2;
      }
      // 1 = two
      else if (lmao[0] == two.toString() && lmao[1] == zero.toString()) {
         return -2;
      } else if (lmao[0] == two.toString() && lmao[1] == zero.toString()) {
         return -2;
      } else if (lmao[0] == two.toString() && lmao[2] == zero.toString()) {
         return -2;
      }

      // 1 = zero
      else if (lmao[1] == zero.toString() && lmao[0] == one.toString()) {
         return -2;
      } else if (lmao[1] == zero.toString() && lmao[0] == two.toString()) {
         return -2;
      } else if (lmao[1] == zero.toString() && lmao[2] == one.toString()) {
         return -2;
      }
      // 1 = two
      else if (lmao[1] == two.toString() && lmao[0] == one.toString()) {
         return -2;
      } else if (lmao[1] == two.toString() && lmao[2] == zero.toString()) {
         return -2;
      } else if (lmao[1] == two.toString() && lmao[2] == one.toString()) {
         return -2;
      }
      // 2 = zero
      else if (lmao[2] == zero.toString() && lmao[0] == one.toString()) {
         return -2;
      } else if (lmao[2] == zero.toString() && lmao[0] == two.toString()) {
         return -2;
      } else if (lmao[2] == zero.toString() && lmao[1] == two.toString()) {
         return -2;
      }
      // 2 = one
      else if (lmao[2] == one.toString() && lmao[0] == two.toString()) {
         return -2;
      } else if (lmao[2] == one.toString() && lmao[1] == zero.toString()) {
         return -2;
      } else if (lmao[2] == one.toString() && lmao[1] == two.toString()) {
         return -2;
      }

      // -1
      else if (lmao[0] == one.toString()) {
         return -1;
      } else if (lmao[0] == two.toString()) {
         return -1;
      } else if (lmao[1] == zero.toString()) {
         return -1;
      } else if (lmao[1] == two.toString()) {
         return -1;
      } else if (lmao[2] == zero.toString()) {
         return -1;
      } else if (lmao[2] == one.toString()) {
         return -1;
      } else {
         return 0;
      }
   }

   function someClick(a: number) {
      if (!input) {
         setInput({ zero: a, one: null, two: null });
      } else if (!input.one) {
         if (a == input.zero) {
         } else {
            setInput({ zero: input.zero, one: a, two: null });
         }
      } else if (!input.two) {
         if (a == input.one || a == input.zero) {
         } else {
            setInput({ zero: input.zero, one: input.one, two: a });
         }
      }
   }
   interface Scores {
      name: string;
      point: number;
   }
   let score: any;

   /*    const [score, setScore] = useState<Score>({ name: "", point: 0 });

 */

   function sendScore() {
      console.log("bitti");

      setTimeout(function () {
         service.create(score);
      }, 2000);
   }

   function getResult() {
      input.two && console.clear();
      const pluspoint: number = Game(input.zero, input.one, input.two);
      points.push({
         plus: pluspoint,
         minus: Minus(input.zero, input.one, input.two),
      });

      const answer: string =
         input.zero.toString() + input.one.toString() + input.two.toString();
      answers.push(answer);

      setTryCount(tryCount + 1);

      if (pluspoint == 3) {
         sendScore();
      }

      setInput(null);
   }

   const [isRulesOpen, setIsRulesOpen] = useState<boolean>(false);
   return (
      <div className={styles.container}>
         <Head>
            <title>Plus1</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <Layout>
            <div className={styles.container}>
               <div className={styles.left}>
                  {" "}
                  <div
                     style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingBottom: "20px",
                     }}
                  >
                     {error && <h1>{error}</h1>}
                     {tryCount == -1 && <h1>You tried {tryCount} times.</h1>}
                     <div>
                        <div style={{ display: "flex" }}>
                           <h1 className={styles.input_numbers}>
                              {input ? input.zero : <span>&nbsp;</span>}
                           </h1>
                           <h1 className={styles.input_numbers}>
                              {" "}
                              {input ? input.one : <span>&nbsp;</span>}
                           </h1>

                           <h1 className={styles.input_numbers}>
                              {" "}
                              {input ? input.two : <span>&nbsp;</span>}
                           </h1>
                        </div>
                     </div>{" "}
                  </div>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                     <button
                        onClick={() => {
                           setInput(null);
                        }}
                     >
                        Delete
                     </button>
                     <div className={styles.numbers}>
                        {numbers.map((number) => (
                           <button
                              className={styles.button}
                              onClick={() => someClick(number)}
                           >
                              {number}
                           </button>
                        ))}
                     </div>
                     <button
                        onClick={getResult}
                        /*  disabled={
                           input ? false : input && input.two ? true : false
                        } */
                     >
                        Enter
                     </button>
                     <button onClick={sendScore}>Send</button>
                     <button onClick={yeni}>Yeni</button>
                  </div>
               </div>{" "}
               <div className={styles.history_title}>
                  <h1>History</h1>
                  <div>
                     {answers.length > 0 &&
                        answers.map((answer, index) => (
                           <div className={styles.history}>
                              <div>
                                 <h1>{answer}</h1>
                              </div>
                              <div>
                                 {points[index].minus !== 0 &&
                                    points[index].plus == 0 && (
                                       <h1>{points[index].minus}</h1>
                                    )}
                                 {points[index].minus == 0 &&
                                    points[index].plus !== 0 && (
                                       <h1>+{points[index].plus}</h1>
                                    )}
                                 {points[index].minus !== 0 &&
                                    points[index].plus !== 0 && (
                                       <div style={{ display: "flex" }}>
                                          <h1>+{points[index].plus} </h1>
                                          <h1>{points[index].minus}</h1>
                                       </div>
                                    )}
                                 {points[index].minus == 0 &&
                                    points[index].plus == 0 && (
                                       <div style={{ display: "flex" }}>
                                          <h1>0</h1>{" "}
                                       </div>
                                    )}
                              </div>
                           </div>
                        ))}
                  </div>
               </div>
            </div>{" "}
         </Layout>
      </div>
   );
}
