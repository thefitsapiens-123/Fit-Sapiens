import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { File, Forward, MailCheck, Trash2, Upload } from "lucide-react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { doc, updateDoc } from "firebase/firestore";
import { dataBase } from "../firebase/firebaseConfig"; // Add this import
import { uploadMedia } from "../firebase/cloudnary";

function UploadFIle({ email, id, displayName }) {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      setUploadedFile({ file, preview: URL.createObjectURL(file) });
      try {
        const fileUrl = await uploadMedia(file, setUploadProgress);
        setUploadedFile((prev) => ({ ...prev, url: fileUrl }));
        toast.success("File uploaded successfully!");
      } catch (error) {
        toast.error("Failed to upload file!");
        setUploadedFile(null);
      }
    }
  }, []);

  const handleRemoveFile = () => {
    if (uploadedFile) {
      URL.revokeObjectURL(uploadedFile.preview);
      setUploadedFile(null);
      setUploadProgress(0);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        "service_cxg5w7f",
        "template_1mn4sng",
        e.target,
        "AwxMEDTaCcNQPzel4"
      );
      toast.success("Email sent successfully!");
    } catch (error) {
      toast.error("Failed to send email!");
    }
    try {
      const userDocRef = doc(dataBase, "users", id);
      await updateDoc(userDocRef, {
        memberPDF: uploadedFile.url,
        status: "DOWNLOAD",
      });
      toast.success("User status updated successfully!");
    } catch (error) {
      toast.error("Failed to update user data!");
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".gif"],
      "application/pdf": [".pdf"],
    },
    maxSize: 5 * 1024 * 1024,
    multiple: false,
  });

  useEffect(() => {
    return () => {
      if (uploadedFile?.preview) {
        URL.revokeObjectURL(uploadedFile.preview);
      }
    };
  }, [uploadedFile]);

  return (
    <div className="min-h-full relative min-w-fit">
      <div className="m-auto md:sticky top-24 right-0 z-10">
        {!uploadedFile ? (
          <div
            {...getRootProps()}
            className="cursor-pointer p-12 flex justify-center bg-white border border-dashed border-gray-300 rounded-xl"
          >
            <input {...getInputProps()} />
            <div className="text-center">
              <span className="inline-flex justify-center items-center size-16 bg-gray-100 text-gray-800 rounded-full">
                <Upload />
              </span>
              <div className="mt-4 flex flex-wrap justify-center text-sm leading-6 text-gray-600">
                <span className="pe-1 font-medium text-gray-800">
                  Drop your file here or
                </span>
                <span className="bg-white font-semibold text-primary-600 hover:text-primary-700 rounded-lg decoration-2 hover:underline focus-within:outline-none focus-within:ring-2 focus-within:ring-primary-600 focus-within:ring-offset-2">
                  browse
                </span>
              </div>
              <p className="mt-1 text-xs text-gray-400">
                Pick a file up to 5MB.
              </p>
            </div>
          </div>
        ) : (
          <div className="p-3 bg-white border border-solid border-gray-300 rounded-xl">
            <div className="mb-1 flex justify-between items-center">
              <div className="flex items-center gap-x-3">
                <span className="size-10 flex justify-center items-center border border-gray-200 text-gray-500 rounded-lg">
                  <File />
                </span>
                <div>
                  <p className="text-sm font-light text-gray-800">
                    <span className="truncate inline-block max-w-[200px] align-bottom">
                      {uploadedFile.file.name}
                    </span>
                  </p>
                  <p className="text-xs text-gray-500">
                    {(uploadedFile.file.size / 1024).toFixed(2)} KB
                  </p>
                </div>
              </div>
              <button
                type="button"
                className="text-gray-500 hover:text-gray-800 focus:outline-none"
                onClick={handleRemoveFile}
              >
                <Trash2 size={20} />
              </button>
            </div>
            <div className="mt-3">
              <div className="flex items-center gap-x-3 whitespace-nowrap">
                <div className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-2 bg-green-600 rounded-full"
                    style={{ width: `${uploadProgress}%` }}
                  />
                </div>
                <div className="w-10 text-end">
                  <span className="text-sm text-gray-800">
                    {uploadProgress}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
        {uploadedFile?.url && (
          <div className="bg-white rounded-xl shadow p-4 sm:p-7 max-w-sm text-center mx-auto mt-3">
            <span className="mb-4 inline-flex justify-center items-center size-[62px] rounded-full border-4 border-red-50 bg-red-100 text-red-500">
              <MailCheck />
            </span>
            <h3 className="mb-2 text-2xl font-semibold text-gray-800">
              Confirmation Mail
            </h3>
            <p className="text-gray-500">
              To let the user know that their status has changed to download,
              send them a confirmation email.
            </p>
            <form onSubmit={handleSubmit} className="mt-6">
              <input type="hidden" name="firstName" value={displayName} />
              <input type="hidden" name="emailID" value={email} />
              <button
                type="submit"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-primary-600 text-white hover:bg-primary-700 focus:outline-none"
              >
                Send Mail
                <Forward />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default UploadFIle;
