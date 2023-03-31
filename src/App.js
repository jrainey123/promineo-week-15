import React, {Component} from "react";
import './App.css';
import { SessionsList } from "./components/SessionsList";
import NavBar from './components/Nav';

class App extends Component {
   render(){
     return(
       <div>
        <br></br>
         <NavBar />
         <h2>After School Enrichment Program</h2>
         <SessionsList />
       </div>
     )
   }
 }
export default App;
