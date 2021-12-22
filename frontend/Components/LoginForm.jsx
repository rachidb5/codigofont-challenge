import React from 'react';
import Input from './Subcomponents/Input';
import Button from './Subcomponents/Button';

function LoginForm(props) {
  return (
    <div className="d-flex justify-content-center">
    <div className="form-container bg-light">
      <form>
        <div className="mb-3">
          <label className="form-label ">Login</label>
          <Input 
          type='name'
          name='nick'
          placeholder="Digite Seu Nome"
          onChange= { ({ target: { value } }) => console.log(value) }/>
          <Input 
          type='password'
          name='nick'
          placeholder="Digite Sua Senha"
          onChange= { ({ target: { value } }) => console.log(value) }/>
        </div>
        <Button type="submit" value="Entrar" className="btn btn-primary col-12"/>
      </form>
    </div>
    </div>
    )
}

export default LoginForm;