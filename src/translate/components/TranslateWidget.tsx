import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
// import callGPT from "../../common/components/chatgpt/lib/callGPT";
import arrow_back from "../../assets/icons/arrow_back.svg";
import { media } from "../../lib/media";
import { setMessage, visible } from "../../redux/features/toast/toast";
import { TranslateExample } from "./TranslateExample";

const Widget = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

const WidgetForm = styled.form`
  width: 960px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  padding: 2rem;

  ${media.phone`
    width: 100%;
    margin: 0 5% 0;
    padding: 1.2rem;
  `}
`;

const SettingBox = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;

  ${media.phone`
    gap: 1rem;
    flex-wrap: wrap;
  `}
`;

const TimeBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    width: 100px;
    text-align: right;
    padding: 0.5rem;
    font-size: 0.9rem;
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-left: none;
    background: rgba(255, 255, 255, 0.12);
    color: #fff;
    backdrop-filter: blur(4px);
  }

  input:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.2);
  }

  input::-webkit-inner-spin-button,
  input::-webkit-outer-spin-button {
    filter: invert(1);
  }

  label {
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    background: rgba(255, 255, 255, 0.15);
    color: rgba(255, 255, 255, 0.85);
    padding: 0.5rem 0.8rem;
    font-size: 0.9rem;
    white-space: nowrap;
  }

  span {
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-left: none;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    background: rgba(255, 255, 255, 0.15);
    color: rgba(255, 255, 255, 0.85);
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }

  ${media.phone`
    input {
      width: 80px;
      padding: 0.4rem;
      font-size: 0.8rem;
    }

    label {
      padding: 0.4rem 0.7rem;
      font-size: 0.8rem;
    }

    span {
      padding: 0.4rem 0.9rem;
      font-size: 0.8rem;
    }
  `}
`;

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  margin-top: 1rem;
  margin-bottom: 1rem;

  button {
    width: 100px;
    cursor: pointer;
    height: 35px;
    border: none;
    border-radius: 6px;
    color: #fff;
    font-weight: 500;
    user-select: none;
    transition: filter 0.15s, transform 0.15s;
  }

  button:focus {
    outline: 2px solid rgba(200, 200, 250, 0.7);
  }

  button:hover {
    filter: brightness(1.15);
    transform: translateY(-1px);
  }

  button:active {
    transform: translateY(0);
  }

  ${media.phone`
    margin-top: 0;

    button {
      width: 80px;
      height: 30px;
    }
  `}
`;

const InputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  textarea {
    width: 100%;
    height: 350px;
    padding: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    resize: none;
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    color: #fff;
    font-size: 0.95rem;
    line-height: 1.6;
    transition: border-color 0.2s, background 0.2s;
  }

  textarea::placeholder {
    color: rgba(255, 255, 255, 0.35);
  }

  textarea:focus {
    outline: none;
    border-color: rgba(200, 200, 250, 0.6);
    background: rgba(255, 255, 255, 0.12);
  }

  span {
    color: rgba(255, 255, 255, 0.45);
  }

  ${media.phone`
    textarea {
      height: 300px;
    }
  `}
`;

const Image = styled.img`
  transform: rotate(270deg);
  filter: invert(1) opacity(0.6);
`;

