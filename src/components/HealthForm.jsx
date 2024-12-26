import React, { useState } from "react";
import { Send } from "lucide-react";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { auth, dataBase } from "../firebase/firebaseConfig";
import useAuth from "../context/AuthProvider";
import { toast } from "react-toastify";
import healthQustion from "../questions/questions";

function HealthForm() {
  const [formData, setFormData] = useState({});
  const { user } = useAuth();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData) {
      toast.error("Please fill all the fields");
      return;
    }

    try {
      const userDocRef = doc(dataBase, "users", auth.currentUser.uid);
      await updateDoc(userDocRef, {
        healthInfo: formData,
        status: "PENDING",
      }).then(() => {
        toast.success("Health information submitted successfully");
        window.location.reload();
      });
    } catch (error) {
      console.log("Error submitting health information: ", error);
      toast.error("Error submitting health information");
    }
  };

  return (
    <>
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
                  {field.required && <span className="text-red-500"> *</span>}
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    id={field.id}
                    placeholder={field.placeholder}
                    name={field.id}
                    onChange={handleChnage}
                    required={field.required}
                  />
                ) : field.type === "select" ? (
                  <select
                    id={field.id}
                    name={field.id}
                    onChange={handleChnage}
                    required={field.required}
                  >
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
                          className="shrink-0 border-gray-300 rounded-full text-primary-600 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none"
                          type="radio"
                          onChange={handleChnage}
                          required={field.required}
                          value={option}
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
                          className="shrink-0 mt-0.5 border-gray-300 rounded text-primary-600 focus:ring-primary-500"
                          required={
                            field.required &&
                            (!formData[field.id] ||
                              formData[field.id].length === 0)
                          }
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
                    required={field.required}
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

export default HealthForm;
