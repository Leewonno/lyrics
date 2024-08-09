import { TranslateWidget } from "../widget/TranslateWidget";
import style from '../../css/main.module.css'

export function TranslateBox(){
    return (
        <>
            <section className={style.mainBox}>
                <TranslateWidget />
            </section>
        </>
    )
}