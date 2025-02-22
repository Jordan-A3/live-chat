"useClient";

import { UserService } from "@/services/UserServices";
import { useRouter } from "next/navigation";
import { useState } from "react";

const useRegistration = () => {
	const router = useRouter();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	async function handleRegistration() {
		try {
			const response = await UserService.signUp(name, email, password);

			if (response) {
				router.push("/login"); // Redireciona para /chat
			}
		} catch (error) {
			console.log(error);
		}
	}

	function handleEmail(value: string) {
		setEmail(value);
	}

	function handlePassword(value: string) {
		setPassword(value);
	}

	function handleName(value: string) {
		setName(value);
	}

	return {
		name,
		email,
		password,
		handleRegistration,
		handlePassword,
		handleEmail,
		handleName,
	};
};

export default useRegistration;
