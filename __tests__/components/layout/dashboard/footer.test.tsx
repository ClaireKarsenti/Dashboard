import Footer from '@/src/components/layout/dashboard/footer/footer';
import { render, screen } from '@testing-library/react';

describe('Footer Component', () => {
  it('renders footer component with correct content', () => {
    render(<Footer />);

    const codedByText = screen.getByText(/Coded with 🤍 by/i);
    const claireKarsentiText = screen.getByText(/Claire Karsenti/i);
    expect(codedByText).toBeInTheDocument();
    expect(claireKarsentiText).toBeInTheDocument();

    const linkedinLink = screen.getByRole('link', { name: /My linkedin/i });
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/claire-karsenti/'
    );
    expect(linkedinLink).toHaveAttribute('target', '_blank');
    expect(linkedinLink).toHaveAttribute('rel', 'noreferrer');
  });

  it('renders footer logo with correct class', () => {
    render(<Footer />);

    const logoElement = screen.getByText(/Claire Karsenti/i);
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveClass('me');
  });
});
