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
import { BannerContext } from "../context/BannerContext";
import { LoaderContext } from "../context/LoaderContext";

function App() {
  const [message, setMessage] = useState(["darkgray", ""]);
  const [LoaderC, setLoaderC] = useState(false);
  const [first, setFirst] = useState(true);

  function init() {
    posdarUrlInstance.get('/').then((res) => {
      if (res.status === 200) {
        setMessage(["D6D8D9", "server is on"]);
        setFirst(false);
      }
    }).catch((err) => {
      console.log(err)
      setMessage(["#F8D7DA", "server error"]);
      setFirst(false);
    });

  }

  useEffect(() => {
    if (first === true) init();
  },);

  return (
    <BannerContext.Provider value={{ message, setMessage }}>
      <LoaderContext.Provider value={{ LoaderC, setLoaderC }}>
        <Router>
          <div className="App">
            <Header></Header>
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
            {/* <Footer></Footer> */}
          </div>
        </Router>
      </LoaderContext.Provider>
    </BannerContext.Provider>

  );
}

export default App;
