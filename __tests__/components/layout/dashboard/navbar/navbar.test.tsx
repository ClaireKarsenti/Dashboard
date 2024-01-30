import Navbar from '@/src/components/layout/dashboard/navbar/navbar';
import { render, screen } from '@testing-library/react';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/example/path'),
}));

describe('Navbar Component', () => {
  it('renders navbar component with correct title', () => {
    render(<Navbar />);

    const titleElement = screen.getByText('path');
    expect(titleElement).toBeInTheDocument();
  });

  it('renders navbar component with search input and icons', () => {
    render(<Navbar />);

    const searchInput = screen.getByPlaceholderText('Search...');
    expect(searchInput).toBeInTheDocument();

    const searchIcon = screen.getByTestId('search-icon');
    const chatIcon = screen.getByTestId('chat-icon');
    const notificationsIcon = screen.getByTestId('notifications-icon');
    const publicIcon = screen.getByTestId('public-icon');

    expect(searchIcon).toBeInTheDocument();
    expect(chatIcon).toBeInTheDocument();
    expect(notificationsIcon).toBeInTheDocument();
    expect(publicIcon).toBeInTheDocument();
  });
});
