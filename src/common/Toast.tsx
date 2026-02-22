import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";
import { noneVisible } from "../redux/features/toast/toast";
import type { RootState } from "../redux/store";

const Fade = keyframes`
  0% {
    transform: translateY(100px);
    opacity: 0;
  }
  25% {
    transform: translateY(0px);
    opacity: 1;
  }
  50% {
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
  bottom: 50%;
  display: none;
  justify-content: center;
  align-items: center;
  animation: ${Fade} 1.5s infinite linear alternate;
`;

const Content = styled.div`
  font-size: 16px;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #c3c3c3;
  border-radius: 50px;
  background-color: #909090;
  color: #fff;
`;

const Image = styled.img`
  width: 25px;
  margin-right: 10px;
`;

export const Toast: React.FC = () => {
	const message = useSelector((state: RootState) => state.toast.message);
	const status = useSelector((state: RootState) => state.toast.status);
	const dispatch = useDispatch();

	const displayNone = {
		display: "none",
	};

	const displayFlex = {
		display: "flex",
	};

	useEffect(() => {
		if (!status) return;
		const timer = setTimeout(() => {
			dispatch(noneVisible());
		}, 1500);
		return () => clearTimeout(timer);
	}, [status, dispatch]);

	return (
		<Widget style={status ? displayFlex : displayNone}>
			<Content>
				<Image src={"../image/check.png"} />
				{message}
			</Content>
		</Widget>
	);
};
