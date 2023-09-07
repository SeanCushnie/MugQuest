import logo from './logo.svg';
import './index.css';
import { Auth } from "./components/Auth"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from "./configs/firebase"
import MainContainer from './containers/MainContainer';

function App() {

 
  
    return (
      <div>

      <MainContainer/>
      </div>
    )
  }



export default App;
