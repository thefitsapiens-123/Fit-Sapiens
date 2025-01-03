import { Ellipsis } from "lucide-react";
import React, { useEffect, useState } from "react";
import PreviewForm from "./PreviewForm";
import { auth } from "../firebase/firebaseConfig";
import { getUserDoc } from "../firebase/firebaseServices";

function Pending() {
  const [formData, setFormData] = useState({});
  const currentUserId = auth.currentUser.uid;

  useEffect(() => {
    async function getFromData() {
      await getUserDoc(currentUserId).then((data) =>
        setFormData(data.healthInfo)
      );
    }
    getFromData();
  }, []);

  return (
    <>
      <div className="w-full flex items-center justify-center">
        <div className="bg-neutral-900 rounded-xl shadow p-4 sm:p-7 max-w-sm text-center">
          {/* Icon */}
          <span className="mb-4 inline-flex justify-center items-center size-[62px] rounded-full border-4 border-amber-800 bg-amber-800 text-gray-100">
            <Ellipsis />
          </span>
          {/* End Icon */}
          <h3
            id="hs-sign-out-alert-label"
            className="mb-2 text-2xl font-semibold text-neutral-100"
          >
            Pending
          </h3>
          <p className=".text-neutral-50">
            Your form has reaced to the admin we are creating a best diet plan
            for you.
          </p>
        </div>
      </div>
      <PreviewForm data={formData} />
    </>
  );
}

export default Pending;
