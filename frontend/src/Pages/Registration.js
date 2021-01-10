import React from "react";
import "./Registration.css";
import {
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
} from "@material-ui/core";

import Layout from "../Layout/Layout";

export default function Registration() {
  return (
    <Layout>
      <div className="registration">
        <Card>
          <CardContent>
            <Typography variant="h4" className="reg-title">
              Registration
            </Typography>
            <form>
              <TextField
                id="outlined-basic"
                label="Full Name"
                variant="outlined"
                style={{
                  marginTop: "10px",
                }}
                fullWidth
              />
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                style={{
                  marginTop: "10px",
                }}
                fullWidth
              />
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                style={{
                  marginTop: "10px",
                }}
                fullWidth
              />
            </form>
            <Button
              variant="contained"
              color="secondary"
              style={{ marginTop: "10px" }}
            >
              Registration
            </Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
