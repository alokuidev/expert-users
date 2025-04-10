import { render, screen, waitFor } from '@testing-library/react';
import AlbumModal from '../AlbumModal'
import * as albumApi from '../../api/albums';
import { vi } from 'vitest';
const mockAlbums = [
  { userId: 1, id: 101, title: 'My First Album' },
];

vi.spyOn(albumApi, 'fetchAlbumsByUser').mockResolvedValue(mockAlbums);

test('displays album list for selected user', async () => {
  render(<AlbumModal userId={1} onClose={() => {}} />);
  await waitFor(() => {
    expect(screen.getByText(/My First Album/)).toBeInTheDocument();
  });
});
