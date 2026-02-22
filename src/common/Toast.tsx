import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";
import { noneVisible } from "../redux/features/toast/toast";
import type { RootState } from "../redux/store";

const slideUp = keyframes`
  0% {
    transform: translateY(16px);
    opacity: 0;
  }
  15% {
    transform: translateY(0);
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const Widget = styled.div`
  width: 100%;
  position: fixed;
  bottom: 2rem;
  left: 0;
  display: none;
  justify-content: center;
  align-items: center;
  animation: ${slideUp} 1.5s ease-out forwards;
  z-index: 9999;
  pointer-events: none;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.1rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #ffffff;
  background: rgba(15, 15, 35, 0.85);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  white-space: nowrap;
`;

const CheckIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.18);
  font-size: 0.65rem;
  flex-shrink: 0;
`;

export const Toast: React.FC = () => {
	const message = useSelector((state: RootState) => state.toast.message);
	const status = useSelector((state: RootState) => state.toast.status);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!status) return;
		const timer = setTimeout(() => {
			dispatch(noneVisible());
		}, 1500);
		return () => clearTimeout(timer);
	}, [status, dispatch]);

	return (
		<Widget style={{ display: status ? "flex" : "none" }}>
			<Content>
				<CheckIcon>✓</CheckIcon>
				{message}
			</Content>
		</Widget>
	);
};
