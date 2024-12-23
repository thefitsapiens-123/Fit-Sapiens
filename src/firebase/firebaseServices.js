import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";

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

// Create new user by email and password
export async function createNewMemebr(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log("New user created: ", user);
  } catch (error) {
    console.log("Error creating new user: ", error);
  }
}
