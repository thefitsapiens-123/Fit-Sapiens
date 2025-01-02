import React from "react";
import { formSections } from "../questions/healthQuery";

function PreviewForm({ data }) {
  return (
    <>
      <div className="w-full mx-auto p-6 space-y-8 hidden">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">
            Form Submission Summary
          </h1>
          <p className="text-gray-600">
            Thank you for completing the questionnaire
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {formSections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-6 transition-all duration-200 hover:shadow-lg"
            >
              <h2 className="text-2xl font-medium mb-6 text-gray-800 border-b pb-3 border-primary-400">
                {section.title}
              </h2>
              <div className="grid gap-6">
                {section.fields.map((field, fieldIndex) => (
                  <div key={fieldIndex} className="border-b pb-4 last:border-0">
                    <p className="font-medium text-gray-700 mb-1 text-sm">
                      {field.label}
                    </p>
                    <p className="text-gray-600">
                      {Array.isArray(data[field.name])
                        ? data[field.name].join(", ") || (
                            <span className="text-primary-600">
                              Not provided
                            </span>
                          )
                        : data[field.name] || (
                            <span className="text-primary-600">
                              Not provided
                            </span>
                          )}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default PreviewForm;
