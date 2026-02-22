import styled from "styled-components";
import { media } from "../../lib/media";

const Widget = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  padding: 1rem 1.5rem;
  margin-bottom: 1.5rem;

  h1 {
    font-size: 1.45rem;
    font-weight: 500;
    color: #ffffff;
    margin-bottom: 5px;
    margin-top: 5px;
  }

  div {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.6);
    transition: all 0.5s;
    line-height: 1.5;
  }

  div span {
    border: none;
    color: #fff;
    padding: 2px 10px;
    border-radius: 3px;
    cursor: pointer;
    font-size: 0.8rem;
  }

  ${media.phone`
    padding: 1rem;

    h1 {
      font-size: 1.2rem;
    }

    div {
      font-size: 0.9rem;
    }

    div span {
      padding: 1px 10px;
    }
  `}
`;

export function TranslateExample() {
	return (
		<Widget>
			<h1>이용 방법</h1>
			<div>① 가사를 입력합니다.</div>
			<div>
				② <span style={{ backgroundColor: "#0d6efd" }}>변환</span> 버튼을
				누릅니다.
			</div>
			<div>
				③ <span style={{ backgroundColor: "#198754" }}>복사</span> 혹은{" "}
				<span style={{ backgroundColor: "#919191" }}>다운로드</span> 버튼을
				누릅니다.
			</div>
		</Widget>
	);
}
