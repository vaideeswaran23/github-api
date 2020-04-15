import React, { Component } from "react";
import { search } from "./../locale/en";
import axios from "axios";
import User from "./User";

class Main extends Component {
  state = {
    inputValue: "",
    response: "",
  };

  handleOnClick = (event) => {
    const searchValue = this.state.inputValue;
    axios.get(`https://api.github.com/users/${searchValue}`).then((resp) => {
      this.setState({
        response: resp.data,
      });
      this.setState({
        inputValue: "",
      });
    });
  };

  handleOnChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  handleOnKeyPress = (event) => {
    if (event.key === "Enter") {
      const searchValue = event.target.value;
      const xhr = new XMLHttpRequest();
      xhr.open("GET", `https://api.github.com/users/${searchValue}`);
      xhr.send(null);
      xhr.onload = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            const resp = JSON.parse(xhr.response);
            this.setState({
              response: resp,
            });
            this.setState({
              inputValue: "",
            });
          } else {
            console.log("error");
          }
        }
      };
    }
  };

  render() {
    return (
      <div>
        <h1>{search}</h1>
        <input
          type="text"
          name="input-search"
          onKeyPress={this.handleOnKeyPress}
          onChange={this.handleOnChange}
          value={this.state.inputValue}
        />
        <button onClick={this.handleOnClick}>Search</button>
        <User data={this.state.response} />
      </div>
    );
  }
}

export default Main;
