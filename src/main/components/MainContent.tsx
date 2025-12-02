import styled from "styled-components";
import MainSwiper from "./MainSwiper";

const Box = styled.div`
  width: 960px;
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
    transition: all 0.5s;
    background: rgba(0,155,255,1);
    width: 100%;
  }

  a:hover{
    background: rgba(0,99,255,1);
  }

  a img{
    width: 25px;
    margin-right: 5px;
    margin-left: 5px;
  }

  @media only screen and (max-width: 1050px) {

    iframe{
      width: 90%;
      height: 50vw;
    }
  }

  @media only screen and (max-width: 400px) {
    a{
      font-size : 16px;
    }
  }

  @media only screen and (max-width: 350px) {
    a{
      font-size : 11px;
    }
  }
`;

const LinkBox = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media only screen and (max-width: 1050px) {
    width: 100%;
    padding: 5%;
  }
`

const PageLinkBox = styled.div`
`

const OfficialLinkBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`

export function MainContent() {
  return (
    <Box>
      {/* Todo : Swiper 적용해서 슬라이드로 뮤비 넘겨보기 */}
      <MainSwiper />
      
      <LinkBox>
        <PageLinkBox>
          <a href="/translate"><img src="../image/description.png" />자막변환</a>
        </PageLinkBox>
        <OfficialLinkBox>
          <a href="https://www.youtube.com/@NMIXXOfficial" target="_blank">NMIXX_Official<img src="../image/yt.png" /></a>
          <a href="https://x.com/NMIXX_official" target="_blank">NMIXX_Official<img src="../image/x.svg" /></a>
        </OfficialLinkBox>
      </LinkBox>
    </Box>
  )
}