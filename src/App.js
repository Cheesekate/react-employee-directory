import React from 'react';
import './App.css';
import Jumbotron from './components/jumbotron/jumbotron';
import Navbar from './components/navbar/navbar';
import API from "./utils/API";
import moment from "moment";
import "./App.css"

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={EmployeeDirectory} />
          <Route exact path="/search" component={Search} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;



search = () => {
  const { currentEmployee } = this.state;
  let
}

render(){
  const data = this.state.results;
  const { currentEmployee } = this.state;

  return (
    data.length > 0 && (
  )
}



function App() {
  return (
    <>
      <Jumbotron></Jumbotron>


    </>
  );
}

export default App;
