import { useState, useEffect, useContext} from 'react';
import { posdarUrlInstance } from "../../axios";
import './App.css';
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import SaveTaskForm from "../SaveTaskForm/SaveTaskForm";
import Footer from "../Footer/Footer";
import {BannerContext} from "../../BannerContext";

function App() {
  const [message, setMessage] = useState(["darkgray",""]);
  const [first, setFirst] = useState(true);

  function init() {
    posdarUrlInstance.get('/').then((res) => {
      if (res.status === 200) {
        setMessage(["darkgray","server is on"]);
        setFirst(false);
      }
    }).catch((err) => {
      console.log(err)
      setMessage(["#ff5e5e","server error"]);
    });

  }

  useEffect(() => {
    if(first === true) init();
  });

  return (
    <BannerContext.Provider value={{message, setMessage}}>
      <div className="App">
        <Header></Header>
        <Banner></Banner>
        <SaveTaskForm></SaveTaskForm>
        <Footer></Footer>
      </div>
    </BannerContext.Provider>
  );
}

export default App;
