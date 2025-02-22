import Image from "next/image";

import LivingRoom from "@/assets/living-room.jpg";
import { createAvatar } from "@dicebear/core";
import { bottts } from "@dicebear/collection";
// import CityBuildings from "@/assets/city-buildings.jpg";

export default function LoginPage() {
  const Avatar = ({ name }: { name: string }) => {
    const avatar = createAvatar(bottts, {
      seed: name,
    });
    const avatarImage = avatar.toDataUri();

    return (
      <img
        src={avatarImage}
        alt={`Avatar de ${name}`}
        className="w-11 h-11 rounded-full"
      />
    );
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-900">
      <Image src={LivingRoom} alt="Background" layout="fill" objectFit="fill" />
      <div className="flex flex-col absolute inset-0 bg-black/40 rounded-l-2xl justify-start items-center pt-36"></div>

      <div className="w-[900px] h-[90%] rounded-lg bg-transparent bg-opacity-20 backdrop-blur text-center flex justify-center items-center">
        <div className="flex flex-col w-[300px] h-full bg-transparent bg-opacity-20 border-r backdrop-blur-md p-2 text-center">
          <h1 className="text-lg border-b-2 p-3">Messages</h1>
          <div className="flex flex-row gap-3 p-3 justify-center items-center">
            <Avatar name="Jordan" />
            <div className="flex flex-row w-full h-full justify-center items-center py-2">
              <section className="flex flex-col w-full justify-center items-start">
                <h1 className="font-bold text-sm">Thiago</h1>
                <p className="text-xs">At what time is the meeting?</p>
              </section>

              <div className="flex h-full justify-end items-end">
                <p className="text-xs">12:53</p>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-3 p-3 justify-center items-center">
            <Avatar name="Thiago" />
            <div className="flex flex-row w-full h-full justify-center items-center py-2">
              <section className="flex flex-col w-full justify-center items-start">
                <h1 className="font-bold text-sm">Jordan Reis</h1>
                <p className="text-xs">At what time is the meeting?</p>
              </section>

              <div className="flex h-full justify-end items-end">
                <p className="text-xs">12:53</p>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-3 p-3 justify-center items-center">
            <Avatar name="Gustavo" />
            <div className="flex flex-row w-full h-full justify-center items-center py-2">
              <section className="flex flex-col w-full justify-center items-start">
                <h1 className="font-bold text-sm">Gustavo</h1>
                <p className="text-xs">At what time is the meeting?</p>
              </section>

              <div className="flex h-full justify-end items-end">
                <p className="text-xs">12:53</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[600px] h-full bg-transparent bg-opacity-20 backdrop-blur p-10 text-center">
          <p>Conteúdo da segunda seção</p>
        </div>
      </div>
    </div>
  );
}
