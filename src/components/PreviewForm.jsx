import React from "react";
import { formSections } from "../questions/healthQuery";

function PreviewForm({ data, width = "2" }) {
  return (
    <>
      <div className="w-full mx-auto space-y-8 mt-4">
        <div className={`grid grid-cols-1 gap-4 md:grid-cols-${width}`}>
          {formSections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-6 transition-all duration-200 hover:shadow-md"
            >
              <h2 className="text-2xl font-medium mb-6 text-gray-800 border-b pb-3 border-primary-400">
                {section.title}
              </h2>
              <div className="grid gap-6">
                {data ? (
                  section.fields.map((field, fieldIndex) => (
                    <div
                      key={fieldIndex}
                      className="border-b pb-4 last:border-0"
                    >
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
                  ))
                ) : (
                  <p className="text-gray-600">No health infomation found!</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default PreviewForm;
