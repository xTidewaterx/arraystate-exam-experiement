import logo from './logo.svg';
import './App.css';

//<LoginPostRequest/> functions check
import FetchAllSocialEntries from './components/GetRequest';
//we used this:: import GetAllPosts from './components/GetAllPosts';
// we used this:: import PostComment from './components/PostComment';
import LoginPostRequest from './components/LoginPostRequest';
import PostSomething from './components/PostSomething';

function App() {

  return (
    <div className="App">
<PostSomething/>

      <header className="App-header">

      <h3>Register profile request, then use info state to auth further requests</h3>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

    </div>
  );
}

export default App;
