import axios from 'axios';
import { Photo } from '../types/Photo';

export const fetchPhotosByAlbum = async (albumId: number): Promise<Photo[]> => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`);
  return response.data;
};
