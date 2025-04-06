import { render, screen, fireEvent } from '@testing-library/react';
import PhotoGallery from '../PhotoGallery';
import { Photo } from '../../types/Photo';

const mockPhotos: Photo[] = [
  { albumId: 1, id: 201, title: 'Photo One', url: 'http://large1.com', thumbnailUrl: 'http://thumb1.com' },
  { albumId: 1, id: 202, title: 'Photo Two', url: 'http://large2.com', thumbnailUrl: 'http://thumb2.com' },
];

test('renders thumbnails and shows large image on click', () => {
  render(<PhotoGallery photos={mockPhotos} onBack={() => {}} />);
  expect(screen.getByAltText('Large view')).toHaveAttribute('src', 'http://large1.com');
  fireEvent.click(screen.getByAltText('Photo Two'));
  expect(screen.getByAltText('Large view')).toHaveAttribute('src', 'http://large2.com');
});