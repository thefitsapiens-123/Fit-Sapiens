import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useState, useEffect } from "react";
import { dataBase, auth } from "../firebase/firebaseConfig"; // Ensure auth is imported
import { doc, getDoc } from "firebase/firestore";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState(localStorage.getItem("userRole") || null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      setLoading(false);

      if (user) {
        const roleDoc = await getDoc(doc(dataBase, "users", user.uid));
        const userRole = roleDoc.data()?.role || "member";
        setRole(userRole);
        localStorage.setItem("userRole", userRole);
      } else {
        setRole(null);
        localStorage.removeItem("userRole");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, role, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export default useAuth;
