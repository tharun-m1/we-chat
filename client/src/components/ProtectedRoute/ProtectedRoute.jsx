import React, { Suspense } from "react";
import Cookies from "js-cookie";
import { Navigate, useLocation } from "react-router-dom";

const isAuthenticated = () => {
  const cookie = Cookies.get("we_chat_token");
  if (cookie === undefined) {
    return false;
  }
  return true;
};
function ProtectedRoute({ Component }) {
  const location = useLocation();
  const user_data = Cookies.get("user_data");

  return isAuthenticated() ? (
    user_data !== "null" ? (
      <Suspense fallback={fb()}>{Component}</Suspense>
    ) : (
      <Navigate to="/add-username" />
    )
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
}
function fb() {
  return (
    <h1 className="flex justify-center items-center text-2xl">Loading...</h1>
  );
}

export default ProtectedRoute;
