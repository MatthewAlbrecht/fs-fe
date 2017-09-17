import React, { Component } from 'react';
const queryString = require('query-string');
// import './loginCallback.css';

class LoginCallback extends Component {


componentDidMount(){
  const parsedQuery = queryString.parse(this.props.location.search);
  fetch(process.env.REACT_APP_API_URL + '/v1/api/callback', {
    headers: {
           'Accept': '*/*',
           'Content-Type': 'application/json'
          //  'Authorization': token
        },
    credentials: 'include',
    method: 'post',
    body: JSON.stringify(parsedQuery)
  })
    .then(res => res.json())
    .then(data => {
      if (data) {
        window.localStorage.setItem('token', data)
        window.close()
      }
    })
}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h2>Welcome to CALLBACK</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default LoginCallback;
