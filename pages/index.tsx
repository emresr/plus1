import Head from "next/head";
import styles from "../styles/Home.module.scss";
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
   /*    points.reverse(); */
   const [answers, setAnswers] = useState<Array<string>>([]);
   /*    answers.reverse();
    */ const [error, setError] = useState<string>(null);
   /*       "No duplicate pls.Look rules 21.1"
    */
   const [errorAnimation, setErrorAnimation] = useState<boolean>(true);

   useEffect(() => {
      setTimeout(() => {
         setError(null);
      }, 2000);
   }, [error]);

   const [tryCount, setTryCount] = useState<number>(0);

   const numbers: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

   // Random number
   function Random() {
      var c = Math.floor(Math.random() * (999 - 100 + 1) + 100);
      const x = c.toString();
      const y = x.split("");
      if (y[0] === y[1] || y[2] === y[1] || y[2] === y[0]) {
         return Random();
      } else {
         return c;
      }
   }

   const [random, setRandom] = useState<number>(Random());

   const x: string = random && random.toString();

   function Game(zero: number, one: number, two: number) {
      const lmao: Array<string> = x.split("");
      if (
         lmao[0] == zero.toString() &&
         lmao[1] == one.toString() &&
         lmao[2] == two.toString()
      ) {
         return 3;
      } else if (lmao[0] == zero.toString() && lmao[1] == one.toString()) {
         return 2;
      } else if (lmao[0] == zero.toString() && lmao[2] == two.toString()) {
         return 2;
      } else if (lmao[1] == one.toString() && lmao[2] == two.toString()) {
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
      if (!input || input.zero == null) {
         setInput({ zero: a, one: null, two: null });
      } else if (input.one == null) {
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
   function Delete() {
      if (input.two || 0 == input.two) {
         setInput({ zero: input.zero, one: input.one, two: null });
      } else if (input.one || 0 == input.one) {
         setInput({ zero: input.zero, one: null, two: null });
      } else if (input.zero || 0 == input.zero) {
         setInput({ zero: null, one: null, two: null });
      }
   }

   interface Score {
      name: string;
      point: number;
   }

   const [score, setScore] = useState<Score>();

   const [username, setUsername] = useState<string>("Enter your name...");

   useEffect(() => {
      service.create(score);
   }, [score]);

   function getResult() {
      if (!input || !input.one || !input.zero || !input.two) {
         setError("Enter 3 digit number");
      } else {
         console.clear();
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
            setScore({
               name: username ? username : "Enter your name...",
               point: tryCount + 1,
            });
            console.log(random);
            setModal({ name: username, try: tryCount + 1, number: random });
            jumpNext ? setNewGame() : setIsModalOpen(true);
            setLastScore(tryCount + 1);
            setTryCount(0);
         }
         setInput(null);
      }
   }
   const [lastScore, setLastScore] = useState<number>(1);
   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
   interface Modal {
      name: string;
      try: number;
      number: number;
   }
   const [modal, setModal] = useState<Modal>();
   useEffect(() => {
      isModalOpen == false && setNewGame();
   }, [isModalOpen]);

   const [jumpNext, setJumpNext] = useState<boolean>(false);

   function setNewGame() {
      setRandom(Random());
      setAnswers([]);
      setPoints([]);
      setTryCount(0);
   }
   console.log(jumpNext);
   return (
      <div>
         <Head>
            <title>Plus+1</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         {isModalOpen && (
            <div>
               <div className={styles.modal}>
                  <button
                     className={styles.close_button}
                     onClick={() => {
                        setIsModalOpen(false);
                     }}
                  >
                     x{" "}
                  </button>
                  <div>
                     <h1>
                        You got it{" "}
                        {modal.name !== "Enter your name..." && modal.name}{" "}
                     </h1>
                     <h1>Number was {modal.number}</h1>
                     <h1>In {modal.try} try</h1>
                     <div className={styles.new_game_cont}>
                        <button
                           className={styles.new_game}
                           onClick={() => {
                              setNewGame();
                              setIsModalOpen(false);
                           }}
                        >
                           New game
                        </button>
                     </div>
                  </div>
               </div>
               <label
                  className={styles.modalbackground}
                  onClick={() => {
                     setIsModalOpen(false);
                  }}
               />
            </div>
         )}
         <Layout>
            <div className={styles.container}>
               <div
                  className={styles.left}
                  style={errorAnimation && { marginTop: "0px" }}
               >
                  {/*  <button
                     onClick={() => {
                        setIsModalOpen(!isModalOpen);
                     }}
                  >
                     Modal
                  </button> */}
                  <div>
                     {" "}
                     <div className={styles.left_container}>
                        <div>
                           <div>
                              <div style={{ display: "flex" }}>
                                 <h1 className={styles.input_numbers}>
                                    {input ? input.zero : <span>&nbsp;</span>}
                                    {input && input.zero == null && (
                                       <span>&nbsp;</span>
                                    )}
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
                     </div>{" "}
                     <div className={styles.error}>
                        {
                           <h1 className={styles.error_title}>
                              {error ? error : <span>&nbsp;</span>}
                           </h1>
                        }
                     </div>
                     <div style={{ display: "flex", justifyContent: "center" }}>
                        <div className={styles.numbers}>
                           {numbers.map((number) => (
                              <button
                                 className={styles.button}
                                 onClick={() => someClick(number)}
                                 disabled={
                                    (!input || input.zero == null) &&
                                    number == 0
                                 }
                              >
                                 {number}
                              </button>
                           ))}
                        </div>
                        <button
                           className={styles.button}
                           onClick={Delete}
                           disabled={!input}
                        >
                           D
                        </button>
                        <button
                           className={styles.button}
                           onClick={getResult}
                           /*  disabled={
                           input ? false : input && input.two ? true : false
                        } */
                        >
                           E
                        </button>
                     </div>
                     {tryCount !== 0 && (
                        <div className={styles.trycount}>
                           {" "}
                           <h1>You tried {tryCount} times.</h1>
                        </div>
                     )}
                  </div>{" "}
               </div>
               <div className={styles.history_title}>
                  <input
                     className={styles.name_input}
                     value={username}
                     onChange={(e) => {
                        setUsername(e.target.value);
                     }}
                     onFocus={() => {
                        setUsername("");
                     }}
                  />{" "}
                  <div className={styles.next_game}>
                     <h1 className={styles.next_text}>
                        Jump to next game immediately
                     </h1>
                     <div className={styles.toggle_container}>
                        <label className={styles.switch}>
                           <input
                              type="checkbox"
                              onChange={() => {
                                 setJumpNext(!jumpNext);
                              }}
                           />{" "}
                           <div className={styles.toggle} />
                        </label>
                     </div>
                     {/*      <button
                        onClick={() => {
                           setJumpNext(!jumpNext);
                        }}
                        className={styles.toggle}
                     >
                        <div
                           className={`${styles.toggle_button}  ${styles.lmao}`}
                        />
                     </button> */}
                  </div>
                  {lastScore && (
                     <h1 className={styles.lastscore}>
                        Last Score : {lastScore}
                     </h1>
                  )}
                  <h1>History</h1>
                  <div className={styles.tablecontainer}>
                     <table className={styles.table} id="table">
                        {answers.length > 0 &&
                           answers.map((answer, index) => (
                              <tr>
                                 <td>
                                    <h1>{answer}</h1>
                                 </td>
                                 <td>
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
                                          <div
                                             style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                             }}
                                          >
                                             <h1>+{points[index].plus} </h1>
                                             <h1>{points[index].minus}</h1>
                                          </div>
                                       )}
                                    {points[index].minus == 0 &&
                                       points[index].plus == 0 && <h1>0</h1>}
                                 </td>
                              </tr>
                           ))}
                     </table>
                  </div>
               </div>
            </div>{" "}
         </Layout>
      </div>
   );
}
