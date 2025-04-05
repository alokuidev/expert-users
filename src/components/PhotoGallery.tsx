import { Photo } from "../types/Photo";

interface PhotoGalleryProps {
  photos: Photo[];
  onBack: () => void;
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos, onBack }) => {
  return (
    <div>
      <h2 className="text-xl font-bold text-purple-700 mb-4">Photo Gallery</h2>
      <button onClick={onBack} className="text-blue-500 underline mb-4">← Back to Albums</button>
      <div className="grid grid-cols-3 gap-4 max-h-[400px] overflow-auto">
        {photos.map((photo) => (
          <div key={photo.id} className="rounded overflow-hidden shadow-md">
            <img src={photo.thumbnailUrl} alt={photo.title} className="w-full" 
            onError={(e) => {

                const target = e.target as HTMLImageElement;
                target.src = 'https://picsum.photos/150'; 
            }
            } />
            <p className="text-xs p-2">{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
