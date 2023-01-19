import logo from '../../assets/logo.svg';
import './styles.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <form action={process.env.REACT_APP_BACKEND_URL} method="POST">
          <input type="text" name="name" placeholder="User name" /> <br />
          <input type="text" name="room" placeholder="Room name" /> <br />
          <button>Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
