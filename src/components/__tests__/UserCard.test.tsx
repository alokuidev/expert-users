import { render, screen, fireEvent } from '@testing-library/react';
import UserCard from '../../components/UserCard';
import { User } from '../../types/User';

const mockUser: User = {
  id: 1,
  name: 'John Doe',
  username: 'johnd',
  email: 'john@example.com',
  phone: '1234567890',
  website: 'johndoe.com',
  company: {
    name: 'TestCorp',
    catchPhrase: 'We test stuff',
    bs: 'test-driven development'
  },
  address: {
    street: '',
    suite: '',
    city: '',
    zipcode: '',
    geo: { lat: '', lng: '' }
  }
};

test('renders user info and triggers onClick', () => {
  const onClickMock = jest.fn();
  render(<UserCard user={mockUser} onClick={onClickMock} />);

  expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
  expect(screen.getByText(/@johnd/)).toBeInTheDocument();
  fireEvent.click(screen.getByText(/John Doe/i));
  expect(onClickMock).toHaveBeenCalledWith(1);
});
