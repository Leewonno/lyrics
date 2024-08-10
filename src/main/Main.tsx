import { useEffect } from "react";
import { MainBox } from "./components/MainBox";
import MainStyle from "./css/MainStyle";
import { doc, increment, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { getLocalStorage, setLocalStorageTimer } from "../localstorage";
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

export function Main() {

  useEffect(() => {

    const updateView = async () => {
      const today = new Date();
      const year = today.getFullYear();
      const month = ('0' + (today.getMonth() + 1)).slice(-2);
      const day = ('0' + today.getDate()).slice(-2);
      const page = 'main';
      const time = year + month + day;
      const docName = + time + "_" + page;

      if (getLocalStorage(page)===time){
        return;
      }

      setLocalStorageTimer(page, time);

      const docRef = doc(db, "data", docName);
      await setDoc(docRef, { view: increment(1) }, { merge: true });
    }

    updateView()
  }, [])

  return (
    <>
      <MainStyle />
      <MainBox />
    </>
  )
}