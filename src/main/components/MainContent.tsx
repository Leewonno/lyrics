import styled from "styled-components";
import MainSwiper from "./MainSwiper";
import MainExplain from "./MainExplain";
import MainMember from "./MainMember";

const Box = styled.div`
  width: 100%;
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  gap: 8rem;
  align-items: center;

  iframe{
    border-radius: 15px;
    width: 960px;
    height: 540px;
  }

  @media only screen and (max-width: 1050px) {

  }

  @media only screen and (max-width: 400px) {

  }

  @media only screen and (max-width: 350px) {

  }
`;

// const LinkBox = styled.div`
//   width: 100%;
//   margin-top: 50px;
//   display: flex;
//   flex-direction: column;
//   gap: 15px;

//   @media only screen and (max-width: 1050px) {
//     width: 100%;
//     padding: 5%;
//   }
// `

// const PageLinkBox = styled.div`
// `

// const OfficialLinkBox = styled.div`
//   display: flex;
//   flex-direction: row;
//   gap: 15px;
// `

export function MainContent() {
  return (
    <Box>
      {/* MV 슬라이드 */}
      <MainSwiper />
      {/* NMIXX 소개 */}
      <MainExplain />
      {/* 멤버 */}
      <MainMember />
    </Box>
  )
}