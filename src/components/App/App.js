import { useState } from 'react';
import './App.css';
import Header from "../Header/Header";
import Alert from "../Alert/Alert";
import SaveTaskForm from "../SaveTaskForm/SaveTaskForm";
import Footer from "../Footer/Footer";

function App() {

  // const [task, setTask] = useState([]);
  // const [alert, setAlert] = useState([]);

  return (
    <div className="App">
        <Header></Header>
        <Alert></Alert>
        <SaveTaskForm></SaveTaskForm>
        <Footer></Footer>
    </div>
  );
}

export default App;
