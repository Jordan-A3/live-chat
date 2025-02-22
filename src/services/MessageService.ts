import { api } from "@/api";

export const MessageService = {
	async send(
		user_id: string,
		message: string,
		is_ai: boolean,
		conversation_id?: string,
		sender_id?: string,
	) {
		return await api.post("/api/messages", {
			user_id,
			message,
			is_ai,
			sender_id,
			conversation_id,
		});
	},
};
