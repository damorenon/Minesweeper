import React from 'react';
import { render, screen, fireEvent, createEvent } from '@testing-library/react';

import { CellState, Cell as CellType, Coords } from "@/helpers/field/Field";

import { Cell, ClosedFrame, isActiveCell } from './Cell';
describe('Cell component check', () => {
  const coords: Coords = [1, 1];
  const props = {
    coords,
    flagCounter: 0,
    bombs: 10,
    onClick: jest.fn(),
    onContextMenu: jest.fn(),
  };

  for (let cell = CellState.empty; cell <= CellState.weakFlag; cell++) {

    it('Check prevent default contextMenu for every type of cell', () => {
      render(<Cell {...props}>{cell}</Cell>);
      const cellComp = screen.getByTestId(`${cell}_${coords}`);
      const contextMenuEvent = createEvent.contextMenu(cellComp);
      fireEvent(cellComp, contextMenuEvent);
      expect(contextMenuEvent.defaultPrevented).toBe(true);
    });

    it('onClick and onContextMenu handler should be called for active cells', () => {
      render(<Cell {...props}>{cell}</Cell>);
      const cellComp = screen.getByTestId(`${cell}_${coords}`);
      fireEvent.click(cellComp);
      fireEvent.contextMenu(cellComp);
      if (isActiveCell(cell)) {
        expect(props.onClick).toBeCalled();
        expect(props.onContextMenu).toBeCalled();
      } else {
        expect(props.onClick).not.toBeCalled();
        expect(props.onContextMenu).not.toBeCalled();
      }
    });

  }

});
