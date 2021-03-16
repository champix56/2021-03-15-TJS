import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Titre1 from './Titre1';

describe('<Titre1 />', () => {
  test('it should mount', () => {
    render(<Titre1 />);
    
    const titre1 = screen.getByTestId('Titre1');

    expect(titre1).toBeInTheDocument();
  });
});