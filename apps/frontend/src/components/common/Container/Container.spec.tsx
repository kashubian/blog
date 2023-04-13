import { it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Container from '.';

it('should render container component with optional className', () => {
  const mockClassName = 'custom-classname';
  render(
    <Container className={mockClassName}>
      <div data-testid="child">Child Element</div>
    </Container>
  );

  const container = screen.getByTestId('container');
  expect(container).toHaveClass('container');
  expect(container).toHaveClass(mockClassName);

  const childElement = screen.getByTestId('child');
  expect(childElement).toBeInTheDocument();
  expect(screen.getByText('Child Element')).toBeInTheDocument();
});
