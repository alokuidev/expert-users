import { render, screen, waitFor } from '@testing-library/react';
import UsersList from '../../Pages/UsersList';
import * as usersApi from '../../api/users';

const mockUsers = [
  {
    id: 1,
    name: 'John Doe',
    username: 'johnd',
    email: 'john@example.com',
    phone: '1234567890',
    website: 'johndoe.com',
    company: { name: 'TestCorp', catchPhrase: '', bs: '' },
    address: { street: '', suite: '', city: '', zipcode: '', geo: { lat: '', lng: '' } }
  }
];

jest.spyOn(usersApi, 'UserApi').mockResolvedValue(mockUsers);

test('renders list of users from API', async () => {
  render(<UsersList />);
  await waitFor(() => {
    expect(screen.getByText(/John Doe/)).toBeInTheDocument();
  });
});
