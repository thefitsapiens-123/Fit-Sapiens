import React, { useCallback, useEffect, useState } from "react";
import UploadFIle from "../components/UploadFIle";
import { Link, useParams } from "react-router";
import { getUserDoc } from "../firebase/firebaseServices";
import healthQustion from "../questions/questions";
import { Eye, Trash2 } from "lucide-react";
import { toast } from "react-toastify";
import { doc, updateDoc } from "firebase/firestore";
import { dataBase } from "../firebase/firebaseConfig";
import PreviewForm from "../components/PreviewForm";

function Member() {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [formData, setFormData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleDelete = useCallback(async () => {
    if (!window.confirm("Are you sure you want to delete the file?")) return;
    setLoading(true);
    try {
      const userDocRef = doc(dataBase, "users", id);
      await updateDoc(userDocRef, {
        memberPDF: "",
        status: "PENDING",
      });
      toast.success("File delete successfully!");
      window.location.reload();
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  });

  useEffect(() => {
    async function getCurrentUser(id) {
      const data = await getUserDoc(id);
      setUserData(data);

      if (data?.healthInfo) {
        setFormData(data.healthInfo);
      }
    }
    getCurrentUser(id);
  }, [id]);

  return (
    <>
      <div className="grid grid-cols-[60%,40%] gap-4 ">
        <div>
          <PreviewForm data={formData} width={1} />
        </div>
        {userData?.memberPDF ? (
          <div className="h-full">
            <div className="bg-white rounded-lg shadow p-6 w-full mb-6">
              <h1 className="text-2xl font-semibold text-gray-800">
                Member Details
              </h1>
              <div className="flex gap-2 justify-between">
                <Link
                  to={userData.memberPDF}
                  target="_blank"
                  className="py-3 px-5 inline-flex items-center justify-center leading-none gap-x-2 text-sm text-center font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 w-full"
                >
                  <Eye size={18} />
                  Preview in new tab
                </Link>
                <button
                  className="py-2 px-3 inline-flex items-center justify-center leading-none gap-x-2 text-sm text-center font-medium rounded-lg border border-transparent bg-primary-600 text-white hover:bg-primary-700 w-full"
                  onClick={handleDelete}
                >
                  <Trash2 size={18} />
                  {loading ? "Deleting..." : "Delete File"}
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow h-full overflow-hidden">
              <embed src={userData.memberPDF} width="100%" height="100%" />
            </div>
          </div>
        ) : (
          <>
            <div className="mt-6">
              <UploadFIle
                email={userData?.email}
                id={id}
                displayName={userData?.displayName}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Member;
