import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Profile = () => {
  const { user,logout } = useAuth0();
  console.log(user);

  return (
    <div className="flex shadow-2xl shadow-gray-600 w-[60vw] border m-auto my-20 p-5 gap-x-30">
      <div>
        <img src={user?.picture} alt="" />
      </div>

      <div className="p-5 text-2xl space-y-4 font-sans">
        <h1>Name : {user?.name}</h1>
        <h1>Email : {user?.email}</h1>
        <h1>Email Verified : {user?.email_verified && "true"}</h1>
        <hr />
        <button className="p-5 w-40 font-bold font-sans rounded-2xl text-white  border bg-orange-500"
        onClick={()=> {
          logout({ logoutParams: { returnTo: window.location.origin } });
        }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
