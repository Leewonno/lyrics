import styled from "styled-components";

const Widget = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 50px;

  h1{
    font-size: 20px;
    font-weight: 300;
    margin-bottom: 5px;
    margin-top: 10px;
  }

  div{
    font-size: 15px;
    color: #b1b1b1;
    transition: all 0.5s;
    margin: 1px 0px;
  }

  div span{
    border: 1px solid #ebebeb;
    color: #fff;
    padding: 1px 5px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 13px;
  }
`;

export function TranslateExample() {
  return (
    <Widget>
      <h1>이용 방법</h1>
      <div>① 가사를 입력합니다.</div>
      <div>② <span style={{ backgroundColor: '#0d6efd' }}>변환</span> 버튼을 누릅니다.</div>
      <div>③ <span style={{ backgroundColor: '#198754' }}>복사</span> 혹은  <span style={{ backgroundColor: '#919191' }}>다운로드</span> 버튼을 누릅니다.</div>
      {/* <h1>팁(TIP)</h1>
      <div>① 자막 재생 시간을 설정할 수 있습니다.</div>
      <div>② 초기화 버튼은 모든 입력 창을 초기화합니다.</div> */}
    </Widget>
  )
}