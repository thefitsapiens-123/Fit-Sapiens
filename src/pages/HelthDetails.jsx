import React, { useState } from "react";
import { Send } from "lucide-react";
import UnComplete from "../components/UnComplete";
import DownloadPDF from "../components/DownloadPDF";
import Pending from "../components/Pending";
import healthQustion from "../../public/questions";

function HelthDetails() {
  const [formData, setFormData] = useState({});

  const handleChnage = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked
          ? [...(prev[name] || []), value]
          : (prev[name] || []).filter((item) => item !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <UnComplete />
      <Pending />
      <DownloadPDF />
      {/* Card Section */}
      <div className="w-full">
        {/* Card */}
        <div className="bg-white rounded-xl shadow p-4 sm:p-7">
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            onSubmit={handleSubmit}
          >
            {healthQustion.map((field) => (
              <div
                key={field.id}
                className={`${
                  field.width === "full"
                    ? "col-span-1 md:col-span-2"
                    : "col-span-1"
                }`}
              >
                <label
                  htmlFor={field.id}
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {field.label}
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    id={field.id}
                    placeholder={field.placeholder}
                    name={field.id}
                    onChange={handleChnage}
                  />
                ) : field.type === "select" ? (
                  <select id={field.id} name={field.id} onChange={handleChnage}>
                    {field.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : field.type === "radio" ? (
                  <div className="mt-1 flex items-center gap-2">
                    {field.options.map((option) => (
                      <div key={option} className="flex items-center">
                        <input
                          id={`${field.id}-${option}`}
                          name={field.id}
                          type="radio"
                          onChange={handleChnage}
                        />
                        <label
                          htmlFor={`${field.id}-${option}`}
                          className="ml-3 block text-sm text-gray-700"
                        >
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                ) : field.type === "checkbox" ? (
                  <div className="mt-1 flex items-center gap-2">
                    {field.options.map((option) => (
                      <div key={option} className="flex items-center">
                        <input
                          id={`${field.id}-${option}`}
                          type="checkbox"
                          name={field.id}
                          value={option}
                          onChange={handleChnage}
                        />
                        <label
                          htmlFor={`${field.id}-${option}`}
                          className="ml-3 block text-sm text-gray-700"
                        >
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                ) : (
                  <input
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    name={field.id}
                    onChange={handleChnage}
                  />
                )}
              </div>
            ))}
            <div className="mt-5 flex justify-start gap-x-2">
              <button
                type="submit"
                className="py-3 px-5 inline-flex items-center gap-x-2 font-medium rounded-lg border border-transparent bg-primary-600 text-white hover:bg-primary-700 focus:outline-none focus:bg-primary-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                <Send />
                Submit Response
              </button>
            </div>
          </form>
          {/* Card Section */}
        </div>
        {/* Card */}
      </div>
    </>
  );
}

export default HelthDetails;
