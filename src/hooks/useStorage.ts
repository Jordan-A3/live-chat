import { User } from "firebase/auth";

export function setStorage(
	key: string,
	value: User,
	storageType: "local" | "session" = "local",
) {
	if (typeof window === "undefined") return;

	const storage = storageType === "local" ? localStorage : sessionStorage;
	storage.setItem(key, JSON.stringify(value));
}

export function getStorage() {
	const raw = localStorage.getItem("user");

	return JSON.parse(raw as string) as { uid: string };
}
