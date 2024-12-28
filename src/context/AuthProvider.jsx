import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useState, useEffect } from "react";
import { dataBase, auth } from "../firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState(null);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setLoading(true);
      if (firebaseUser) {
        setUser(firebaseUser);
        try {
          const roleDoc = await getDoc(
            doc(dataBase, "users", firebaseUser.uid)
          );

          if (roleDoc.exists()) {
            const userData = roleDoc.data();
            setRole(userData?.role || "MEMBER");
            setStatus(userData?.status || "INACTIVE");
          } else {
            console.error("User document not found");
            setRole("MEMBER");
            setStatus("INACTIVE");
          }
        } catch (error) {
          console.error("Failed to fetch role:", error);
          setRole("MEMBER");
          setStatus("INACTIVE");
        }
      } else {
        setUser(null);
        setRole(null);
        setStatus(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const value = {
    user,
    role,
    loading,
    status,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default useAuth;
