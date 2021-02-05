import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import SideBar from "./components/SideBar";
import AddTaskForm from "./pages/AddTaskForm";

export default function App() {
  return (
    <div className="App" style={{ display: "flex" }}>
      <Router>
        <SideBar />
        <Switch>
          <Route path="/create-task">
            <AddTaskForm />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
