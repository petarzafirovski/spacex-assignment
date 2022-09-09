import "./App.css";
import { Route, Routes } from "react-router-dom";
import MissionsList from "./components/missions/MissionsList";
import Rocket from "./components/rocket/Rocket";

const App = () => {
  return (
    <div className="App">
      <ul></ul>
      <Routes>
        <Route path="/" element={<MissionsList></MissionsList>} />
        <Route
          path="/rocket/:missionId/:rocketId"
          element={<Rocket></Rocket>}
        />
      </Routes>
    </div>
  );
};

export default App;
