import React, { useEffect, useState } from "react";
import UploadFIle from "../components/UploadFIle";
import { useParams } from "react-router";
import { getUserDoc } from "../firebase/firebaseServices";
import healthQustion from "../questions/questions";

function Member() {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    async function getCurrentUser(id) {
      const data = await getUserDoc(id);
      setUserData(data);

      if (data?.healthInfo) {
        const fields = Object.entries(data.healthInfo).map(([key, value]) => {
          const question = healthQustion.find((q) => q.id === key);
          return {
            label: question?.label || key,
            value: value,
          };
        });
        setFormData(fields);
      }
    }
    getCurrentUser(id);
  }, [id]);

  return (
    <div className="grid grid-cols-[60%,40%] gap-4">
      <div className="mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          Member Details
        </h1>
        <div>
          <h2 className="text-xl font-medium text-gray-700">
            User: {userData?.displayName || "No Name Available"}
          </h2>
          <p className="text-sm text-gray-500">
            Email: {userData?.email || "No Email Available"}
          </p>
        </div>
        <div>
          <h2 className="text-xl font-medium text-gray-700">Health Info</h2>
          <div className="mt-4 space-y-4">
            {formData.length > 0 ? (
              formData.map((field, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row md:items-center justify-between border-b pb-2"
                >
                  <span className="text-gray-600 font-medium">
                    {field.label}:
                  </span>
                  <span className="text-gray-800">
                    {Array.isArray(field.value)
                      ? field.value.join(", ")
                      : field.value || "Not Provided"}
                  </span>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No health information available.</p>
            )}
          </div>
        </div>
      </div>
      <div className="mt-6">
        <UploadFIle
          email={userData?.email}
          id={id}
          displayName={userData?.displayName}
        />
      </div>
    </div>
  );
}

export default Member;
