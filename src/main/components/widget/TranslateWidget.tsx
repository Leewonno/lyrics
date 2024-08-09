import { useState } from "react"
import { Toast } from "./Toast"
import { useDispatch, useSelector } from 'react-redux'
import { visible, non_visible } from '../../../redux/toast';

export function TranslateWidget() {

  const [lyrics, setLyrics] = useState<string>("")
  const [translation, setTranslation] = useState<string>("")
  const [viewTime, setViewTime] = useState<number>(1)

  const [message, setMessage] = useState<string>("")

  const toast = useSelector((state) => state.visible.value)
  const dispatch = useDispatch();
  

  const translateCopy = () => {
    navigator.clipboard.writeText(translation);
    dispatch(visible())
    setTimeout(()=>{
      dispatch(non_visible())
    }, 5000)
    setMessage("복사되었습니다!")
  }

  const numberCheck = (time: string) => {
    if (Number(time) < 1 && time.length != 0) {
      alert("재생시간은 1이상 입력해야합니다!");
      setViewTime(1);
      return;
    }

    setViewTime(Number(time))
  }

  const resetTextarea = () => {
    setLyrics("")
    setTranslation("")
  }

  const translateRun = () => {
    if (!lyrics) {
      alert("가사를 입력해 주세요!")
      return;
    }
    translate()
  }

  const translate = async () => {
    const content = lyrics.split('\n')
    let result: string = ""

    content.map((value, index) => {
      const idx: number = index + 1;
      const first: string = idx.toString().concat("\n");
      const view_time_origin = index * viewTime;
      const view_time_next = index * viewTime + viewTime;

      const origin_hour = Math.floor(view_time_origin/3600)
      const origin_mins = Math.floor((view_time_origin - origin_hour*3600)/60)
      const origin_secs = view_time_origin - origin_hour*3600 - origin_mins*60

      const next_hour = Math.floor(view_time_next/3600)
      const next_mins = Math.floor((view_time_next - next_hour*3600)/60)
      const next_secs = view_time_next - next_hour*3600 - next_mins*60

      const second: string = `${origin_hour}:${origin_mins}:${origin_secs}:00 --> ${next_hour}:${next_mins}:${next_secs}:00`.concat("\n");
      const third: string = value.concat("\n");
      const sum: string = first + second + third;
      const temp: string = translation + sum;
      result += temp.concat("\n");
    })
    setTranslation(result)
  }

  return (
    <>
      {
      toast ?
      <Toast>{message}</Toast>
      :
      <></>
      }
      
      <form>
        <div>
          <textarea placeholder="가사를 입력하세요" value={lyrics} onChange={(e) => setLyrics(e.target.value)} />
          <button type="button" onClick={resetTextarea}>초기화</button>
        </div>
        ▶
        <div>
          <button type="button" onClick={translateCopy}>복사</button>
          <textarea readOnly value={translation} />
          <input type="number" min={1} value={viewTime} onChange={(e) => numberCheck(e.target.value)} />
        </div>
        <button type="button" onClick={translateRun}>변환</button>
      </form>
    </>
  )
}