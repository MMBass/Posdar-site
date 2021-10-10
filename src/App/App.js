import { useState, useEffect } from 'react';
import { posdarUrlInstance } from "../axios";
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Modal from 'react-modal';

import './App.css';
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import SaveTaskForm from "../pages/SaveTaskForm/SaveTaskForm";
import TasksList from "../pages/TasksList/TasksList";
import NoMatch from "../pages/NoMatch/NoMatch";
import Footer from "../components/Footer/Footer";
import { BannerContext } from "../BannerContext";
import { ModalContext } from "../ModalContext";

Modal.setAppElement('#root');

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '250px',
    height: '200px',
    textAlign: "center",
  },
};

function App() {
  const [message, setMessage] = useState(["darkgray", ""]);
  const [modal, setModal] = useState(false);
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
  }, []);

  return (
    <BannerContext.Provider value={{ message, setMessage }}>
    <ModalContext.Provider value={{ modal, setModal }}>
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
    </ModalContext.Provider>
    </BannerContext.Provider>
  );
}

export default App;
