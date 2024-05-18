import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home"
import { VagasCadastradas } from "../pages/VagasCadastradas";
import { VagasDisponiveis } from "../pages/VagasDisponiveis";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="vagasCadastradas" element={<VagasCadastradas />}/>
      <Route path="/vagasDisponiveis" element={<VagasDisponiveis />}/>
    </Routes>
  );
}