import React, {useState} from "react";
import JobSeeker from "./pages/JobSeeker"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserContext from "./utils/UserContext";


function App() {
  const [email, setEmail] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <Router>
      <UserContext.Provider value={{email, setEmail, loggedIn, setLoggedIn}}>
        <div>
          <Switch>
            <Route exact path="/">
              <JobSeeker />
            </Route>
          </Switch>
        </div>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
