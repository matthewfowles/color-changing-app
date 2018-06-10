import styled, { injectGlobal, keyframes } from "styled-components";
import colors from "./colors.json";

injectGlobal`
  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  overflow: scroll;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  height: 50%;
  background: ${colors.header};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  color: ${colors.title};
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-size: 48px;
`;

export const Section = styled.section`
  flex: 1;
  height: auto;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${colors.section};
`;

export const Card = styled.figure`
  width: 33%;
  background: ${colors.card};
  height: 110%;
  margin: -10% 12px 0 12px;
  border-radius: 4px;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.2);
  padding: 24px;
`;

const shine = keyframes`
		to {
			background-position:
				0 0,
				100% 0, /* move highlight to right */
				120px 0,
				120px 40px,
				120px 80px,
				120px 120px;
		}
`;

export const Content = styled.figcaption`
  width: 100%;
  height: 100%;

  background-image: radial-gradient(
      circle 50px at 50px 50px,
      ${colors.content} 99%,
      transparent 0
    ),
    linear-gradient(
      100deg,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 80%
    ),
    linear-gradient(${colors.content} 20px, transparent 0),
    linear-gradient(${colors.content} 20px, transparent 0),
    linear-gradient(${colors.content} 20px, transparent 0),
    linear-gradient(${colors.content} 20px, transparent 0);

  background-repeat: repeat-y;

  background-size: 100px 200px, /* circle */ 50px 200px,
    /* highlight */ 150px 200px, 350px 200px, 300px 200px, 250px 200px;

  background-position: 0 0, /* circle */ 0 0, /* highlight */ 120px 0,
    120px 40px, 120px 80px, 120px 120px;

  animation: ${shine} 1s infinite;
`;
