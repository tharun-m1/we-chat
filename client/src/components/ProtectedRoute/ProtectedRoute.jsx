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
  return isAuthenticated() ? (
    <Suspense fallback={fb()}>{Component}</Suspense>
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
