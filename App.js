import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      isLoggedin: false,
    };
  }

  login = (e) => {
    e.preventDefault();
    const { name, email, password } = this.state;
    console.log("Login:", name, email, password);
    const userData = {
      name,
      email,
      password,
    };
    
    localStorage.setItem("token-info", JSON.stringify(userData));
    this.setState({
      isLoggedin: true,
    });
    this.clearForm();
  };

  register = (e) => {
    e.preventDefault();
    const { name, email, password } = this.state;
    console.log("Register:", name, email, password);
    const userData = {
      name,
      email,
      password,
    };
    
    localStorage.setItem("token-info", JSON.stringify(userData));
    this.setState({
      isLoggedin: true,
    });
    this.clearForm();
  };

  logout = () => {
    localStorage.removeItem("token-info");
    this.setState({
      isLoggedin: false,
    });
  };

  clearForm = () => {
    this.setState({
      name: "",
      email: "",
      password: "",
    });
  };

  isInputValid = () => {
    const { name, email, password } = this.state;
    return name.trim() !== "" && email.trim() !== "" && password.trim() !== "";
  };

  render() {
    const { name, email, password, isLoggedin } = this.state;

    return (
      <>
        <div style={{ textAlign: "center" }}>
          <h1>This is React WebApp </h1>
          {!isLoggedin ? (
            <>
              <form>
                <input
                  type="text"
                  onChange={(e) => this.setState({ name: e.target.value })}
                  value={name}
                  placeholder="Name"
                />
                <input
                  type="email"
                  onChange={(e) => this.setState({ email: e.target.value })}
                  value={email}
                  placeholder="Email"
                />
                <input
                  type="password"
                  onChange={(e) => this.setState({ password: e.target.value })}
                  value={password}
                  placeholder="Password"
                />
                <button type="submit" onClick={this.login}>
                  Login
                </button>
                <button type="submit" onClick={this.register} disabled={!this.isInputValid()}>
                  Register
                </button>
              </form>
            </>
          ) : (
            <>
              <h1>User is logged in</h1>
              <button onClick={this.logout}>Logout user</button>
            </>
          )}
        </div>
      </>
    );
  }
}

export default App;
