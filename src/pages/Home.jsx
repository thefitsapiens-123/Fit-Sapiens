import React, { useState } from "react";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, dataBase } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router";
import { Eye, EyeOff } from "lucide-react";
import LogoutConfirm from "../components/popups/LogoutConfirm";

function Home() {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      toast.error("Please fill all the fields");
      return;
    }

    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      const user = userCredential.user;

      if (user) {
        // Fetch role directly after login
        const roleDoc = await getDoc(doc(dataBase, "users", user.uid));
        const userRole = roleDoc.data()?.role || "MEMBER";

        console.log(userRole);

        if (userRole === "MEMBER") {
          navigate("/admin/dashboard");
        } else {
          navigate("/health-info");
        }
      }
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        toast.error("Invalid Email or Password");
      } else {
        toast.error("Login failed. Please try again.");
      }
      console.log("Error logging in: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="hero_section h-screen w-full">
      <div className="container h-screen">
        <div className="form-container flex h-full">
          <div className="md:w-1/2 lg:w-2/3"></div>
          <div className="w-full md:w-1/2 lg:w-1/3 flex items-center">
            <form
              onSubmit={handleSubmit}
              className="space-y-4 px-7 py-10 rounded-lg w-full bg-white"
            >
              <div className="logo flex items-center justify-center">
                <img
                  src="/assets/main-logo.png"
                  alt="Fit Sapiens"
                  className="max-w-[50%]"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="john.doe@example.com"
                  className="transition-all w-full mt-1 p-3 border border-gray-300 rounded-lg"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-600"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={active ? "text" : "password"}
                    id="password"
                    placeholder="password"
                    className="transition-all w-full mt-1 p-3 border border-gray-300 rounded-lg"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer text-gray-400 rounded-e-md"
                    onClick={() => setActive(!active)}
                  >
                    {active ? <Eye /> : <EyeOff />}
                  </button>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition duration-300"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
