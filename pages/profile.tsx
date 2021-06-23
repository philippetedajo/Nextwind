import React, { useContext } from "react";
import { AuthContext } from "../context";

const Profile = () => {
  const { logout, user, isLoading } = useContext(AuthContext);

  return (
    <div className="w-full h-screen flex flex-col pt-20 items-center">
      <h1 className="text-2xl mb-5">Profile</h1>

      <div className="flex items-center flex-col mb-5">
        <div className="flex items-center flex-col">
          <div className="text-xl">Firstname</div>
          <div className="text-gray-500"> {user?.data?.data?.firstname}</div>
        </div>

        <div className="flex items-center flex-col">
          <div className="text-xl">Email</div>
          <div className="text-gray-500"> {user?.data?.data?.email}</div>
        </div>
      </div>

      <button onClick={() => logout()} className="border-2 w-40 px-3 rounded">
        {isLoading ? "Processing..." : "Logout"}
      </button>
    </div>
  );
};

export default Profile;
