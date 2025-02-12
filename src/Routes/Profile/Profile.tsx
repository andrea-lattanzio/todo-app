import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import { useQueryClient } from "@tanstack/react-query";

const Profile = () => {
  const navigate = useNavigate();
  const context = useContext(AuthContext);
  const queryClient = useQueryClient();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    context.setUser(null);
    queryClient.clear();
    navigate("/login");
  };

  return (
    <>
      <div className="flex flex-col justify-start w-full">
        <button
          className="select-none flex items-center justify-center space-x-2 md:w-1/6 w-1/3 py-2 pr-4 rounded-lg bg-[#f88b25] text-gray-800 font-semibold transition-all duration-300 hover:bg-[#e67e22] active:scale-95"
          onClick={() => navigate("/")}
        >
          <i className="bi bi-arrow-left text-xl"></i>
          <span>Back</span>
        </button>
      </div>
      <div className="select-none mt-3 h-auto w-full bg-[#2c2e2d] px-4 py-5 rounded-xl shadow-lg border-2 border-[#343434] flex flex-col items-center">
        <div className="flex items-center w-full">
          <h2 className="font-semibold text-[#6b7280] text-2xl">
            Your Profile
          </h2>
        </div>
        <i className="mt-12 bi bi-person-circle text-8xl text-[#6b7280]"></i>
        <span className="mt-5 text-[#656567] text-2xl font-semibold">
          Email
        </span>
        <span className="text-gray-300">{context.user?.email}</span>
      </div>
      <div className="flex items-center justify-center">
        <button
          onClick={() => handleLogout()}
          className="mt-5 bg-red-500 text-white px-4 py-2 rounded-lg text-xl tracking-wide font-semibold hover:bg-red-600 transition"
        >
          Sign out
        </button>
      </div>
    </>
  );
};

export default Profile;
