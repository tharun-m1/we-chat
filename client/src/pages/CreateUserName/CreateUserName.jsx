import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { AddUserName } from "../../api/username";
import toast from "react-hot-toast";
function CreateUserName() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(false);
  const token = Cookies.get("we_chat_token");
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const user_data = await AddUserName(userName);
      Cookies.set("user_data", user_data);
      navigate("/chat");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  if (token === undefined) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="md:w-[50%]  h-dvh mx-auto flex flex-col justify-center items-center gap-2"
      >
        <div>
          <input
            placeholder="username..."
            type="text"
            required
            className="input"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div>
          <button
            className={`primary-button ${
              loading ? "primary-button-disabled" : ""
            }`}
          >
            {loading ? "Loading..." : "Create"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateUserName;
