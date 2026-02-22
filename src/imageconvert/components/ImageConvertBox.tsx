import styled from "styled-components";
import { ImageConvertWidget } from "./ImageConvertWidget";

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
`;

export function ImageConvertBox() {
	return (
		<Section>
			<ImageConvertWidget />
		</Section>
	);
}
