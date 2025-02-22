import { api } from "@/api";
import { auth } from "@/api/firebase";
import type { User } from "@/models/user";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";

export const UserService = {
	signUp: async (name: string, email: string, password: string) => {
		const data = await createUserWithEmailAndPassword(auth, email, password);

		await api.post("/api/users", {
			name,
			uid: data.user.uid,
		});

		return data;
	},

	login: async (email: string, password: string) => {
		return await signInWithEmailAndPassword(auth, email, password);
	},

	list: async () => {
		const response = await api.get<User[]>("/api/users");

		if (!response.data) {
			throw new Error("Error loanding users");
		}

		return response.data;
	},
};
