import styled from "styled-components";
const MainLinkBoxStyled = styled.section`
  width: 100%;
  margin-top: 150px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  iframe{
    border-radius: 15px;
    width: 960px;
    height: 540px;
  }

  div{
    width: 960px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  a{
    text-decoration: none;
    color: #fff;
    font-size: 18px;
    padding: 10px 10px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #e5e5e5;
  }

  a img{
    width: 25px;
    margin-right: 5px;
  }

  @media only screen and (max-width: 1050px) {
    div{
      width: 100%;
      padding: 5%;
    }

    iframe{
      width: 95%;
      height: 55vw;
    }
  }
`;

export function MainLinkBox() {
  return (
    <MainLinkBoxStyled>
      <iframe src="https://www.youtube.com/embed/7UecFm_bSTU" title="NMIXX “DASH” M/V" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <div>
        <a href="/translate" style={{background: 'linear-gradient(90deg, rgba(0,99,255,1) 0%, rgba(0,155,255,1) 100%)'}}><img src="../image/description.png" />자막변환</a>
        {/* <a href="https://nmixxstream.com/" target="_blank">음원총공팀</a> */}
        {/* <a href="/translate">엔믹스 X</a> */}
      </div>
    </MainLinkBoxStyled>
  )
}