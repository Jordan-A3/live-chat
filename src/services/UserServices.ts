import { auth } from "@/api/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const UserService = {
  signUp: async (email: string, password: string) => {
    return await createUserWithEmailAndPassword(auth, email, password);
  },

  login: async (email: string, password: string) => {
    return await signInWithEmailAndPassword(auth, email, password);
  }
};
