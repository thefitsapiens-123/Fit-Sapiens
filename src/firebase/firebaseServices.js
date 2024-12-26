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
  updateDoc,
} from "firebase/firestore";
import axios from "axios";

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
    await signOut(auth);
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
      memberPDF, // new field for storing uploaded file URL
    });
  } catch (error) {
    console.error("Error updating profile: ", error);
    throw error;
  }
}

// upload media file on cloudnary
export async function uploadMedia(file, onProgress) {
  const url = "https://api.cloudinary.com/v1_1/dddtsdlk0/image/upload";

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "members");

  try {
    const response = await axios.post(url, formData, {
      onUploadProgress: (progressEvent) => {
        const progress = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        onProgress && onProgress(progress); // Pass progress to callback
      },
    });
    return response.data.secure_url;
  } catch (error) {
    console.error("Error uploading image: ", error.message);
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
    const querySnapshot = await getDocs(collection(dataBase, "users"));
    const data = querySnapshot.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
    return data;
  } catch (error) {
    console.error("Error getting users: ", error);
    throw error;
  }
}
