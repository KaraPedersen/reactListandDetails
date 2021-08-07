import React from 'react';
import { render, screen } from '@testing-library/react';
import DetailContainer from './DetailContainer';
import { MemoryRouter } from 'react-router';

describe('DetailContainer', () => {
  it('renders a character to the page', async () => {

    render(<MemoryRouter>
      <DetailContainer
        match={{
          params: {
            id: '5da237699734fdcb7bef8f51'
          }
        }}
      />
    </MemoryRouter>);

    const figure = await screen.findByRole('individual');
    expect(figure).not.toBeEmptyDOMElement();
  });
});
