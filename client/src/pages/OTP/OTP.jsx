import React, { useCallback, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { CreateAccount, SendOTP, VerifyOTP } from "../../api/auth";

function OTP() {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(60);
  const [resend, setResend] = useState(false);
  const timerId = useRef(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (otp.trim().length === 0) return toast.error("Invalid OTP!");
      const { email, password } = location?.state;
      await VerifyOTP(email, otp);
      await CreateAccount(email, password);
      toast.success("Account Created!");
      return navigate("/login", { replace: true });
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const ResendOTP = useCallback(async () => {
    try {
      setLoading(true);
      await SendOTP(location?.state?.email);
      toast.success("OTP sent!");
      setTimer(60);
      setResend(false);
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }, [location?.state?.email]);

  useEffect(() => {
    timerId.current = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
    return () => clearInterval(timerId.current);
  }, [ResendOTP]);
  useEffect(() => {
    if (timer === 0) {
      clearInterval(timerId.current);
      timerId.current = null;
      setResend(true);
    }
  }, [timer]);

  if (!location.state) {
    return <Navigate to="/signup" />;
  }
  return (
    <>
      <div className="h-dvh flex justify-center font-mulish">
        <div className="max-sm:w-[80%] sm:w-[300px] max-sm:mt-[20%] mt-[80px] h-fit">
          <div className="text-center text-[0.9rem] font-mulish font-bold">
            we've sent 6 digit otp to <br />{" "}
            <span className="text-blue-600">{location?.state?.email}</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mt-3">
              <input
                required
                value={otp}
                type="text"
                minLength={6}
                maxLength={6}
                name="otp"
                className="input text-center"
                onChange={(e) => setOtp(e.target.value)}
              />{" "}
            </div>
            <div className="mt-6 w-[70%] mx-auto">
              <button
                type="submit"
                className={`primary-button ${
                  loading ? "primary-button-disabled" : ""
                }`}
              >
                Verify OTP
              </button>
            </div>
          </form>
          <div className="mt-5 text-[0.8rem] text-center">
            {!resend && "Resend OTP in:"}
            <span className="text-blue-600 ms-1">
              {resend ? (
                <span
                  className="underline cursor-pointer"
                  onClick={() => {
                    ResendOTP();
                    setOtp("");
                  }}
                >
                  Resend
                </span>
              ) : (
                `${timer}s`
              )}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default OTP;
