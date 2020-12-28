import React, { useState } from "react";

import { Container, Card, Form, Button } from "react-bootstrap";
import { Link, Redirect} from "react-router-dom";

import firebase_app from "./config/firebase";

import { useDispatch } from "react-redux";

import { signIn } from "./actions";

const Registo = () => {

  const dispatch = useDispatch();

  const [email, setEmail] = useState ("")
  const [password, setPassword] = useState ("")
  const [confirmPass, setConfirmPass] = useState ("")
  const [registado, setRegistado] = useState (false)

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
    console.log(email)
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value)
    console.log(password)
  };
  const handleChangeConfirmPassword = (e) => {
    setConfirmPass(e.target.value)
    console.log(confirmPass)
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //prevents reload
    if (password === confirmPass) {
      firebase_app
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
          dispatch(signIn())
          console.log('resgistado')
          setRegistado(true)
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorMessage)
        });
    }
  };

    return (
      <div className="text-center">
        
        {registado === true ? (<Redirect to="/"/>) : (<div></div>)}

        <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <div>
            <Card>
              <Card.Body>
                <h2 className="text-center mb-4">Registo</h2>
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
                  </Form.Group>

                  <Form.Group id="confirmPass" className="text-left">
                    <Form.Label>Confirmar Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="confirmPass"
                      required
                      placeholder="Confirmar Password..."
                      value={confirmPass}
                      onChange={handleChangeConfirmPassword}
                    ></Form.Control>
                  </Form.Group>

                  <Button type="submit" className="w-100" onClick={handleSubmit}>
                    Registar
                  </Button>
                </Form>
              </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
              Já tem uma conta?
              <p>
                <Link to="/login">Clica Aqui</Link>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
    );
  }
export default Registo;
