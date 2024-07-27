import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";

import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

const Auth = lazy(() => import("./pages/Auth/Auth"));
const OTP = lazy(() => import("./pages/OTP/OTP"));
const Home = lazy(() => import("./pages/Home/Home"));
const Chat = lazy(() => import("./pages/Chat/Chat"));
const CreateUserName = lazy(() =>
  import("./pages/CreateUserName/CreateUserName")
);

function App() {
  return (
    <>
      <Toaster />
      <div className="min-w-[375px]">
        <Suspense fallback={fb()}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Auth status="signup" />} />
            <Route path="/verify-otp" element={<OTP />} />
            <Route path="/login" element={<Auth status="login" />} />
            <Route
              path="/chat"
              element={<ProtectedRoute Component={<Chat />} />}
            />
            <Route path="/add-username" element={<CreateUserName />} />
            {/* <Route path="/chat" element={<Chat />} /> */}
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

function fb() {
  return (
    <h1 className="flex justify-center items-center text-2xl">Loading...</h1>
  );
}

export default App;
