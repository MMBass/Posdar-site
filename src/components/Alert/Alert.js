import { useState } from 'react';
import './Alert.css';

function Alert() {

  const [alert, setAlert] = useState();

  return (
    <div className="Alert">
          <p>{alert}</p>
    </div>
  );
}

export default Alert;