import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Profile = () => {
  const { user, logout } = useAuth0();

  return (
    <div className="min-h-screen flex justify-center items-center px-4 bg-gray-50">

      <div className="flex flex-col md:flex-row shadow-2xl border rounded-2xl bg-white max-w-4xl w-full p-6 md:p-10 gap-6 md:gap-10">

        {/* Profile Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src={user?.picture}
            alt={user?.name}
            className="rounded-full w-40 h-40 md:w-48 md:h-48 object-cover shadow-lg"
          />
        </div>

        {/* User Info */}
        <div className="flex flex-col justify-center gap-4 text-lg md:text-xl font-sans">
          <h1><span className="font-bold">Name:</span> {user?.name}</h1>
          <h1><span className="font-bold">Email:</span> {user?.email}</h1>
          <h1>
            <span className="font-bold">Email Verified:</span>{" "}
            {user?.email_verified ? "Yes" : "No"}
          </h1>
          <hr className="my-2" />
          <button
            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
            className="bg-orange-500 text-white font-bold rounded-2xl py-3 px-6 w-full md:w-40 hover:bg-orange-600 transition"
          >
            Logout
          </button>
        </div>

      </div>

    </div>
  );
};

export default Profile;