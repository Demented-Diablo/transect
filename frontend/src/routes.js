import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DataPage from "./pages/DataPage";
import TaskTriggerPage from "./pages/TaskTriggerPage";
import TaskStatusPage from "./pages/TaskStatusPage";
import PlantNet from "./pages/PlantNet";

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/data" element={<DataPage />} />
      <Route path="/tasks" element={<TaskTriggerPage />} />
      <Route path="/status" element={<TaskStatusPage />} />
      <Route path="/plantnet" element={<PlantNet />} />
    </Routes>
  </Router>
);

export default AppRoutes;
