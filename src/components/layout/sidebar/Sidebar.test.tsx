import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './Sidebar';
import RoutesPaths from '../../../utils/routesPaths';

describe('Sidebar Component', () => {
  const mockOnSelect = jest.fn();

  beforeEach(() => {
    mockOnSelect.mockClear();
  });

  test('should toggle sidebar open and close', () => {
    render(
      <Router>
        <Sidebar onSelect={mockOnSelect} />
      </Router>
    );

    const toggleButton = screen.getByLabelText('Toggle Sidebar');

    // Check if sidebar is closed by default
    expect(screen.getByTestId('sidebar')).not.toHaveClass('open');

    // Open sidebar
    fireEvent.click(toggleButton);
    expect(screen.getByTestId('sidebar')).toHaveClass('open');

    // Close sidebar
    fireEvent.click(toggleButton);
    expect(screen.getByTestId('sidebar')).not.toHaveClass('open');
  });

  test('should call onSelect when a menu item is clicked', () => {
    render(
      <Router>
        <Sidebar onSelect={mockOnSelect} />
      </Router>
    );

    const usersMenuItem = screen.getByText('Users');

    fireEvent.click(usersMenuItem);
    expect(mockOnSelect).toHaveBeenCalledWith('users');
  });

  test('should render correct links', () => {
    render(
      <Router>
        <Sidebar onSelect={mockOnSelect} />
      </Router>
    );

    expect(screen.getByText('Dashboard').closest('a')).toHaveAttribute('href', RoutesPaths.dashboard);
    expect(screen.getByText('Users')).toBeInTheDocument();

  });
});
