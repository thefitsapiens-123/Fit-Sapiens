import { toast } from "react-toastify";
import axios from "axios";
import sha1 from "crypto-js/sha1";

const cloudinary = {
  cloud_name: import.meta.env.VITE_CLOUD_NAME,
  api_key: import.meta.env.VITE_CLOUD_API_KEY,
  api_secret: import.meta.env.VITE_CLOUD_API_SECRET,
};

// Upload media file to Cloudinary
export async function uploadMedia(file, onProgress) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "members");

  try {
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${cloudinary.cloud_name}/image/upload`,
      formData,
      {
        onUploadProgress: (progressEvent) => {
          const progress = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          onProgress && onProgress(progress);
        },
      }
    );
    return response.data.secure_url;
  } catch (error) {
    console.error("Error uploading image: ", error.message);
    throw error;
  }
}

// Delete image from Cloudinary
export const deleteImage = async (publicId) => {
  try {
    const timestamp = Math.round(new Date().getTime() / 1000);
    const signature = sha1(
      `public_id=${publicId}&timestamp=${timestamp}${cloudinary.api_secret}`
    ).toString();

    const formData = new FormData();
    formData.append("public_id", publicId);
    formData.append("signature", signature);
    formData.append("api_key", cloudinary.api_key);
    formData.append("timestamp", timestamp.toString());

    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${cloudinary.cloud_name}/image/destroy`,
      formData
    );

    if (response.data.result === "ok") {
      toast.success("Image deleted successfully");
      return true;
    } else {
      throw new Error(response.data.error?.message || "Failed to delete image");
    }
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    console.error("Error deleting image:", errorMessage);
    toast.error(`Failed to delete image: ${errorMessage}`);
    return false;
  }
};

// Get public ID from URL
export const getPublicIdFromUrl = (url) => {
  const parts = url.split("/");
  return parts[parts.length - 1].split(".")[0];
};
