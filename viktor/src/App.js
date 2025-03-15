import logo from './logo.svg';
import './App.css';

const Book = (prompt) => {
  return(
    <div>{prompt.title}</div>
  )
}
const SignIn = (props) => {
  return(
<div>{props.textbox}</div>
  )
}
const BookList = () => {
  return(
    <ul>
      <Book
      title="Pet Sematary"
      author="Stephen King"
      price="25"
      />
      <Book
      title="IT"
      author="Stephen King"
      price="20"
      />
    </ul>
  )
}
const book = (props) => {
  return(
    <li className="book">
      <div>{props.title}</div>
      <div>{props.author}</div>
      <div>{props.price}</div>
    </li>
  )
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        <Book title="Pod Igoto"></Book>
        <Book title="Pet Semerary">Cena:25</Book>
      </header>
    </div>
  );
}

export default App;
