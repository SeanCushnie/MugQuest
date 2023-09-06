import logo from './logo.svg';
import './App.css';
import { Auth } from "./components/Auth"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from "./configs/firebase"
import MainContainer from './containers/MainContainer';

function App() {

 
  
    return (
      <div>
      <h1> Hello World</h1>
      <MainContainer/>
      </div>
    )
  }



export default App;
