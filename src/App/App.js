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
  const [first, setFirst] = useState(true);
  const [modalIsOpen, setIsOpen] = useState(false);

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

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    console.log("after open")
  }

  function closeModal() {
    setIsOpen(false);
  }

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
              <TasksList onOpenModal={openModal}></TasksList>
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
          <Banner></Banner>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={modalStyles}
            contentLabel="Example Modal"
          >
            <h2>Are You Sure?</h2>
            <button onClick={closeModal}>Cancel</button>
            <button onClick={closeModal}>Yes</button>
          </Modal>
          <Footer></Footer>
        </div>
      </Router>
    </BannerContext.Provider>
  );
}

export default App;
