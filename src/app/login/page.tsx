"use client";

import Image from "next/image";

import AirplaneBuilding from "@/assets/airplane-building.jpg";
import useLogin from "./useLogin";

export default function LoginPage() {
  const { email, password, handleEmail, handlePassword, handleRegistration } =
    useLogin();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900">
      <div className="flex w-[900px] bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="relative w-1/2 h-[500px] bg-black">
          <Image
            src={AirplaneBuilding}
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="rounded-l-2xl"
          />
          <div className="flex flex-col absolute inset-0 bg-black/40 rounded-l-2xl justify-start items-center pt-36">
            <h2 className="text-2xl font-bold text-gray-100">16VC</h2>
            <p className="text-gray-200">
              You do the thinking, we do the investing.{" "}
            </p>
          </div>
        </div>

        <div className="w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-900">Welcome!</h2>
          <div className="mt-6">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => handleEmail(e.target.value)}
              className="w-full text-gray-900 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => handlePassword(e.target.value)}
              className="w-full text-gray-900 mt-3 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>

          <button
            onClick={handleRegistration}
            className="w-full mt-4 p-3 bg-gray-900 text-white rounded-lg hover:bg-gray-950"
          >
            Login
          </button>

          <p className="text-sm text-center mt-4 text-gray-500">
            Dont have an account?{" "}
            <a href="/registration" className="text-gray-500 font-bold cursor-pointer underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
