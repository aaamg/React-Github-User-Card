import React, { Component } from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import Card from "./Card";


const url = `https://api.github.com/users/aaamg`;
const urlFollow = `https://api.github.com/users/aaamg/followers`;

class App extends Component {
  state = {
    gitUser: [],
    gitFollowers: []
  };

  componentDidMount() {
    axios
      .get(url)
      .then(res => {
        //console.log(res);
        this.setState({
          user: res.data,
          gitName: res.data.name,
          gitPic: res.data.avatar_url
        });
      })
      .catch(err => {
        console.log("Error in axios pull", err);
      });

      axios
      .get(urlFollow)
      .then(res => {
        console.log(res);
        // const person = res.data.map(item => {
        //   return item.user;
        // });
        this.setState({
         ...this.state, 
          gitFollowers: res.data,
          gitNames: res.data.login,
          gitPics: res.data.avatar_url
        });
      })
      .catch(err => {
        console.log("Error in axios pull", err);
      });
  }


  render() {
    return (
      <div>
        <h2>Me</h2>
        <p>{this.state.gitName}</p>
        <img src={this.state.gitPic} />
        <h2>My Followers</h2>
        {this.state.gitFollowers.map(item => {
          return <Card item={item}/>
        })}
        

      </div>
    );
  }
}

export default App;

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

