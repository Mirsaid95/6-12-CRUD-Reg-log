import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { Login } from "./components/home/Login";
import { Home } from "./components/home";
import { Register } from "./components/home/Regisiter/register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/app" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
