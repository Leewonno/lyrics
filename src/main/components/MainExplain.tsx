import { motion } from "framer-motion";
import styled from "styled-components";
import { media } from "../../lib/media";
import { customChildVariants } from "../../motion/animation";
import useObserver from "../../motion/useObserver";

const Container = styled(motion.div)`
  width: 960px;
  padding: 2.5rem 2rem;
  display: flex;
  gap: 3rem;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px;

  ${media.phone`
    width: 90%;
    padding: 2rem 1.2rem;
    gap: 2rem;
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
  color: rgba(255, 255, 255, 0.85);
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
  border: 1px solid rgba(255, 255, 255, 0.5);
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    animation: wobble 0.6s ease-in-out;
    background: rgba(255, 255, 255, 0.18);
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
