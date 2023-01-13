import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LoginLayout, UserLayout, HomeLayout } from "./components/layouts";
import { DataTable, AssetPage } from "./pages/user";
import { LoginPage, HelpPage, ForgetPasswordPage } from "./pages/login";
import { HomePage } from "./pages/home";

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
          <Route index element={<DataTable />} />
          <Route path="asset" element={<AssetPage />} />
        </Route>

        <Route path="/" element={<HomeLayout />} > 
          <Route index element={<HomePage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
