import axios from "axios";
import { backendUrl } from "../constants";
import Cookies from "js-cookie";
export const AddUserName = async (username) => {
  try {
    console.log("Cookies", Cookies.get("we_chat_token"));
    console.log("from name");
    const res = await axios.post(
      `${backendUrl}/username/create`,
      {
        username,
      },
      { withCredentials: true }
    );
    return res.data.user;
  } catch (error) {
    console.log(error);
    const err = new Error();
    if (error && error.response) {
      if (error.response.data.status === 403) {
        err.status = 403;
        err.message = "Invalid username";
        throw err;
      }
    }
    throw new Error("Something went wrong!");
  }
};
