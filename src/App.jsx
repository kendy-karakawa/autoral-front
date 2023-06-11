import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import AuthProvider from "./contexts/auth";
import CreateGroupPage from "./pages/CreateGroupPage";
import GroupHomePage from "./pages/GroupHomePage";
import GroupMemberPage from "./pages/GroupMemberPage";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/create-group" element={<CreateGroupPage />} />
          <Route path="/group/:groupId" element={<GroupHomePage />} />
          <Route path="/group/:groupId/member" element={<GroupMemberPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
