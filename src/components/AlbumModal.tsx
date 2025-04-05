import { useEffect, useState } from "react";
import PhotoGallery from "./PhotoGallery";
import { Album } from "../types/Album";
import { Photo } from "../types/Photo";
import { fetchAlbumsByUser } from "../api/albums";
import { fetchPhotosByAlbum } from "../api/photos";

const AlbumModal = ({ userId, onClose }: { userId: number; onClose: () => void }) => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [selectedAlbumId, setSelectedAlbumId] = useState<number | null>(null);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getAlbums = async () => {
      setLoading(true);
      const albums = await fetchAlbumsByUser(userId);
      setAlbums(albums);
      setLoading(false);
    };
    getAlbums();
  }, [userId]);

  useEffect(() => {
    if (selectedAlbumId) {
      const getPhotos = async () => {
        setLoading(true);
        const photos = await fetchPhotosByAlbum(selectedAlbumId);
        setPhotos(photos);
        setLoading(false);
      };
      getPhotos();
    }
  }, [selectedAlbumId]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center h-screen">
      <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto relative">
        <button
          className="absolute top-2 right-4 text-gray-500 hover:text-red-600 text-xl"
          onClick={onClose}
        >
          ×
        </button>

        {loading ? (
          <div className="loader text-center text-sm text-gray-500 mx-auto"></div>
        ) : !selectedAlbumId ? (
          <>
            <h2 className="text-2xl font-bold mb-4 text-indigo-700">User Albums</h2>
            <div className="space-y-3">
              {albums.map((album) => (
                <div
                  key={album.id}
                  onClick={() => setSelectedAlbumId(album.id)}
                  className="flex items-center gap-2 cursor-pointer p-3 border rounded hover:bg-gray-100 transition"
                >
                  <span className="text-yellow-500">📁</span>
                  <span>{album.title}</span>
                </div>
              ))}
            </div>
          </>
        ) : (
          <PhotoGallery photos={photos} onBack={() => setSelectedAlbumId(null)} />
        )}
      </div>
    </div>
  );
};

export default AlbumModal;
