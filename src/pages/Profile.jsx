import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useAuth from "../context/AuthProvider";
import { Eye, Star, User } from "lucide-react";
import { getUserDoc, updateMember } from "../firebase/firebaseServices";
import { toast } from "react-toastify";
import { uploadMedia } from "../firebase/cloudnary";

function Profile() {
  const { user, status } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    displayName: user?.displayName || "",
    lastName: "",
    email: user?.email || "",
    phoneNumber: "",
    gender: "",
    photoURL: "",
  });

  useEffect(() => {
    if (user) {
      getUserDoc(user.uid)
        .then((data) => {
          if (data) {
            setFormData((prev) => ({
              ...prev,
              lastName: data.lastName || "",
              gender: data.gender || "",
              photoURL: data.photoURL || "",
              phoneNumber: data.phoneNumber || "",
            }));
          }
        })
        .catch((error) => console.error("Error fetching user data: ", error));
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (file && file.size > 10 * 1024 * 1024) {
      toast.error("File size should be less than 10MB");
      return;
    }
    try {
      const url = await uploadMedia(file);
      setFormData((prev) => ({ ...prev, photoURL: url }));
      toast.success("Image uploaded successfully!");
    } catch (error) {
      console.error("Error uploading image: ", error);
      toast.error("Error uploading image");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, phoneNumber, gender } = formData;
    if (!displayName || !phoneNumber || !gender) {
      toast.error("Please fill all required fields");
      return;
    }

    try {
      await updateMember(formData);
      toast.success("Profile updated successfully");
      window.location.reload();
    } catch (error) {
      console.error("Error updating profile: ", error);
      toast.error("Failed to update profile");
    }
  };

  return (
    <>
      {/* Card Section */}
      <div className="w-full">
        {/* Card */}
        <div className="bg-white rounded-xl shadow p-4 sm:p-7">
          <div className="mb-8">
            <h2 className="text-2xl font-medium text-gray-800">
              Complete Your Profile
            </h2>
            <p className="text-sm text-gray-600">
              Manage your name, password and account settings.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            {/* Grid */}
            <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
              <div className="sm:col-span-3">
                <label className="inline-block text-gray-800 mt-2.5">
                  Profile photo
                </label>
              </div>
              {/* End Col */}
              <div className="sm:col-span-9">
                <div className="flex items-center gap-5">
                  <img
                    className="inline-block size-16 rounded-full ring-2 ring-white"
                    src={
                      formData.photoURL ||
                      "https://preline.co/assets/img/160x160/img1.jpg"
                    }
                    alt="Avatar"
                  />
                  <div className="flex gap-x-2">
                    <div className="max-w-sm">
                      <input
                        type="file"
                        name="photoURL"
                        className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-primary-500 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none file:bg-gray-100 file:border-0 file:me-4 file:py-3 file:px-4"
                        onChange={handleUpload}
                        accept="image/*"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* End Col */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="af-account-full-name"
                  className="inline-flex text-gray-800 mt-2.5 items-center"
                >
                  Full name
                  <Star
                    size={10}
                    className="text-primary-700 fill-primary-700 ms-1"
                  />
                </label>
              </div>
              {/* End Col */}
              <div className="sm:col-span-9">
                <div className="sm:flex gap-4">
                  <input
                    id="af-account-full-name"
                    type="text"
                    placeholder="John"
                    name="displayName"
                    value={formData.displayName}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Doe"
                    name="lastName"
                    onChange={handleChange}
                    value={formData.lastName}
                  />
                </div>
              </div>
              {/* End Col */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="af-account-email"
                  className="inline-block text-gray-800 mt-2.5"
                >
                  Email
                </label>
              </div>
              {/* End Col */}
              <div className="sm:col-span-9">
                <input
                  id="af-account-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  disabled
                />
              </div>
              {/* End Col */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="af-account-phone"
                  className="inline-flex text-gray-800 mt-2.5 items-center"
                >
                  Phone
                  <Star
                    size={10}
                    className="text-primary-700 fill-primary-700 ms-1"
                  />
                </label>
              </div>
              {/* End Col */}
              <div className="sm:col-span-9">
                <input
                  id="af-account-phone"
                  type="text"
                  placeholder="+x(xxx)xxx-xx-xx"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* End Col */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="gender"
                  className="inline-flex items-center text-gray-800 mt-2.5"
                >
                  Gender
                  <Star
                    size={10}
                    className="text-primary-700 fill-primary-700 ms-1"
                  />
                </label>
              </div>
              {/* End Col */}
              <div className="sm:col-span-9">
                <div className="sm:flex">
                  <label
                    htmlFor="gender-male"
                    className="flex items-center py-3 px-6 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg relative focus:z-10 focus:border-primary-500 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    <input
                      type="radio"
                      name="gender"
                      id="gender-male"
                      value="male"
                      className="shrink-0 border-gray-300 rounded-full text-primary-600 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none"
                      checked={formData.gender === "male"}
                      onChange={handleChange}
                    />
                    <span className="leading-none text-gray-500 ms-3">
                      Male
                    </span>
                  </label>
                  <label
                    htmlFor="gender-female"
                    className="flex items-center py-3 px-6 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg relative focus:z-10 focus:border-primary-500 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    <input
                      type="radio"
                      name="gender"
                      id="gender-female"
                      value="female"
                      className="shrink-0 border-gray-300 rounded-full text-primary-600 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none"
                      checked={formData.gender === "female"}
                      onChange={handleChange}
                    />
                    <span className="text-gray-500 ms-3">Female</span>
                  </label>
                  <label
                    htmlFor="gender-other"
                    className="flex items-center py-3 px-6 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg relative focus:z-10 focus:border-primary-500 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    <input
                      type="radio"
                      name="gender"
                      id="gender-other"
                      value="others"
                      className="shrink-0 border-gray-300 rounded-full text-primary-600 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none"
                      checked={formData.gender === "others"}
                      onChange={handleChange}
                    />
                    <span className="text-gray-500 ms-3">Other</span>
                  </label>
                </div>
              </div>

              {/* End Col */}
            </div>
            {/* End Grid */}
            <div className="mt-5 flex justify-end gap-x-2">
              {status === "INACTIVE" && (
                <button
                  type="submit"
                  className="py-3 px-5 inline-flex items-center gap-x-2 font-medium rounded-lg border border-transparent bg-primary-600 text-white hover:bg-primary-700 focus:outline-none focus:bg-primary-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Complete Profile
                </button>
              )}
            </div>
          </form>
        </div>
        {/* End Card */}
      </div>
      {/* End Card Section */}
    </>
  );
}

export default Profile;
