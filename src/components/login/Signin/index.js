import React, { Component } from 'react';
import { SigninClient } from '../../../clients/SigninClient';
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text
} from "./SigninElements";

class Signin extends Component {

  signinClient = new SigninClient();

  state= {
      form:{
          username: '',
          password: ''
      }
  }

  handleChange = async (e) => {
      this.setState({
          form:{
              ...this.state.form,
              [e.target.name]: e.target.value
          }
      });
  }

  login = async() => {
      const response = await this.signinClient.verifyUser(this.state.form.username, this.state.form.password);
      console.log(response);
      if(response.data.length === 0){
          console.log("No existe el usuario");
      } else{
          console.log("Inicio de Sesión");
      }
  }

  render(){
      return (
        <>
        <Container>
            <FormWrap>
            <Icon to="/">karaoke!</Icon>
            <FormContent>
                <Form action="#">
                <FormH1>Inicie Sesión en su cuenta</FormH1>
                <FormLabel htmlFor="for">Nombre de Usuario</FormLabel>
                <FormInput name="username" type="text" required onChange={this.handleChange}/>
                <FormLabel htmlFor="for">Contraseña</FormLabel>
                <FormInput name="password" type="password" required onChange={this.handleChange}/>
                <FormButton type="button" onClick={this.login}>Iniciar Sesión</FormButton>
                <Text>Olvidó su Contraseña?</Text>
                </Form>
            </FormContent>
            </FormWrap>
        </Container>
        </>
    )
    }
}

export default Signin;
