import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "antd/dist/antd.css";
import Header from "./components/Layout/Header";
import Employee from "./pages/Employee";
import Login from "./pages/Login";
import ManagerPage from "./pages/ManagerPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="login" />} />
          <Route path="/login" element={<Login />} />
          <Route element={<Header />}>
            <Route path="/employee" element={<Employee />} />
            <Route path="/manager" element={<ManagerPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
