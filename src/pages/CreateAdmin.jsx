import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { dataBase } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router";

function CreateAdmin() {
  const naviage = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "MEMBER",
    status: "INACTIVE",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    const adminUser = auth.currentUser;
    const adminEmail = adminUser.email;
    const adminPassword = prompt(
      "Please enter your admin password to proceed:"
    );

    try {
      await auth.signOut();
      // Create new user
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      // Add user data to Firestore
      await setDoc(doc(dataBase, "users", userCredential.user.uid), {
        email: formData.email,
        role: formData.role,
        createdAt: new Date().toISOString(),
        status: "INACTIVE",
        password: formData.password,
      });
      // Re-authenticate the admin user
      await signInWithEmailAndPassword(auth, adminEmail, adminPassword);
      naviage("/admin/dashboard");
      // Reset form
      setFormData({
        email: "",
        password: "",
        role: "MEMBER",
        status: "INACTIVE",
      });

      toast.success("Member created successfully");
    } catch (error) {
      console.error("Error creating user:", error);
      toast.error(error.message);
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
              Create Member/Admin
            </h2>
            <p className="text-sm text-gray-600">
              Create member with same email and password that he provide in
              wordpress
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            {/* Grid */}
            <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="af-account-email"
                  className="inline-block  text-gray-800 mt-2.5"
                >
                  Email
                </label>
              </div>
              {/* End Col */}
              <div className="sm:col-span-9">
                <input
                  id="af-account-email"
                  type="email"
                  placeholder="johndoe@example.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              {/* End Col */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="af-account-password"
                  className="inline-block  text-gray-800 mt-2.5"
                >
                  Password
                </label>
              </div>
              {/* End Col */}
              <div className="sm:col-span-9">
                <input
                  id="af-account-password"
                  type="text"
                  placeholder="password"
                  value={formData.password}
                  name="password"
                  onChange={handleChange}
                />
              </div>
              {/* End Col */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="af-account-role"
                  className="inline-block  text-gray-800 mt-2.5"
                >
                  Role
                </label>
              </div>
              <div className="sm:col-span-9">
                <select
                  id="af-account-role"
                  name="role"
                  onChange={handleChange}
                  value={formData.role}
                >
                  <option value="MEMBER">Member</option>
                  <option value="ADMIN">Admin</option>
                </select>
              </div>
            </div>
            {/* End Grid */}
            <div className="mt-5 flex justify-end gap-x-2">
              <button
                type="submit"
                className="py-3 px-5 inline-flex items-center gap-x-2 font-medium rounded-lg border border-transparent bg-primary-600 text-white hover:bg-primary-700 focus:outline-none focus:bg-primary-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                Create Member
              </button>
            </div>
          </form>
        </div>
        {/* End Card */}
      </div>
      {/* End Card Section */}
    </>
  );
}

export default CreateAdmin;
