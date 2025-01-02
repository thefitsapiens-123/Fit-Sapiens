import React, { useState } from "react";
import { Send } from "lucide-react";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { auth, dataBase } from "../firebase/firebaseConfig";
import useAuth from "../context/AuthProvider";
import { toast } from "react-toastify";
import healthQustion from "../questions/questions";
import { formSections } from "../questions/healthQuery";
import renderField from "./renderField";
import PreviewForm from "./PreviewForm";

function HealthForm() {
  const [formData, setFormData] = useState({});

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!formData) {
  //     toast.error("Please fill all the fields");
  //     return;
  //   }

  //   try {
  //     const userDocRef = doc(dataBase, "users", auth.currentUser.uid);
  //     await updateDoc(userDocRef, {
  //       healthInfo: formData,
  //       status: "PENDING",
  //     }).then(() => {
  //       toast.success("Health information submitted successfully");
  //       window.location.reload();
  //     });
  //   } catch (error) {
  //     console.log("Error submitting health information: ", error);
  //     toast.error("Error submitting health information");
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="w-full">
        <div className="rounded-xl p-4 sm:p-7">
          <form onSubmit={handleSubmit}>
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Fitness Questionnaire
              </h1>
              <p className="text-gray-600">
                Please fill out the form below to help us understand your
                fitness goals
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {formSections.map((section, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow p-6 transition-all duration-200 hover:shadow-lg"
                >
                  <h2 className="text-xl font-medium mb-4 md:mb-6 text-gray-800 border-b pb-2 md:pb-3">
                    {section.title}
                  </h2>
                  <div className="flex flex-wrap gap-y-5">
                    {section.fields.map((field, fieldIndex) => (
                      <div
                        key={fieldIndex}
                        className={field.width === "full" ? "w-full" : "w-full"}
                      >
                        <label className="block mb-1 font-medium text-gray-700 text-sm">
                          {`(${fieldIndex + 1})${field.label}`}
                          {field.required && (
                            <span className="text-red-500 ml-1">*</span>
                          )}
                        </label>
                        {renderField(field, setFormData, formData)}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex mt-8">
              <button
                type="submit"
                className="py-3 px-5 inline-flex items-center gap-x-2 font-medium rounded-lg border border-transparent bg-primary-600 text-white hover:bg-primary-700 focus:outline-none focus:bg-primary-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                <Send strokeWidth={1.5} />
                Create Member
              </button>
            </div>
          </form>
        </div>
        <PreviewForm data={formData} />
      </div>
    </>
  );
}

export default HealthForm;
