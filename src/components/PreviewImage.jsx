import { X } from "lucide-react";
import React from "react";

function PreviewImage({ image, hide }) {
  return (
    <div className="size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto flex items-center justify-center bg-slate-950 backdrop-blur-sm bg-opacity-60">
      <div className="h-full w-auto relative">
        <div className="absolute top-0 left-0 w-full flex items-center justify-between p-2">
          <span className="bg-primary-700 text-white text-xs p-2 rounded-lg">
            {new Date(image.uploadedAt).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            }) || new Date.now()}
          </span>
          <div
            className="size-8 bg-primary-700 rounded-full p-1 text-white cursor-pointer"
            onClick={hide}
          >
            <X />
          </div>
        </div>
        <img src={image.url} alt="Image Url" className="h-full w-auto" />
      </div>
    </div>
  );
}

export default PreviewImage;
