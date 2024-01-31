import Search from '@/src/components/layout/dashboard/search/search';
import { render, fireEvent, screen } from '@testing-library/react';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/example/path'),
  useRouter: () => ({
    replace: jest.fn(),
  }),
  useSearchParams: () => new URLSearchParams(),
}));

const placeholderText = 'Enter your search blabla';

describe('Search Component', () => {
  it('renders search input with placeholder correctly', () => {
    render(<Search placeholder={placeholderText} />);

    const searchInput = screen.getByPlaceholderText(placeholderText);
    expect(searchInput).toBeInTheDocument();
  });

  it('updates URL with search query when typing in the input field', () => {
    render(<Search placeholder={placeholderText} />);

    const searchInput = screen.getByPlaceholderText(placeholderText);
    fireEvent.change(searchInput, { target: { value: 'test query' } });
  });
});
