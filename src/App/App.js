import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      redirect_uri: null,
      hasToken: false
    }
  }

  componentWillMount(){
    let token = window.localStorage.getItem('token')
    if (token) {
      fetch(process.env.REACT_APP_API_URL + '/v1/api/users/token', {
        headers: {
          'x-access-token': token
        }
      })
      .then(res => res.json())
      .then(data => {
        console.log("data ===> ", data)
        if (data.success) {
          this.setState({hasToken:true})
        } else {
          const specs = 'width=500,height=500';
          let newWindow = window.open('', '_blank', specs);
          fetch(process.env.REACT_APP_API_URL + '/v1/api/users/login', {
            credentials: 'include'
          })
            .then(res=>res.json())
            .then(data => {
              this.setState({redirect_uri: data})
              // window.location = data
              // console.log(data);
              newWindow.location.href = data
              this.checkForToken()
            })
        }
      })

    }
  }

  checkForToken(){
    let myInterval = setInterval(()=> {
      console.log('in Interval');
      let token = window.localStorage.getItem('token')
      if (token) {
        this.setState({hasToken:true})
      }
      console.log(token);
      clearInterval(myInterval)
    }, 1000)
  }

  renderSignIn(){
      if (this.state.hasToken) {
        return(<div>HAS TOKEN</div>)
      }
      return(<div>AINT NO TOKEN BRO</div>)

  }

  handleClick(){
    console.log('here');
    const specs = 'width=500,height=500';
    let newWindow = window.open('', '_blank', specs);
    fetch(process.env.REACT_APP_API_URL + '/v1/api/users/login', {
      credentials: 'include'
    })
      .then(res=>res.json())
      .then(data => {
        this.setState({redirect_uri: data})
        // window.location = data
        // console.log(data);
        newWindow.location.href = data
        this.checkForToken()
      })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header" onClick={this.handleClick.bind(this)}>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h2>Welcome to React</h2>
          {this.renderSignIn()}
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
