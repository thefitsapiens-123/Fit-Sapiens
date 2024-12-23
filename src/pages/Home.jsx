import React from "react";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router";
import useAuth from "../context/AuthProvider";

function Home() {
  const navigate = useNavigate();
  const { user, role } = useAuth();
  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });

  React.useEffect(() => {
    if (user) {
      if (role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/profile");
      }
    }
  }, [user, role, navigate]);

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

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      const user = userCredential.user;
      if (user) {
        toast.success("You are logged in successfully");
        if (role === "admin") {
          navigate("/admin/dashboard");
        } else {
          navigate("/profile");
        }
      }
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        toast.error("User not found");
      } else if (error.code === "auth/wrong-password") {
        toast.error("Invalid password");
      }
      console.log("Error logging in: ", error);
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
                <input
                  type="password"
                  id="password"
                  placeholder="password"
                  className="transition-all w-full mt-1 p-3 border border-gray-300 rounded-lg"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition duration-300"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
