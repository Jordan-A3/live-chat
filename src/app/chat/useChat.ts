import { getStorage } from "@/hooks/useStorage";
import type { User } from "@/models/user";
import { MessageService } from "@/services/MessageService";
import { UserService } from "@/services/UserServices";
import { useEffect, useState } from "react";

const useChat = () => {
	const [users, setUsers] = useState<User[]>([]);
	const [selectedUser, setSelectedUser] = useState("");
	const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>(
		[],
	);

	useEffect(() => {
		loadUsers();
	}, []);

	async function loadUsers() {
		const data = await UserService.list();
		const loggedUser = getUserStoraged();
		setUsers(data.filter((item) => item.id !== loggedUser.uid));
	}

	function getUserStoraged() {
		return getStorage();
	}

	function selectUser(id: string) {
		setSelectedUser(id);
	}

	async function sendMessage(userId: string, text: string) {
		const loggedUser = getUserStoraged();

		setMessages((prev) => [...prev, { text, isUser: true }]);

		const reply = (await MessageService.send(
			loggedUser.uid,
			text,
			true,
		)) as any;

		setMessages((prev) => [
			...prev,
			{ text: reply.data.message, isUser: false },
		]);
	}

	return {
		users,
		selectedUser,
		messages,
		loadUsers,
		getUserStoraged,
		selectUser,
		sendMessage,
	};
};

export default useChat;