export function TranslateWidget() {
	const [lyrics, setLyrics] = useState<string>("");
	const [translation, setTranslation] = useState<string>("");
	const [viewTime, setViewTime] = useState<number>(1);

	const dispatch = useDispatch();

	const toastCall = (msg: string) => {
		dispatch(setMessage(msg));
		dispatch(visible());
	};

	// ==================================================
	// 결과 복사
	const translateCopy = () => {
		navigator.clipboard.writeText(translation);
		toastCall("복사 성공");
	};

	// ==================================================
	// 재생 시간 확인
	const numberCheck = (time: string) => {
		if (Number(time) < 1 && time.length !== 0) {
			alert("재생 시간은 최소 1초 이상이어야 합니다.");
			setViewTime(1);
			return;
		}
		setViewTime(Number(time));
	};

	// ==================================================
	// 가사 입력창 초기화
	const resetTextarea = () => {
		setLyrics("");
		setTranslation("");
		toastCall("초기화 성공");
	};

	// ==================================================
	// 가사 입력 확인
	const translateRun = () => {
		if (!lyrics) {
			alert("가사를 입력해 주세요.");
			return;
		}
		translate();
	};

	// ==================================================
	// 파일 다운로드
	const downloadSrtFile = () => {
		if (!translation) {
			alert("변환된 데이터가 존재하지 않습니다.");
			return;
		}
		const blob = new Blob([translation], {
			type: "text/plain;charset=UTF-8",
		});
		const blobUrl = window.URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.href = blobUrl;
		link.download = `lyrics.srt`;
		link.click();
		link.remove();
		window.URL.revokeObjectURL(blobUrl);
		toastCall("다운로드 성공");
	};

	// ==================================================
	// 가사 변환
	const translate = async () => {
		const content = lyrics.split("\n");
		let result: string = "";
		let emptyIdx = 0;

		content.forEach((value, index) => {
			if (!value) {
				emptyIdx++;
				return;
			}
			const idx: number = index + 1 - emptyIdx;
			const nowIdx = index - emptyIdx;

			const first: string = idx.toString().concat("\n");
			const view_time_origin = nowIdx * viewTime;
			const view_time_next = nowIdx * viewTime + viewTime;

			const origin_hour = Math.floor(view_time_origin / 3600);
			const origin_mins = Math.floor(
				(view_time_origin - origin_hour * 3600) / 60,
			);
			const origin_secs =
				view_time_origin - origin_hour * 3600 - origin_mins * 60;

			const origin_hour_str = String(origin_hour).padStart(2, "0");
			const origin_mins_str = String(origin_mins).padStart(2, "0");
			const origin_secs_str = String(origin_secs).padStart(2, "0");

			const next_hour = Math.floor(view_time_next / 3600);
			const next_mins = Math.floor((view_time_next - next_hour * 3600) / 60);
			const next_secs = view_time_next - next_hour * 3600 - next_mins * 60;

			const next_hour_str = String(next_hour).padStart(2, "0");
			const next_mins_str = String(next_mins).padStart(2, "0");
			const next_secs_str = String(next_secs).padStart(2, "0");

			const second: string =
				`${origin_hour_str}:${origin_mins_str}:${origin_secs_str}:00 --> ${next_hour_str}:${next_mins_str}:${next_secs_str}:00`.concat(
					"\n",
				);
			const third: string = value.concat("\n");
			const sum: string = first + second + third;
			const temp: string = sum;
			result += temp.concat("\n");
		});
		setTranslation(result);
		toastCall("변환 성공");
	};

	return (
		<Widget>
			<WidgetForm>
				<TranslateExample />
				<SettingBox>
					<TimeBox>
						<label htmlFor="view_time">재생시간</label>
						<input
							id="view_time"
							type="number"
							min={1}
							value={viewTime}
							onChange={(e) => numberCheck(e.target.value)}
						/>
						<span>초</span>
					</TimeBox>
					<ButtonBox>
						<button
							style={{ backgroundColor: "#0d6efd" }}
							type="button"
							onClick={translateRun}
						>
							변환
						</button>
						<button
							style={{ backgroundColor: "#dc3545" }}
							type="button"
							onClick={resetTextarea}
						>
							초기화
						</button>
					</ButtonBox>
				</SettingBox>
				<InputBox>
					<textarea
						placeholder="가사를 입력하세요"
						value={lyrics}
						onChange={(e) => setLyrics(e.target.value)}
					/>
					<Image src={arrow_back} alt="arrow_down" />
					<textarea readOnly value={translation} />
				</InputBox>
				<ButtonBox style={{ marginTop: "1rem" }}>
					<button
						style={{ backgroundColor: "#198754" }}
						type="button"
						onClick={translateCopy}
					>
						복사
					</button>
					<button
						style={{ backgroundColor: "#919191" }}
						type="button"
						onClick={downloadSrtFile}
					>
						다운로드
					</button>
				</ButtonBox>
			</WidgetForm>
		</Widget>
	);
}
