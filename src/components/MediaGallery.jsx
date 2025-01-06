import React, { useState } from "react";
import PreviewImage from "./PreviewImage";

function MediaGallery({ images }) {
  const [preview, setPreview] = useState(null);
  //   console.log(images);
  const handlePreview = (index) => {
    setPreview(images[index]);
  };

  const removePreview = () => {
    setPreview(null);
  };
  return (
    <>
      {images.map((image, index) => (
        <div
          key={index}
          className="relative group"
          onClick={() => handlePreview(index)}
        >
          <img
            src={
              image.url ||
              "https://res.cloudinary.com/dddtsdlk0/image/upload/v1736144110/byrnme8w0fupklk1n8n3.png"
            }
            alt={`Transformation ${index + 1}`}
            className="w-full h-full aspect-video object-cover rounded-lg cursor-pointer"
          />
          <div className="absolute top-2 right-2 bg-primary-700 text-white text-xs p-2 rounded-lg">
            {new Date(image.uploadedAt).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </div>
        </div>
      ))}
      {preview && <PreviewImage image={preview} hide={removePreview} />}
    </>
  );
}

export default MediaGallery;
