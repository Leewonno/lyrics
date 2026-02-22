import styled from "styled-components";
import { TranslateWidget } from "./TranslateWidget";

const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
`;

export function TranslateBox() {
	return (
		<Section>
			<TranslateWidget />
		</Section>
	);
}
