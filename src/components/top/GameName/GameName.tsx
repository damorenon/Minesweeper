import styled from "@emotion/styled";

export interface GameNameProps {
  /**
    The name of the game
  */
  children: string;
};

export const GameName = styled.h1<GameNameProps>`
  font-size: 2em;
`;