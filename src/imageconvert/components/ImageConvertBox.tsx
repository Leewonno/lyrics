import styled from "styled-components";
import convertBg from "../../assets/images/common_bg.webp";
import { ImageConvertWidget } from "./ImageConvertWidget";

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
  background-image: url(${convertBg});
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(10, 10, 30, 0.65);
  }
`;

export function ImageConvertBox() {
	return (
		<Section>
			<ImageConvertWidget />
		</Section>
	);
}
