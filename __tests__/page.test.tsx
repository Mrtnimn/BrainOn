import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home Page', () => {
  it('renders the home page with status information', () => {
    render(<Home />);

    // Check for main heading
    expect(screen.getByText('Welcome to BrainOn')).toBeInTheDocument();

    // Check for phase information
    expect(
      screen.getByText('Phase 1: Foundation Scaffold - Status Page')
    ).toBeInTheDocument();

    // Check for system status heading
    expect(screen.getByText('System Status')).toBeInTheDocument();

    // Check for key status items
    expect(
      screen.getByText('Next.js 14 with TypeScript')
    ).toBeInTheDocument();
    expect(screen.getByText('Tailwind CSS configured')).toBeInTheDocument();
    expect(
      screen.getByText('Jest & React Testing Library')
    ).toBeInTheDocument();
  });
});
