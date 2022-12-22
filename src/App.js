import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LoginLayout, UserLayout } from "./components/layouts";
import { ProfilePage, AssetPage } from "./pages/user";
import { LoginPage, HelpPage, ForgetPasswordPage } from "./pages/login";
import { NotFound } from "./pages/404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginLayout />}>
          <Route index element={<LoginPage />} />
          <Route path="help" element={<HelpPage />} />
          <Route path="forget" element={<ForgetPasswordPage />} />
        </Route>

        <Route path="/user" element={<UserLayout />}>
          <Route index element={<ProfilePage />} />
          <Route path="asset" element={<AssetPage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
