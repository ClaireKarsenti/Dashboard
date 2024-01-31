import RightBar from '@/src/components/layout/dashboard/rightbar/rightbar';
import { render, screen } from '@testing-library/react';

describe('RightBar Component', () => {
  it('renders the correct content', () => {
    render(<RightBar />);

    // Check for the first item
    const firstItem = screen.getByRole('heading', {
      name: 'How to use the new version of the admin dashboard?',
    });
    expect(firstItem).toBeInTheDocument();

    // Check for the notification emoji in the first item
    const firstItemNotification = screen.getByText('🔥 Available Now');
    expect(firstItemNotification).toBeInTheDocument();

    // Check for the title in the first item
    const firstItemTitle = screen.getByText(
      'How to use the new version of the admin dashboard?'
    );
    expect(firstItemTitle).toBeInTheDocument();

    // Check for the subtitle in the first item
    const firstItemSubtitle = screen.getByText('Takes 4 minutes to learn.');
    expect(firstItemSubtitle).toBeInTheDocument();

    // Check for the second item
    const secondItem = screen.getByRole('heading', {
      name: 'New server actions are available, partial pre-rendering is coming up!',
    });
    expect(secondItem).toBeInTheDocument();

    // Check for the notification emoji in the second item
    const secondItemNotification = screen.getByText('🚀 Coming Soon');
    expect(secondItemNotification).toBeInTheDocument();

    // Check for the title in the second item
    const secondItemTitle = screen.getByText(
      'New server actions are available, partial pre-rendering is coming up!'
    );
    expect(secondItemTitle).toBeInTheDocument();

    // Check for the subtitle in the second item
    const secondItemSubtitle = screen.getByText('Boost your productivity!');
    expect(secondItemSubtitle).toBeInTheDocument();
  });

  it('check for the button and its associated icon', () => {
    render(<RightBar />);

    //"learn" button
    const secondItemButton = screen.getByRole('button', { name: 'Learn' });
    expect(secondItemButton).toBeInTheDocument();

    //"play" button
    const firstItemButton = screen.getByRole('button', { name: 'Watch' });
    expect(firstItemButton).toBeInTheDocument();

    //icons
    const iconNames = ['play', 'readMore'];

    iconNames.forEach((iconName) => {
      const icon = screen.getByTestId(`${iconName}-icon`);
      expect(icon).toBeInTheDocument();
    });
  });
});
