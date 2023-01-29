import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Level } from './Level';

describe('Level test cases', () => {
  it('Level renders correctly', () => {
    const { asFragment } = render(
      <Level>
        {['beginner', 'intermediate', 'expert']}
      </Level>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});