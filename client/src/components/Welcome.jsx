import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import axios from 'axios';




const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
        </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

const SignInContainer = styled.div`
    margin-top: 10;
    display: 'flex';
    flex-direction: 'column';
    align-items: 'center';
  `

const Form = styled.form`
margin-top: 10;
`

export const Welcome = props => {
  const [email, setEmail] = useState("");


  function getOrganizationInfo() {
    axios.get(`admins/login?email=${email}`)
      .then(response => {
        console.log("RESPONSE", response)
        console.log("PROPS ", props)
        props.setOrganization(response.body)
        console.log("ORGANIZATION", props.organization)
      });
  };

  return (
    <Container component="main" maxWidth="xs">

      <CssBaseline />
      <SignInContainer>
        <Typography component="h1" variant="h5">
          Sign in
            </Typography>
        <Form noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => getOrganizationInfo()}
          >
            Sign In
              </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
                  </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Form>
      </SignInContainer>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );

}










