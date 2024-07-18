import axios from "axios";
import { backendUrl } from "../constants";

export const SendOTP = async (email) => {
  try {
    const res = await axios.post(`${backendUrl}/sendOtp`, {
      email,
    });
    return res;
  } catch (error) {
    console.log(error);
    const err = new Error();
    if (error && error.response.data.status === 400) {
      err.message = "User Already Exists! Try Login.";
      throw err;
    }

    throw err;
  }
};

export const SignUp = async (formData) => {
  try {
    const { email, password, confirmPassword } = formData;

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error("Invalid Email!");
    }

    if (password.length < 8) {
      throw new Error("Password must be atleast 8 characters!");
    }

    if (password !== confirmPassword) {
      throw new Error("Passwords do not match!");
    }
    const res = await SendOTP(email);
    return res;
  } catch (error) {
    console.log(error);
    const err = new Error();
    err.status = error.status;
    err.message = error.message;
    throw err;
  }
};

export const VerifyOTP = async (email, otp) => {
  try {
    const res = await axios.post(`${backendUrl}/verifyOtp`, { email, otp });
    return res;
  } catch (error) {
    console.log(error);
    const err = new Error();
    if (error && error.response && error.response.data.status === 401) {
      err.status = error.response.data.status;
      err.message = "Incorrect OTP";
      throw err;
    }
    err.message = "Something went wrong! Try again.";
    throw err;
  }
};

export const CreateAccount = async (email, password) => {
  try {
    const res = await axios.post(`${backendUrl}/signup`, { email, password });
    return res;
  } catch (error) {
    const err = new Error();
    err.status = error.status;
    err.message = error.message;
    throw err;
  }
};

export const Login = async (email, password) => {
  try {
    const res = await axios.post(`${backendUrl}/login`, { email, password });
    return res;
  } catch (error) {
    console.log(error);
    const err = new Error();
    if (error && error.response) {
      if (error.response.data.status === 404) {
        err.status = 404;
        err.message = "User Doesn't Exist!";
        throw err;
      }
      if (error.response.data.status === 401) {
        err.status = 401;
        err.message = "Incorrect Password!";
        throw err;
      }
      throw new Error("Something went wrong!");
    }
  }
};
