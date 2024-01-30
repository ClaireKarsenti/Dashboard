import Card from '@/src/components/layout/dashboard/card/card';
import { render, screen } from '@testing-library/react';

describe('Card Component', () => {
  const testProps = {
    title: 'Test Title',
    number: 100,
    change: 10,
  };

  it('renders Card component with correct props', () => {
    render(<Card {...testProps} />);
    const title = screen.getByText(testProps.title);
    const number = screen.getByText(testProps.number.toString());
    const change = screen.getByText(`${testProps.change}%`);

    expect(title).toBeInTheDocument();
    expect(number).toBeInTheDocument();
    expect(change).toBeInTheDocument();

    // const changeText = testProps.change > 0 ? 'more' : 'less';
    // expect(changeText).toBeInTheDocument();
  });
});
