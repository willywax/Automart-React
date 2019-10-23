import React from 'react';
import { Link } from "react-router-dom";
import { Container, Grid, FormControlLabel } from '@material-ui/core';
import { OrangeTextField, ColorButton, OrangeCheckbox } from "../../styles/inputs";
import LogoImage from '../../images/logo.png';


function LogInPage() {
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedF: true,
        checkedG: true,
    });

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };

    return (
        <Container maxWidth="sm">
            <div className="center-div auth-div">
                <Grid container>
                    <Grid item xs={12}>
                        <img src={LogoImage} alt="Logo" />
                    </Grid>
                    <h2 className='center-div'>Sign In</h2>
                    <Grid item xs={12}>
                        <OrangeTextField
                            id="standard-textarea"
                            label="Email Address"
                            placeholder="Enter Email Address"
                            multiline
                            className="width-80 input-field"
                            margin="normal"
                        />
                        <OrangeTextField
                            id="standard-textarea"
                            label="Enter Password"
                            placeholder="Enter Password"
                            multiline
                            className="width-80"
                            margin="normal"
                        />
                        <FormControlLabel className='check-box'
                            control={
                                <OrangeCheckbox checked={state.checkedA} onChange={handleChange('checkedA')} value="checkedA" />
                            }
                            label="Remember Me"
                        />
                        <ColorButton className='login-btn'>
                            LOGIN
                        </ColorButton>
                        <p>Don't have an Account?  <Link to="/signup" className='orange-text'>Sign Up </Link></p>
                    </Grid>
                </Grid>
            </div>
        </Container>

    )
}


export default LogInPage;