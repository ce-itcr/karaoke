import React, { Component } from 'react';
import { SigninClient } from '../../../clients/SigninClient';
import { toast, Toaster } from 'react-hot-toast';
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton
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
      localStorage.setItem('currentUsername', this.state.form.username);
      const response = await this.signinClient.verifyUser(this.state.form.username, this.state.form.password);
      console.log(response);

      if(response.data.length === 0){
          toast.error("Nombre de usuario o contraseña incorrecta.");
          // console.log("No existe el usuario");
      } else{
          toast.success("Bienvenido " + this.state.form.username);
          window.location.assign('/app')
          // console.log("Inicio de Sesión");
      }
  }

  render(){
      return (
        <>
        <Container>
            <div><Toaster/></div>
            <FormWrap>
            <Icon to="/">karaoke!</Icon>
            <FormContent>
                <Form action="#">
                <FormH1>Inicie Sesión en su cuenta</FormH1>
                <FormLabel htmlFor="for">Nombre de Usuario</FormLabel>
                <FormInput name="username" type="text" required onChange={this.handleChange}/>
                <FormLabel htmlFor="for">Contraseña</FormLabel>
                <FormInput name="password" type="password" required onChange={this.handleChange}/>
                <FormButton type="button" onClick={this.login} >Iniciar Sesión</FormButton>
                {/*<Text>Olvidó su Contraseña?</Text>*/}
                </Form>
            </FormContent>
            </FormWrap>
            
        </Container>
        </>
    )
    }
}

export default Signin;
