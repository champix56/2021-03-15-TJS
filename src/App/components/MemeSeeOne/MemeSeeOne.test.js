import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MemeSeeOne from './MemeSeeOne';

describe('<MemeSeeOne />', () => {
  test('it should mount', () => {
    render(<MemeSeeOne />);
    
    const memeSeeOne = screen.getByTestId('MemeSeeOne');

    expect(memeSeeOne).toBeInTheDocument();
  });
});