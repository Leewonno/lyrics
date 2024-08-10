import { useEffect } from "react";
import { doc, increment, setDoc } from "firebase/firestore";
import { db } from "../firebase"

import { TranslateBox } from "./components/TranslateBox";
import TranslateStyle from "./css/TranslateStyle";
import { getLocalStorage, setLocalStorageTimer } from "../localstorage";

export function Translate() {

  useEffect(() => {
    const updateView = async () => {
      const today = new Date();
      const year = today.getFullYear();
      const month = ('0' + (today.getMonth() + 1)).slice(-2);
      const day = ('0' + today.getDate()).slice(-2);
      const page = 'translate';
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
      <TranslateStyle />
      <TranslateBox />
    </>
  )
}