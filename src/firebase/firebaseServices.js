import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth, dataBase } from "./firebaseConfig";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";

// login by email and password
export async function loginByEmailPass(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return user;
  } catch (error) {
    console.log("Error logging in: ", error);
  }
}

// Logout
export async function logout() {
  try {
    const res = await signOut(auth);
    if (res.ok) {
      toast.success("You are logged out successfully");
    }
  } catch (error) {
    console.log("Error logging out: ", error);
  }
}

// Create new user by email and password
export async function createUser(email, password, role) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return user;
  } catch (error) {
    console.log("Error creating user: ", error);
  }
}

// Firebase user profile update function
export async function updateMember(profile) {
  try {
    const { displayName, phoneNumber, gender, lastName, photoURL, memberPDF } =
      profile;

    if (auth.currentUser) {
      await updateProfile(auth.currentUser, {
        displayName: displayName,
        photoURL: photoURL,
      });
    }
    // Update Firestore document
    const userDocRef = doc(dataBase, "users", auth.currentUser.uid);
    await updateDoc(userDocRef, {
      displayName,
      phoneNumber,
      gender,
      lastName,
      status: "SUBMIT",
      photoURL,
      memberPDF: "",
    });
  } catch (error) {
    console.error("Error updating profile: ", error);
    throw error;
  }
}

// get current user doc from firestore
export async function getUserDoc(userId) {
  try {
    const userDocRef = doc(dataBase, "users", userId);
    const userDocSnap = await getDoc(userDocRef);
    return userDocSnap.data();
  } catch (error) {
    console.error("Error getting user document: ", error);
    throw error;
  }
}

// get all users from firestore
export async function getUsers() {
  try {
    const usersQuery = query(
      collection(dataBase, "users"),
      orderBy("createdAt", "desc")
    );
    const querySnapshot = await getDocs(usersQuery);

    const data = querySnapshot.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });

    return data;
  } catch (error) {
    console.error("Error getting users: ", error);
    throw error;
  }
}
