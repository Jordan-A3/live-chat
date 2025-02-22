import { MouseEvent, useState } from "react";
import useChat from "./useChat";

export default function ChatSection({ selectedUser }) {
	const { messages, sendMessage } = useChat();
	const [message, setMessage] = useState("");

	console.log(selectedUser);

	const handleSendMessage = (e: MouseEvent<HTMLButtonElement>) => {
		if (message.trim() !== "") {
			sendMessage(selectedUser, message);
			setMessage("");
		}
	};

	return (
		<div className="flex flex-col w-[600px] h-full bg-transparent bg-opacity-20 backdrop-blur p-10 text-white">
			{selectedUser ? (
				<>
					<header className="flex items-center gap-3 border-b pb-3">
						<h1 className="text-lg font-bold">AI Agent</h1>
					</header>
					<div className="flex-1 overflow-y-auto my-4 p-2 h-[400px]">
						{messages.map((msg, index) => (
							<div
								key={index}
								className={`p-2 my-1 rounded-md w-fit max-w-xs ${
									msg.isUser ? "bg-blue-500 ml-auto" : "bg-gray-700"
								}`}
							>
								{msg.text}
							</div>
						))}
					</div>
					<footer className="flex gap-2 border-t pt-3">
						<input
							type="text"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							className="flex-1 p-2 rounded-md bg-gray-800 text-white"
							placeholder="Type a message..."
						/>
						<button
							onClick={handleSendMessage}
							className="bg-blue-500 px-4 py-2 rounded-md"
						>
							Send
						</button>
					</footer>
				</>
			) : (
				<p className="text-center text-gray-400">
					Select a conversation to start chatting.
				</p>
			)}
		</div>
	);
}
