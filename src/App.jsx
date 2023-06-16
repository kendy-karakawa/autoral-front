import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import AuthProvider from "./contexts/auth";
import CreateGroupPage from "./pages/CreateGroupPage";
import GroupMemberPage from "./pages/GroupMemberPage";
import GroupHistoricPage from "./pages/GroupHistoricPage";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/create-group" element={<CreateGroupPage />} />
          <Route path="/group/:groupId" element={<GroupHistoricPage />} />
          <Route path="/group/:groupId/member" element={<GroupMemberPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
