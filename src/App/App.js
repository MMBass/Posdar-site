import { useState, useEffect } from 'react';
import { posdarUrlInstance } from "../axios";
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import SaveTaskForm from "../pages/SaveTaskForm/SaveTaskForm";
import TasksList from "../pages/TasksList/TasksList";
import NoMatch from "../pages/NoMatch/NoMatch";
import Footer from "../components/Footer/Footer";
import { BannerContext } from "../BannerContext";

function App() {
  const [message, setMessage] = useState(["darkgray", ""]);
  const [first, setFirst] = useState(true);

  function init() {
    posdarUrlInstance.get('/').then((res) => {
      if (res.status === 200) {
        setMessage(["darkgray", "server is on"]);
        setFirst(false);
      }
    }).catch((err) => {
      console.log(err)
      setMessage(["#ff5e5e", "server error"]);
    });

  }

  useEffect(() => {
    if (first === true) init();
  });

  return (
    <BannerContext.Provider value={{ message, setMessage }}>
      <Router>
        <Header></Header>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <SaveTaskForm></SaveTaskForm>
            </Route>
            <Route exact path="/list">
              <TasksList></TasksList>
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
          <Banner></Banner>
          <Footer></Footer>
        </div>
      </Router>
    </BannerContext.Provider>
  );
}

export default App;
