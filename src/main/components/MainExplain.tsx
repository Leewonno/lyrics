import styled from "styled-components";
import { motion } from "framer-motion";
import { customChildVariants } from "../../motion/animation";
import useObserver from "../../motion/useObserver";
import { media } from "../../lib/media";

const Container = styled(motion.div)`
  width: 100%;
  padding: 50px 0px;
  display: flex;
  gap: 5rem;
  flex-direction: column;
  align-items: center;
  background-color: #f4f4f4;

  ${media.phone`
    padding: 3rem 1.5rem;
  `}
`;

const Wrapper = styled.div`
  width: 960px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.phone`
    width: 100%;
  `}
`;

const Text = styled.div`
  color: #3f3f3f;
  font-size: 1rem;
  letter-spacing: -0.2px;
  line-height: 1.5rem;

  ${media.phone`
    font-size: 0.9rem;
    text-align: center;
  `}
`;

const Bold = styled.span`
  font-weight: 600;
`;

const WordBox = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;

  ${media.phone`
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
  `}
`;

const Word = styled.div`
  padding: 0.5rem 1rem;
  border-radius: 20px;
  border: 1px solid #000;
  background: rgba(255, 255, 255, 0.05);
  cursor: pointer;
  font-weight: 600;

  &:hover {
    animation: wobble 0.6s ease-in-out;
  }

  ${media.phone`
    padding: 0.4rem 0.9rem;
    font-size: 0.8rem;
  `}
`;

export default function MainExplain() {
  const { ref, animation } = useObserver();

  return (
    <Container ref={ref} animate={animation} variants={customChildVariants}>
      <Wrapper>
        <Text>
          JYP엔터테인먼트 걸그룹 <Bold>NMIXX</Bold> 는
        </Text>
        <Text>
          NOW, NEW, NEXT, 미지수 N을 뜻하는 문자 <Bold>N</Bold>과 조합, 다양성을
          상징하는 단어 <Bold>MIX</Bold>의 합성어로
        </Text>
        <Text>
          <Bold>'새로운 시대를 책임질 최상의 조합'</Bold> 이라는 의미를 갖고
          있습니다.
        </Text>
        <WordBox>
          <Word>NOW</Word>
          <Word>NEW</Word>
          <Word>NEXT</Word>
          <Word>N</Word>
          <Word>MIX</Word>
        </WordBox>
      </Wrapper>
    </Container>
  );
}
