import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AppCore from './AppCore';

describe('<AppCore />', () => {
  test('it should mount', () => {
    render(<AppCore />);
    
    const appCore = screen.getByTestId('AppCore');

    expect(appCore).toBeInTheDocument();
  });
});