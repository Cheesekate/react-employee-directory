import React from 'react';
import './App.css';
import Jumbotron from './components/jumbotron/jumbotron';
import Navbar from './components/navbar/navbar';
import API from "./utils/API";
import moment from "moment";
import "./App.css"



export default class App extends React.Component {
  state = {
    results: [],
    search: "",
  };

  componentDidMount() {
    API.getUser()
      .then((res) =>
        res.data.results.map((result) => ({
          name: `${result.name.first}, ${result.name.last}`,
          searchName: `${result.name.first}, ${result.name.last}`,
          id: result.registered.date,
          photo: result.picture.medium,
          email: result.email,
          phone: result.phone,
          location: result.location.city,
          dob: moment(result.dob.date).format("MM/DD/YYYY"),
        }))
      )
      .then((newData) => this.setState({ results: newData }))
      .catch((error) => console.log(error));
  }

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value.toLowerCase(),
    });
  };






// search = () => {
//   const { currentEmployee } = this.state;
//   let
// }

// render(){
//   const data = this.state.results;
//   const { currentEmployee } = this.state;

//   return (
//     data.length > 0 && (
//   )
// }



// function App() {
//   return (
//     <>
//       <Jumbotron></Jumbotron>


//     </>
//   );
// }

// export default App;
