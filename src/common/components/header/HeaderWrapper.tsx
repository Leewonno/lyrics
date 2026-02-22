import styled from "styled-components";
import { media } from "../../../lib/media";
import { HeaderLeft } from "./HeaderLeft";
import { HeaderRight } from "./HeaderRight";

const Compoent = styled.div`
  display: flex;
  width: 960px;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0px;

  ${media.phone`
    width: 100%;
    padding: 20px;
  `}
`;

export function HeaderWrapper() {
	return (
		<Compoent>
			<HeaderLeft />
			<HeaderRight />
		</Compoent>
	);
}
