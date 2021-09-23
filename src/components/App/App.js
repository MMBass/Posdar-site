import { useState, useEffect, useContext } from 'react';
import { posdarUrlInstance } from "../../axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import SaveTaskForm from "../SaveTaskForm/SaveTaskForm";
import TasksList from "../TasksList/TasksList";
import Footer from "../Footer/Footer";
import { BannerContext } from "../../BannerContext";

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
      <Banner></Banner>
        <div className="App">
          <Switch>
            <Route path="/add">
              <SaveTaskForm></SaveTaskForm>
            </Route>
            <Route path="/list">
              <TasksList></TasksList>
            </Route>
          </Switch>

          <Footer></Footer>
        </div>
      </Router>
    </BannerContext.Provider>
  );
}

export default App;
