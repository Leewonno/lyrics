import { useEffect, useState } from "react"

export function TranslateWidget(){

    const [lyrics, setLyrics] = useState<string>("")

    useEffect(()=>{
        console.log(lyrics)
    }, [lyrics])

    return (
        <>
            <form>
                <textarea placeholder="가사를 입력하세요" value={lyrics} onChange={(e)=>setLyrics(e.target.value)}/>
                ▶
                <textarea readOnly />
            </form>
        </>
    )
}