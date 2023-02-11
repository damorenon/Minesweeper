import React, { FC, useState } from "react";

import { GameLevels, LevelNames, GameSettings } from "../GameSettings";

import { emptyFieldGenerator, CellState } from '@/helpers/Field';

import { Top } from '@/components/Top';
import { Scoreboard } from '@/components/Scoreboard';
import { Grid } from '@/components/Grid';
import { GameArea, Wrapper, GameOver } from '@/components/Game';

/* const StaticField: Field = [
  [9, 2, 9, 1, 0, 0, 1, 1, 1, 1, 1, 1],
  [1, 2, 2, 2, 1, 0, 1, 9, 1, 1, 9, 1],
  [0, 0, 1, 9, 10, 0, 2, 2, 2, 1, 1, 1],
  [0, 0, 10, 10, 1, 0, 1, 9, 1, 2, 2, 2],
  [0, 1, 1, 2, 2, 9, 1, 1, 1, 0, 0, 0],
  [0, 1, 9, 3, 9, 2, 10, 0, 0, 2, 1, 1],
  [0, 2, 2, 4, 9, 2, 10, 1, 1, 1, 9, 1],
  [0, 1, 9, 2, 1, 1, 1, 9, 1, 2, 2, 2],
  [0, 1, 10, 10, 0, 0, 1, 1, 1, 1, 9, 1],
  [0, 1, 10, 10, 0, 0, 1, 1, 1, 1, 9, 1],
  [0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 9, 1],
  [0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 9, 1],
]; */

export const GameWithHooks: FC = () => {
  const [level, setLevel] = useState<LevelNames>('beginner');
  const [size, bombs] = GameSettings[level];
  const playerField = emptyFieldGenerator(size, CellState.hidden);
  return (
    <Wrapper>
      <Top feature="Flag" firstAction="right click">
        Minesweeper
      </Top>
      <GameArea>
        <Scoreboard
          time="0"
          bombs="10"
          levels={GameLevels}
          defaultLevel={level}
          onReset={() => null}
          onChangeLevel={({ target: { value } }) => setLevel(value as LevelNames)}
        />
        <GameOver onClick={() => null} isWin={true} />
        <Grid onClick={() => null} onContextMenu={() => null}>
          {playerField}
        </Grid>
      </GameArea>
    </Wrapper>
  );
}