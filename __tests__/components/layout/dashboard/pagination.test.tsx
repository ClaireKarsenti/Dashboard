import Pagination from '@/src/components/layout/dashboard/pagination/pagination';
import { render, screen, fireEvent } from '@testing-library/react';

// Mocking the useRouter, useSearchParams, usePathname hooks
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    replace: jest.fn(),
  }),
  useSearchParams: jest.fn(() => new URLSearchParams('page=1')),
  usePathname() {
    return '/';
  },
}));

describe('Pagination Component', () => {
  it('renders pagination buttons correctly', () => {
    render(<Pagination count={20} />);

    const prevButton = screen.getByRole('button', { name: 'Previous' });
    const nextButton = screen.getByRole('button', { name: 'Next' });

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  it('disables previous button on first page', () => {
    render(<Pagination count={20} />);

    const prevButton = screen.getByRole('button', { name: 'Previous' });

    expect(prevButton).toBeDisabled();
  });

  it('enables previous button on second page', () => {
    jest
      .spyOn(require('next/navigation'), 'useSearchParams')
      .mockReturnValueOnce(new URLSearchParams('page=2'));

    render(<Pagination count={2} />);

    const prevButton = screen.getByRole('button', { name: 'Previous' });

    expect(prevButton).toBeEnabled();
  });

  it('calls replace function with updated page when clicking Next button', () => {
    const mockReplace = jest.fn();
    jest
      .spyOn(require('next/navigation'), 'useRouter')
      .mockReturnValueOnce({ replace: mockReplace });

    render(<Pagination count={10} />);

    const nextButton = screen.getByRole('button', { name: 'Next' });
    fireEvent.click(nextButton);

    expect(mockReplace).toHaveBeenCalledWith('/?page=2');
  });
});
