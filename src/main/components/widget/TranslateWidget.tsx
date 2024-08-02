import { useState } from "react"
import { Toast } from "./Toast"

export function TranslateWidget() {

  const [lyrics, setLyrics] = useState<string>("")
  const [translation, setTranslation] = useState<string>("")
  const [viewTime, setViewTime] = useState<number>(1)

  const [message, setMessage] = useState<string>("")

  // const setViewTimePromise = new Promise<void>((resolve)=>{
  //   setTranslation("");
  //   resolve();
  // })

  const translateCopy = ()=>{
    navigator.clipboard.writeText(translation);
    setMessage("복사되었습니다!")
  }

  const numberCheck = (time:string)=>{
    if (Number(time) < 1 && time.length != 0){
      alert("재생시간은 1이상 입력해야합니다!");
      setViewTime(1);
      return;
    }

    setViewTime(Number(time))
  }

  const resetTextarea = ()=>{
    setLyrics("")
    setTranslation("")
  }

  const translateRun = ()=>{
    if (!lyrics){
      alert("가사를 입력해 주세요!")
      return;
    }
    translate()
  }

  const translate = async () => {
    // const res = await setViewTimePromise
    const content = lyrics.split('\n')
    let result:string = ""
    
    content.map((value, index)=>{
      const idx : number = index + 1;
      const first : string = idx.toString().concat("\n");
      const second : string = `00:${index * viewTime}:00 --> 00:${index * viewTime + viewTime}:00`.concat("\n");
      const third : string = value.concat("\n");
      const sum : string = first + second + third;
      const temp : string = translation + sum;
      result+=temp.concat("\n");      
    })
    setTranslation(result)
  }

  return (
    <>
      <Toast>{message}</Toast>
      <form>
        <textarea placeholder="가사를 입력하세요" value={lyrics} onChange={(e) => setLyrics(e.target.value)} />
        <button type="button" onClick={resetTextarea}>초기화</button>
        ▶
        <button type="button" onClick={translateCopy}>복사</button>
        <textarea readOnly value={translation} />
        <input type="number" min={1} value={viewTime} onChange={(e)=> numberCheck(e.target.value)}/>
        <button type="button" onClick={translateRun}>변환</button>
      </form>
    </>
  )
}