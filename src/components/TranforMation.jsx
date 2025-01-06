import { Upload, Trash2, Check } from "lucide-react";
import React, { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { uploadMedia } from "../firebase/cloudnary";
import { toast } from "react-toastify";
import { auth, dataBase } from "../firebase/firebaseConfig";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import MediaGallery from "./MediaGallery";

function Transformation() {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [uploadedImages, setUploadedImages] = useState([]);

  // Fetch existing images on component mount
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const userDoc = await getDoc(
          doc(dataBase, "users", auth.currentUser.uid)
        );
        const userData = userDoc.data();
        if (userData?.transformationImages) {
          setUploadedImages(userData.transformationImages);
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    if (auth.currentUser?.uid) {
      fetchImages();
    }
  }, []);

  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (!file) return;

    // Create preview
    const objectUrl = URL.createObjectURL(file);
    setPreviewImage({
      file,
      preview: objectUrl,
    });

    // Reset upload state
    setUploadProgress(0);
    setIsUploading(false);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".gif"],
    },
    maxSize: 10 * 1024 * 1024,
    multiple: false,
  });

  const handleDelete = () => {
    if (previewImage?.preview) {
      URL.revokeObjectURL(previewImage.preview);
    }
    setPreviewImage(null);
    setUploadProgress(0);
    setIsUploading(false);
  };

  const handleUpload = async () => {
    if (!previewImage?.file) return;

    try {
      setIsUploading(true);
      const uploadedUrl = await uploadMedia(
        previewImage.file,
        setUploadProgress
      );

      if (uploadedUrl) {
        const userDocRef = doc(dataBase, "users", auth.currentUser.uid);
        const newImage = {
          url: uploadedUrl,
          uploadedAt: new Date().toISOString(),
        };

        const updatedImages = [...uploadedImages, newImage];

        await updateDoc(userDocRef, {
          transformationImages: updatedImages,
        });

        setUploadedImages(updatedImages);
        setPreviewImage(null);
        toast.success("Image uploaded successfully!");
      }
    } catch (error) {
      toast.error("Failed to upload image!");
      console.error("Upload error:", error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="mt-4 bg-neutral-900 rounded-xl shadow p-4 sm:p-7">
      <h2 className="text-2xl font-medium text-white mb-6">
        Upload Your Transformation
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Upload Area */}
        <div className=" ">
          {!previewImage ? (
            <div
              {...getRootProps()}
              className={`cursor-pointer p-12 flex justify-center bg-neutral-800 border-2 border-dashed 
                ${
                  isDragActive
                    ? "border-primary-500 bg-neutral-700"
                    : "border-primary-700"
                } 
                rounded-xl transition-colors duration-200 ease-in-out`}
            >
              <input {...getInputProps()} />
              <div className="text-center">
                <span className="inline-flex justify-center items-center size-16 bg-neutral-900 text-gray-100 rounded-full">
                  <Upload />
                </span>

                <div className="mt-4 flex flex-wrap justify-center text-sm leading-6 text-gray-100">
                  {isDragActive ? (
                    <span>Drop the file here...</span>
                  ) : (
                    <>
                      <span className="pe-1">Drop your file here or</span>
                      <span className="text-primary-500 font-semibold hover:text-primary-400">
                        browse
                      </span>
                    </>
                  )}
                </div>

                <p className="mt-1 text-xs text-gray-400">
                  Accepts images up to 10MB
                </p>
              </div>
            </div>
          ) : (
            <div className="bg-neutral-800 rounded-xl p-4">
              <img
                src={previewImage.preview}
                alt="Preview"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />

              {isUploading ? (
                <div className="mt-4 w-full">
                  <div className="h-2 w-full bg-neutral-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary-500 transition-all duration-200 ease-out"
                      style={{ width: `${uploadProgress}%` }}
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-400 text-center">
                    Uploading... {uploadProgress}%
                  </p>
                </div>
              ) : (
                <div className="flex justify-center gap-4">
                  <button
                    onClick={handleDelete}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg flex items-center gap-2 hover:bg-red-700 transition-colors"
                    disabled={isUploading}
                  >
                    <Trash2 size={18} />
                    Delete
                  </button>
                  <button
                    onClick={handleUpload}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg flex items-center gap-2 hover:bg-green-700 transition-colors"
                    disabled={isUploading}
                  >
                    <Check size={18} />
                    Upload
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Uploaded Images Grid */}
        <MediaGallery images={uploadedImages} />
      </div>
    </div>
  );
}

export default Transformation;
