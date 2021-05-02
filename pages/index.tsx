import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useState, FC } from "react";

export default function Home() {
   interface Inputs {
      zero: number;
      one: number;
      two: number;
   }
   const [input, setInput] = useState<Inputs>();

   interface History {}
   const [answers, setAnswers] = useState<Array<string>>([]);
   let points: Array<number> = [];

   console.log("points", points);

   const numbers: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

   function Game(zero: number, one: number, two: number) {
      const x: string = "912";
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
      const x: string = "912";
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
      else if (lmao[0] == zero.toString()) {
         return 1;
      } else if (lmao[1] == one.toString()) {
         return 1;
      } else if (lmao[2] == two.toString()) {
         return 1;
      } else {
         return 0;
      }
   }

   function someClick(a: number) {
      if (!input) {
         setInput({ zero: a, one: null, two: null });
      } else if (!input.one) {
         setInput({ zero: input.zero, one: a, two: null });
      } else if (!input.two) {
         setInput({ zero: input.zero, one: input.one, two: a });
      } else {
         console.clear();
         points.push(Game(input.zero, input.one, input.two));
         console.log("points", points);
         const lmao: string =
            input.zero.toString() + input.one.toString() + input.two.toString();
         answers.push(lmao);
         console.log("answers", answers);
         console.log("minu", Minus(input.zero, input.one, input.two));
      }
   }

   return (
      <div className={styles.container}>
         <Head>
            <title>Memory</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <main className={styles.main}>
            <div className={styles.header}>
               <h1 className={styles.header_title}>Memory</h1>
               <p className={styles.header_content}>
                  Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum
                  lorem ipsum Lorem ipsum lorem ipsum
               </p>
            </div>
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
                     <div style={{ display: "flex" }}>
                        <h1 className={styles.input_numbers}>
                           {input ? input.zero : ""}
                        </h1>
                        <h1 className={styles.input_numbers}>
                           {" "}
                           {input ? input.one : ""}
                        </h1>

                        <h1 className={styles.input_numbers}>
                           {" "}
                           {input ? input.two : ``}
                        </h1>
                     </div>
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
                  </div>
               </div>{" "}
               <div>
                  History
                  <h1>Points</h1>
                  {points.map((point) => (
                     <h1>{point}</h1>
                  ))}
                  <h1>Answers</h1>
                  {answers.map((answer) => (
                     <h1>{answer}</h1>
                  ))}
               </div>
            </div>{" "}
         </main>
      </div>
   );
}
