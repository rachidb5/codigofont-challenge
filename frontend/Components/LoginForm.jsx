import { useState, useContext } from 'react';
import Context from '../Context/Context';
import axios from 'axios';
import Input from './Subcomponents/Input';
import Button from './Subcomponents/Button';

function LoginForm(props) {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  const [status, setStatus] = useState({
    type: '',
    mensagem: ''
  })
  const { token, setToken } = useContext(Context)
  const { email, setEmail } = useContext(Context);
  const handleChange = ({ target: { name, value } }) => {
    setUser(prev => ({
      ...prev,
      [name]: value,
    }));
  }
  const handleSubmit = async e => {
    e.preventDefault();
     // const response = await axios.post('https://codigofont-chalenge-back.herokuapp.com/users', user);
     console.log(user) 
     setEmail(user.email)
     await axios.post('http://localhost:3001/login', user).then((response) => {
        console.log(response.data.token);
        setToken(response.data.token)
        setStatus({
          type: 'success',
          mensagem: 'Login efetuado com sucesso'
        })
      }).catch((err) => {
        if(err.response){
          console.log(err.response)
          setStatus({
            type: 'error',
            mensagem: err.response.data.message
          })
        } else {
          setStatus({
            type: 'error',
            mensagem: 'Tente novamente mais tarde'
          })
        }
      });
  }
  return (
    <div className="d-flex justify-content-center">
    <div className="form-container bg-light">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label ">Login</label>
          <Input 
          type='name'
          name='email'
          placeholder="Digite Seu Nome"
          onChange= { handleChange }/>
          <Input 
          type='password'
          name='password'
          placeholder="Digite Sua Senha"
          onChange= { handleChange }/>
          <span>{status.mensagem}</span>
        </div>
        <Button type="submit" value="Entrar" className="btn btn-primary col-12"/>
      </form>
    </div>
    </div>
    )
}

export default LoginForm;