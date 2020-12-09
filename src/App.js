import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//--- Components ---
import Footer from "./components/Footer";
import Header from "./components/header";

//-- Pages ---
import Home from "./pages/home";
import Login from "./pages/Login";
import Profile from "./pages/profile";
import Signup from "./pages/Signup";

import "./scss/style.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="mainwrapper">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
