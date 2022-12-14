import { Container } from "@mui/system";
import { Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import TaskTracker from "./components/TaskTracker";
import WebHeader from "./components/WebHeader";
import Footer from "./components/Footer";
import About from "./components/About";

class App extends Component {
  name = "Noran";
  x = 10;

  render() {
    return (
      <Router>
        <Fragment>
          <WebHeader
            title="To-Do List"
            style={{ display: "block" }}
          ></WebHeader>
          <Container maxWidth="xl" style={{ marginTop: "2rem" }}>
            <Routes>
              <Route
                path="/"
                exact
                element={<Navigate to="/to-do-list" replace />}
              ></Route>
              <Route path="/to-do-list" exact element={<TaskTracker />}></Route>
              <Route path="/to-do-list/about" element={<About />}></Route>
            </Routes>
            <Footer></Footer>
          </Container>
        </Fragment>
      </Router>
    );
  }
}

export default App;
