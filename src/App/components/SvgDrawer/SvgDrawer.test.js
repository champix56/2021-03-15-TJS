import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SvgDrawer from './SvgDrawer';

describe('<SvgDrawer />', () => {
  test('it should mount', () => {
    render(<SvgDrawer />);
    
    const svgDrawer = screen.getByTestId('SvgDrawer');

    expect(svgDrawer).toBeInTheDocument();
  });
});