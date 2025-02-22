import { User } from "firebase/auth";

export function setStorage(key: string, value: User, storageType: "local" | "session" = "local") {
  if (typeof window === "undefined") return;
  
  const storage = storageType === "local" ? localStorage : sessionStorage;
  storage.setItem(key, JSON.stringify(value));
}
