import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import MaterialPage from "./components/MaterialPage/MaterialPage";
import ChapterPage from "./components/ChapterPage/ChapterPage";

export default function App() {
  return (
    <div className="App">
      {/* <h1>hello this is Aditya</h1> */}
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route path="/material">
              <MaterialPage />
            </Route>
            <Route path="/chapterPage">
              <ChapterPage />
            </Route>
          </Switch>
        </div>
      </Router>
      {/* <Dashboard /> */}
    </div>
  );
}
