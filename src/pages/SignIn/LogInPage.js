import React from "react";
import { Link, Redirect } from "react-router-dom";
import { Container, Grid } from "@material-ui/core";
import { OrangeTextField, ColorButton } from "../../styles/inputs";
import LogoImage from "../../images/logo.png";
import { logIn } from "../../redux/actions/authAction";
import { connect } from "react-redux";

function LogInPage({ logIn, auth, history }) {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  function handleChange(event) {
    let type = event.target.id;
    let value = event.target.value;
    type === "email" ? setEmail(value.trim("")) : setPassword(value.trim(""));
  }

  function handleSubmit(event) {

    event.preventDefault();
    let userData = { email, password };
    logIn(userData);
  }

  function checkAuth() {

    if (auth && auth.status === 200) {
      localStorage.setItem("userToken", auth.data.token);
      return
      history.push("/");
    } else {
      localStorage.setItem("userToken","");
      history.push("/signin");
    }
  }

  auth.status && checkAuth();
  return (
    <Container maxWidth="sm">
      <div className="center-div auth-div">
        <Grid container>
          <Grid item xs={12}>
            <img src={LogoImage} alt="Logo" />
          </Grid>
          <h2 className="center-div">Sign In</h2>
          <form onSubmit={handleSubmit}>
            <Grid item xs={12}>
              <OrangeTextField
                id="email"
                label="Email Address"
                placeholder="Enter Email Address"
                className="width-80 input-field"
                type="email"
                onChange={handleChange}
                margin="normal"
                name={email}
              />
              <OrangeTextField
                id="password"
                label="Enter Password"
                placeholder="Enter Password"
                className="width-80"
                type="password"
                onChange={handleChange}
                margin="normal"
                name={password}
              />
              <ColorButton className="login-btn" type="submit">
                LOGIN
              </ColorButton>
              <p>
                Don't have an Account?{" "}
                <Link to="/signup" className="orange-text">
                  Sign Up{" "}
                </Link>
              </p>
            </Grid>
          </form>
        </Grid>
      </div>
    </Container>
  );
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

const mapDispatchToProps = {
  logIn
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogInPage);

// <FormControlLabel className='check-box'
// control={
//     <OrangeCheckbox checked={state.checkedA} onChange={handleChange('checkedA')} value="checkedA" />
// }
// label="Remember Me"
// />
