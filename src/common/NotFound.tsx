import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import notFoundBg from "../assets/images/not_found_bg.jpg";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${notFoundBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.55);
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  text-align: center;
  padding: 2rem;
  animation: ${fadeIn} 0.8s ease forwards;
`;

const Code = styled.p`
  font-size: 7rem;
  font-weight: 900;
  color: #ffffff;
  line-height: 1;
  letter-spacing: -4px;
  text-shadow: 0 4px 24px rgba(0, 0, 0, 0.5);

  @media (max-width: 480px) {
    font-size: 5rem;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.65);
`;

const HomeButton = styled.button`
  margin-top: 0.8rem;
  padding: 0.75rem 2rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: #ffffff;
  background: rgba(255, 255, 255, 0.15);
  border: 1.5px solid rgba(255, 255, 255, 0.5);
  border-radius: 999px;
  cursor: pointer;
  backdrop-filter: blur(6px);
  transition: background 0.2s, border-color 0.2s, transform 0.15s;

  &:hover {
    background: rgba(255, 255, 255, 0.28);
    border-color: rgba(255, 255, 255, 0.8);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export default function NotFound() {
	const navigate = useNavigate();

	return (
		<Section>
			<Content>
				<Code>404</Code>
				<Title>페이지를 찾을 수 없습니다</Title>
				<Description>
					요청하신 페이지가 존재하지 않거나 이동되었습니다.
				</Description>
				<HomeButton onClick={() => navigate("/")}>홈으로 돌아가기</HomeButton>
			</Content>
		</Section>
	);
}
