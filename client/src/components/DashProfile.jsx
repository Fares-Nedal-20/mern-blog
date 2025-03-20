import React from "react";
import { Button, TextInput } from "flowbite-react";
import { useSelector } from "react-redux";

export default function DashProfile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="p-3 max-w-lg mx-auto w-full">
      <h1 className="text-3xl font-semibold my-7 text-center">Profile</h1>
      <form className="flex flex-col gap-4 w-full">
        <div className="self-center w-32 h-32 border-8 border-[lightgray] rounded-full shadow-md cursor-pointer">
          <img
            src={currentUser.profilePicture}
            alt="user"
            className="rounded-full object-cover w-full h-full"
          />
        </div>
        <TextInput
          type="text"
          placeholder="Username..."
          id="username"
          defaultValue={currentUser.username}
        />
        <TextInput
          type="email"
          placeholder="Email..."
          id="email"
          defaultValue={currentUser.email}
        />
        <TextInput
          type="password"
          placeholder="Password..."
          id="password"
          defaultValue={currentUser.password}
        />
        <Button type="submit" gradientDuoTone="purpleToBlue" outline>Update</Button>
      </form>
      <div className="text-red-500 flex justify-between mt-4">
        <span className="cursor-pointer">Delete account</span>
        <span className="cursor-pointer">Sign out</span>
      </div>
    </div>
  );
}
