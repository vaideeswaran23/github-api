import React, { Component } from "react";

class User extends Component {
  state = {};
  render() {
    return (
      <div>
        <img src={this.props.data.avatar_url} />
        <a href={this.props.data.url}>
          <div>{this.props.data.login}</div>
        </a>
        <div>{this.props.data.bio}</div>
        <a href={this.props.data.followers_url}>
          <span>
            {this.props.data.followers}{" "}
            {this.props.data.followers_url ? " followers " : ""}
          </span>
        </a>
        <a href={this.props.data.repos_url}>
          <span>
            {this.props.data.public_repos}
            {this.props.data.repos_url ? " repos " : ""}
          </span>
        </a>
        <a href={this.props.data.following_url}>
          <span>
            {this.props.data.following}
            {this.props.data.following_url ? " following " : ""}
          </span>
        </a>
      </div>
    );
  }
}

export default User;
