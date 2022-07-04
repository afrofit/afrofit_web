import styled from "styled-components";

export const Header = styled.h1`
  font-family: "Roboto";
  font-weight: 700;
  color: orange;
`;

export const Par = styled.p`
  font-family: "Roboto";
  font-weight: 100;
  font-size: 1em;
  color: darkgray;
`;

export const ButtonContainer = styled.div`
  height: 60px;
  width: 300px;
  background-color: red;
  border-radius: 20px;
  overflow: hidden;
  -webkit-box-shadow: 5px 5px 15px -5px rgba(0, 0, 0, 0.26);
  box-shadow: 5px 5px 15px -5px rgba(0, 0, 0, 0.26);
`;

interface GradientProps {
  startColor: number;
  midColor: number;
  endColor: number;
}

export const Gradient = styled.div<GradientProps>`
  background: linear-gradient(
    20deg,
    hsl(${({ startColor }) => startColor}, 60%, 65%),
    hsl(${({ midColor }) => midColor}, 64%, 60%),
    hsl(${({ endColor }) => endColor}, 64%, 60%)
  );
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
