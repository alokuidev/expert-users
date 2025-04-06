import React, { useState } from 'react';
import { Photo } from "../types/Photo";

interface PhotoGalleryProps {
  photos: Photo[];
  onBack: () => void;
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos, onBack }) => {
  // State to store the selected large image URL
  const [selectedImage, setSelectedImage] = useState<string>(photos[0]?.url || '');

  // Handle thumbnail click to update large image
  const handleThumbnailClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  return (
    <div>
      <h2 className="text-xl font-bold text-purple-700 mb-4">Photo Gallery</h2>
      <button onClick={onBack} className="text-blue-500 underline mb-4">← Back to Albums</button>
      
      {/* Large Image Section */}
      <div className="mb-4">
        <img
          data-testid="photo-large"  
          src={selectedImage}
          alt="Large view"
          className="w-full max-w-[500px] mx-auto rounded-lg"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://picsum.photos/500'; // Fallback large image
          }}
        />
      </div>

      {/* Thumbnails Section */}
      <div className="grid grid-cols-3 gap-4 max-h-[400px] overflow-auto">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="rounded overflow-hidden shadow-md cursor-pointer"
            onClick={() => handleThumbnailClick(photo.url)} // Set large image on thumbnail click
          >
            <img
              data-testid="photo-thumb"  
              src={photo.thumbnailUrl}
              alt={photo.title}
              className="w-full"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://picsum.photos/150'; // Fallback for thumbnails
              }}
            />
            <p className="text-xs p-2">{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
