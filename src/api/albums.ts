import axios from 'axios';
import { Album } from '../types/Album';

export const fetchAlbumsByUser = async (userId: number): Promise<Album[]> => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/albums`);
  return response.data;
};
