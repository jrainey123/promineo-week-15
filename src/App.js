import React, {Component} from "react";
import './App.css';
import { SessionsList } from "./components/SessionsList";
import NavBar from './components/Nav';

class App extends Component {
   render(){
     return(
       <div>
          <NavBar />
         <SessionsList />
       </div>
     )
   }
 }
export default App;
