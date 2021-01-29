import React, { Component } from "react";
import { connect } from "react-redux";
import "./Registration.css";
import { registration } from "../actions/authActions";

import {
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
} from "@material-ui/core";

import Layout from "../Layout/Layout";

class Registration extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  onChangeHandler = (event) => {
    // console.log(event);
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(this.props);
    this.props.registration(this.state);
  };

  render() {
    return (
      <Layout>
        <div className="registration">
          <Card>
            <CardContent>
              <Typography variant="h4" className="reg-title">
                Registration
              </Typography>
              <form onSubmit={this.onSubmitHandler}>
                <TextField
                  id="outlined-basic"
                  label="Full Name"
                  name="name"
                  variant="outlined"
                  value={this.state.name}
                  onChange={this.onChangeHandler}
                  style={{
                    marginTop: "10px",
                  }}
                  fullWidth
                />
                <TextField
                  id="outlined-basic"
                  label="Email"
                  name="email"
                  variant="outlined"
                  value={this.state.email}
                  onChange={this.onChangeHandler}
                  style={{
                    marginTop: "10px",
                  }}
                  fullWidth
                />
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  name="password"
                  value={this.state.password}
                  onChange={this.onChangeHandler}
                  style={{
                    marginTop: "10px",
                  }}
                  fullWidth
                />
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ marginTop: "10px" }}
                  type="submit"
                >
                  Registration
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </Layout>
    );
  }
}

export default connect(null, { registration })(Registration);
