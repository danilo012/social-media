import "./App.css";
import { AppRoutes } from "routes/AppRoutes";
import { ToastWrapper } from "components";

function App() {
  return (
    <div className="bg-dark text-light">
      <ToastWrapper />
      <AppRoutes />
    </div>
  );
}

export default App;
