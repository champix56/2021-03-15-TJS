import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MemeViever from './MemeViever';

describe('<MemeViever />', () => {
  test('it should mount', () => {
    render(<MemeViever />);
    
    const memeViever = screen.getByTestId('MemeViever');

    expect(memeViever).toBeInTheDocument();
  });
});