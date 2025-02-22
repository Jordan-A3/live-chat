"useClient";

import { setStorage } from "@/hooks/useStorage";
import { UserService } from "@/services/UserServices";
import { useRouter } from "next/navigation";
import { useState } from "react";

const useLogin = () => {
    const router = useRouter()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegistration() {
    try {
      const response = await UserService.login(email, password);

        if (response?.user) {
            const user = response.user
            setStorage("user", user);
            
            router.push('/chat')
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

  return {
    email,
    password,
    handleRegistration,
    handlePassword,
    handleEmail,
  };
};

export default useLogin;
