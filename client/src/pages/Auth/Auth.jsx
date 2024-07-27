import React, { useState } from "react";
import toast from "react-hot-toast";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { Login, SignUp } from "../../api/auth";
import Cookies from "js-cookie";

function Auth({ status }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (location.pathname.includes("login")) {
        setLoading(true);
        const res = await Login(formData.email.trim(), formData.password);
        Cookies.set("we_chat_token", res?.data?.token, {
          secure: true,
          sameSite: "Strict",
          expires: 7,
        });
        Cookies.set("user_data", res?.data.user_data, {
          secure: true,
          sameSite: "Strict",
          expires: 7,
        });
        navigate("/chat", { replace: true });
        return;
      } else {
        setLoading(true);
        await SignUp(formData);
        return navigate("/verify-otp", {
          state: { email: formData.email, password: formData.password },
        });
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message || "Something went Wrong!");
    } finally {
      setLoading(false);
    }
  };
  if (Cookies.get("we_chat_token")) {
    return <Navigate to="/chat" />;
  }
  return (
    <div
      key={status}
      className="h-dvh flex flex-col justify-center items-center"
    >
      <div className="max-sm:w-5/6 sm:w-96 md:w-1/2 lg:w-2/5 xl:w-1/3 rounded-xl shadow-2xl px-2 md:px-3 py-2">
        {/* caption */}
        <div className="font-mulish font-bold text-lg">
          {location.pathname.includes("login") ? "Login" : "Signup"}
        </div>
        {/* form */}
        <div className="">
          <form onSubmit={handleSubmit}>
            <div className="mt-3">
              <input
                readOnly={loading}
                placeholder="Email"
                type="email"
                required
                className="input"
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="mt-3">
              <input
                readOnly={loading}
                placeholder="Password"
                type="password"
                required
                className="input"
                name="password"
                onChange={handleChange}
              />
            </div>
            {!location.pathname.includes("login") && (
              <div className="mt-3">
                <input
                  readOnly={loading}
                  placeholder="Re-enter Password"
                  type="password"
                  className="input"
                  required={!location.pathname.includes("login")}
                  name="confirmPassword"
                  onChange={handleChange}
                />
              </div>
            )}
            <div className="mt-3 mb-2">
              <button
                disabled={loading}
                type="submit"
                className={`primary-button ${
                  loading ? "primary-button-disabled" : ""
                }`}
              >
                {location.pathname.includes("login") ? "Login" : "Signup"}
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* action */}
      <div className="mt-20 tracking-wide">
        {location.pathname.includes("login") ? (
          <span>
            Dont't have account?{" "}
            <span
              onClick={() => {
                return navigate("/signup");
              }}
              className="text-blue-600 underline cursor-pointer"
            >
              Sign Up
            </span>{" "}
          </span>
        ) : (
          <span>
            Already have an account?{" "}
            <span
              onClick={() => {
                return navigate("/login");
              }}
              className="text-blue-600 underline cursor-pointer"
            >
              Login
            </span>{" "}
          </span>
        )}
      </div>
    </div>
  );
}

export default Auth;
