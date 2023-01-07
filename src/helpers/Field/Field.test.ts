import { emptyFieldGenerator, fieldGenerator, CellState } from "./Field";

const { empty, hidden, bomb } = CellState;

describe('Field Generator', () => {
  describe('emptyFieldGenerator tets', () => {

    it('2x2', () => {
      const received = emptyFieldGenerator(2);
      const expected = [
        [empty, empty],
        [empty, empty]
      ];
      expect(received).toStrictEqual(expected);
    });

    it('3x3', () => {
      const received = emptyFieldGenerator(3);
      const expected = [
        [empty, empty, empty],
        [empty, empty, empty],
        [empty, empty, empty]
      ];
      expect(received).toStrictEqual(expected);
    });

    it('3x3, hidden', () => {
      const received = emptyFieldGenerator(3, hidden);
      const expected = [
        [hidden, hidden, hidden],
        [hidden, hidden, hidden],
        [hidden, hidden, hidden]
      ];
      expect(received).toStrictEqual(expected);
    });

  })

  describe('Simple cases', () => {
    it('Wrong Dencity', () => {
      const errorText = 'Dencity must be between 0 and 1';
      expect(() => fieldGenerator(1, -1)).toThrow(errorText);
      expect(() => fieldGenerator(1, 2)).toThrow(errorText);
    });

    it('Smallest field without mine', () => {
      const received = fieldGenerator(1, 0);
      const expected = [[empty]];
      expect(received).toStrictEqual(expected);
    });

    it('Big field without mine', () => {
      const received = fieldGenerator(10, 0);
      const expected = [
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty,],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty,],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty,],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty,],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty,],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty,],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty,],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty,],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty,],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty,],
      ];
      expect(received).toStrictEqual(expected);
    });

    /* it('Smallest field with mine', () => {
      const received = fieldGenerator(1, 1);
      const expected = [[bomb]];
      expect(received).toStrictEqual(expected);
    }); */
  })
})