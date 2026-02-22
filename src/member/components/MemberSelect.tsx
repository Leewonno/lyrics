import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { media } from "../../lib/media";
import type { MemberType } from "../../redux/features/member/member";
import { setMember } from "../../redux/features/member/member";
import type { AppDispatch, RootState } from "../../redux/store";

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  .active {
    background: rgba(255, 255, 255, 0.9);
    color: #111;
    border-radius: 2rem;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  }

  ${media.phone`
    overflow-x: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  `}
`;

const Button = styled.button`
  padding: 0.5rem 1.5rem;
  border: none;
  background: transparent;
  cursor: pointer;
  font-weight: 700;
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.55);
  transition: color 0.2s, background 0.2s;

  &:not(.active):hover {
    color: rgba(255, 255, 255, 0.9);
    animation: wobble 0.6s ease-in-out;
  }

  ${media.phone`
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
  `}
`;

export default function MemberSelect() {
	const location = useLocation();
	const params = new URLSearchParams(location.search);
	const query = Object.fromEntries(params.entries());
	const dispatch = useDispatch<AppDispatch>();
	const member = useSelector((state: RootState) => state.member.member);

	useEffect(() => {
		if (query.name) {
			dispatch(setMember(query.name as MemberType));
		}
	}, [query.name, dispatch]);

	const handleButtonClick = (name: MemberType) => {
		dispatch(setMember(name));
	};

	return (
		<Box>
			<Button
				onClick={() => handleButtonClick("LILY")}
				className={member === "LILY" ? "active" : ""}
			>
				LILY
			</Button>
			<Button
				onClick={() => handleButtonClick("HAEWON")}
				className={member === "HAEWON" ? "active" : ""}
			>
				HAEWON
			</Button>
			<Button
				onClick={() => handleButtonClick("SULLYOON")}
				className={member === "SULLYOON" ? "active" : ""}
			>
				SULLYOON
			</Button>
			<Button
				onClick={() => handleButtonClick("BAE")}
				className={member === "BAE" ? "active" : ""}
			>
				BAE
			</Button>
			<Button
				onClick={() => handleButtonClick("JIWOO")}
				className={member === "JIWOO" ? "active" : ""}
			>
				JIWOO
			</Button>
			<Button
				onClick={() => handleButtonClick("KYUJIN")}
				className={member === "KYUJIN" ? "active" : ""}
			>
				KYUJIN
			</Button>
		</Box>
	);
}
