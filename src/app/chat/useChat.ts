import type { User } from "@/models/user";
import { UserService } from "@/services/UserServices";
import { useState } from "react";

const useChat = () => {
	const [users, setUsers] = useState<User[]>([]);

	async function loadUsers() {
		const data = await UserService.list();
		setUsers(data);
	}

	return {
		users,
		loadUsers,
	};
};

export default useChat;
