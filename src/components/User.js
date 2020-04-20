import React, { Component } from "react";
import axios from "axios";
import "./../styles/User.css";

class User extends Component {
  state = {};
  render() {
    return (
      <div className={`user-container ${this.props.data ? "show" : "hide"}`}>
        <img className="avatar" src={this.props.data.avatar_url} />
        <a
          className="user-links"
          href={this.props.data.html_url}
          target="_blank"
        >
          <div>{this.props.data.login}</div>
        </a>
        <section className="sub-links">
          <a
            className="user-links sub"
            href={`${this.props.data.html_url}?tab=followers`}
            target="_blank"
          >
            <span>
              {this.props.data.followers}{" "}
              {this.props.data.followers_url ? " followers " : ""}
            </span>
          </a>
          <a
            className="user-links sub"
            href={`${this.props.data.html_url}?tab=repositories`}
            target="_blank"
          >
            <span>
              {this.props.data.public_repos}
              {this.props.data.repos_url ? " repos " : ""}
            </span>
          </a>
          <a
            className="user-links sub"
            href={`${this.props.data.html_url}?tab=following`}
            target="_blank"
          >
            <span>
              {this.props.data.following}
              {this.props.data.following_url ? " following " : ""}
            </span>
          </a>
        </section>
      </div>
    );
  }
}

export default User;
