import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { File, Trash2, Upload } from "lucide-react";

function UploadFIle() {
  const [uploadedFile, setUploadedFile] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      setUploadedFile({
        file,
        preview: URL.createObjectURL(file),
      });
    }
  }, []);

  const handleRemoveFile = () => {
    if (uploadedFile) {
      URL.revokeObjectURL(uploadedFile.preview);
      setUploadedFile(null);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".gif"],
      "application/pdf": [".pdf"],
    },
    maxSize: 2 * 1024 * 1024,
    multiple: false,
  });

  return (
    <div className="min-h-full relative min-w-fit">
      <div className="m-auto md:sticky top-24 right-0 z-10">
        {/* Dropzone Area */}
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
                Pick a file up to 2MB.
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
              <div className="flex items-center gap-x-2">
                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                  onClick={handleRemoveFile}
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>

            {/* File Upload Progress */}
            <div className="flex items-center gap-x-3 whitespace-nowrap">
              <div className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="flex flex-col justify-center rounded-full overflow-hidden bg-green-600 whitespace-nowrap transition-all duration-500"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="w-10 text-end">
                <span className="text-sm text-gray-800">
                  <span>100</span>%
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default UploadFIle;
