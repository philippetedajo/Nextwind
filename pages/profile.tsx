import React, { useContext } from "react";
import { AuthContext } from "../context";

const Profile = () => {
  const { logout, user, isLoading } = useContext(AuthContext);

  console.log(user);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl mb-2">Profile</h1>
      <button onClick={() => logout()} className="border-2 w-40 px-3 rounded">
        {isLoading ? "Processing..." : "Logout"}
      </button>
    </div>
  );
};

export default Profile;
