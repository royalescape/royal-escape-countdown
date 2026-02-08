import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD8m0HHoCAqDwcoGxIJ-ZIu8ppNa9aG-aw",
    authDomain: "royal-escape-landing.firebaseapp.com",
    projectId: "royal-escape-landing",
    storageBucket: "royal-escape-landing.firebasestorage.app",
    messagingSenderId: "1097832079501",
    appId: "1:1097832079501:web:9ccc2b79ad7facc61ac2c4",
    measurementId: "G-WPNC2HJGVQ"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const saveEmailToFirebase = async (email: string) => {
  try {
    await addDoc(collection(db, "email_signups"), {
      email,
      timestamp: serverTimestamp(),
    });
    return { success: true };
  } catch (error) {
    console.error("Error adding document: ", error);
    return { success: false, error };
  }
};
