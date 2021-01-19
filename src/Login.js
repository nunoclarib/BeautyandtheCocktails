import React, { useState } from "react";

import { Container, Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import firebase_app from "./config/firebase";

import { useDispatch } from "react-redux";

import { signIn } from "./actions";

const Login = () => {

  const dispatch = useDispatch();

  const [email, setEmail] = useState ("")
  const [password, setPassword] = useState ("")
  const [error, setError] = useState ("")

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
    console.log(email)
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value)
    console.log(password)
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    firebase_app
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        dispatch(signIn())
        console.log("Signed In");
      })
      .catch((error) => {
        //var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);

        setError(`Ocorreu um erro no login.
        Tenta novamente`)
      });
  };
    return (
      <section>
      <div class="hero-wrap js-fullheight">
      <div class="overlay"></div>
      <div class="container">
      <div className="text-center">
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <div className="text-center">
              <Card>
                <Card.Body>
                  <h2 className="text-center mb-4">Login</h2>
                  <Form>
                    <Form.Group id="email" className="text-left">
                      <Form.Label>E-mail</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        required
                        placeholder="E-mail..."
                        value={email}
                        onChange={handleChangeEmail}
                      ></Form.Control>
                    </Form.Group>

                    <Form.Group id="password" className="text-left">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        name="password"
                        required
                        placeholder="Password..."
                        value={password}
                        onChange={handleChangePassword}
                      ></Form.Control>

                      {(error!=="") ? (<div class="alert alert-danger alert-dismissible fade show mt-3" role="alert">
                            {error}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                    </div>) :(<div></div>)}
        
                    </Form.Group>

                      <Button
                        type="submit"
                        className="w-100"
                        onClick={handleSubmit}
                      >
                        Login
                      </Button>
                  </Form>
                </Card.Body>
                <div className="w-100 text-center mt-2" >
                Ainda não tem uma conta?
                <p>
                  <Link to="/registo">Regista-te</Link>
                </p>
              </div>
              </Card>
              
            </div>
          </div>
        </Container>
      </div>
      </div>
      </div>
      </section>
    );
  }

export default Login;
