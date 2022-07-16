import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    const credentials = GoogleAuthProvider.credentialFromResult(result);

    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,

      //user info
      displayName,
      email,
      photoURL,
      uid,
    };

  } catch (error) {
    console.log(error);

    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);

    return {
      ok: false,
      errorMessage
    };
  }
};
