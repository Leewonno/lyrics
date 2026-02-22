import styled from "styled-components";
import translateBg from "../../assets/images/translate_bg.jpg";
import { TranslateWidget } from "./TranslateWidget";

const Section = styled.section`
  width: 100%;
  min-height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
  background-image: url(${translateBg});
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

export function TranslateBox() {
	return (
		<Section>
			<TranslateWidget />
		</Section>
	);
}
