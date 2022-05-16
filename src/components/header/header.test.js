import React from 'react';
import { screen, render } from '@testing-library/react';
import Header from './header';

describe('given the header component', () => {
    it('should render a heading', () => {
        //arrange
        render(<Header />);
        //act
        const title = screen.getByRole('heading', {name: /roman converter/i});
        //assert
        expect(title).toBeInTheDocument();
    });
});

