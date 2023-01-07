export type Cell = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type Field = Cell[][];

export type Coords = [number, number];

export const CellState: Record<string, Cell> = {
  empty: 0,
  bomb: 9,
  hidden: 10,
  mark: 11,
  weakMark: 12,
};

/*
[
  [9, 1, 0, 0, 0, 0, 1, 1, 1],
  [1, 1, 1, 1, 1, 0, 1, 9, 1],
  [0, 0, 1, 9, 1, 0, 2, 2, 2],
  [0, 0, 1, 1, 1, 0, 1, 9, 1],
  [0, 1, 1, 1, 1, 9, 1, 1, 1],
  [0, 1, 9, 2, 1, 2, 2, 3, 2],
  [0, 1, 1, 2, 9, 2, 9, 9, 9],
  [0, 0, 0, 1, 1, 4, 9, 8, 9],
  [0, 0, 0, 0, 0, 1, 9, 9, 9],
]
*/

export const emptyFieldGenerator = (
  size: number,
  state: Cell = CellState.empty
): Field => new Array(size).fill(null).map(
  () => new Array(size).fill(state)
);

export const fieldGenerator = (
  size: number,
  dencity: number,
): Field => {
  if (dencity > 1 || dencity < 0) {
    throw new Error('Dencity must be between 0 and 1')
  }
  const freeCellsCount = size * size;
  const cellsWithBombs = freeCellsCount * dencity;
  const result: Field = emptyFieldGenerator(size);
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (cellsWithBombs === 0) {
        return result;
      }
    }
  }
  return result;
};

