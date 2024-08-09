import { Translate } from "../translate/Translate";
import MainStyle from "./css/MainStyle";
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

export function Main(){
    return (
        <>
            <MainStyle />
            <Translate />
        </>
    )
}