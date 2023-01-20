import logo from '../../assets/logo.svg';
import './styles.css';
import { useRef } from 'react';
import axios from "axios";
import socketIO from 'socket.io-client';
const socket = socketIO.connect("http://localhost:8080");
const App = () => {
  const socketRef = useRef();
  socketRef.current = socket;
  const userName = useRef();
  const roomName = useRef();

  const handleLogin = async (e) => {
    e.preventDefault();
    const loginResponse = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/room`, {
      userName, roomName
    });
    console.log("Login response: ", loginResponse);
  }

  return (
    <div className="App">
      <header className="App-header">
        <form action={`${process.env.REACT_APP_BACKEND_URL}/room`} method="POST">
          <input type="text" ref={userName} placeholder="User name" /> <br />
          <input type="text" ref={roomName} placeholder="Room name" /> <br />
          <button onClick={handleLogin}>Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
