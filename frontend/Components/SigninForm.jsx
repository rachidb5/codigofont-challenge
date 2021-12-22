import { useState } from 'react';
import axios from 'axios';
import Input from './Subcomponents/Input';
import Button from './Subcomponents/Button';

function SigninForm(props) {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  const [status, setStatus] = useState({
    type: '',
    mensagem: ''
  })
  const [passwordCheck, setPasswordCheck] = useState('');
  const [isChecked, setIsChecked] = useState(true)
  const handleChange = ({ target: { name, value } }) => {
    setUser(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(user.password)
    console.log(passwordCheck)
    console.log(user.password === passwordCheck)
    if(user.password !== passwordCheck) {
      setIsChecked(false)
      console.log(isChecked)
      return;
    }
     // const response = await axios.post('https://codigofont-chalenge-back.herokuapp.com/users', user);
      await axios.post('http://localhost:3001/users', user).then((response) => {
        console.log(response);
        setStatus({
          type: 'success',
          mensagem: 'Novo usuario cadastrado'
        })
      }).catch((err) => {
        if(err.response){
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
  };

  return (
    <div className="d-flex justify-content-center">
    <div className="form-container bg-light">
      <form>
        <div className="mb-3">
          <label className="form-label ">Cadastro</label>
          <Input 
          type='email'
          name='email'
          placeholder="Digite Seu Email"
          onChange= { handleChange }/>
          <Input 
          type='password'
          name='password'
          placeholder="Digite Sua Senha"
          onChange= { handleChange }/>
           <Input 
          type='password'
          name='passwordcheck'
          placeholder="Confirme Sua Senha"
         onChange= { ({ target: { value } }) => setPasswordCheck(value) }
         />
        </div>
        {isChecked ? null : <span className="mb-2 text-danger">As senhas digitadas são diferentes</span>}
        <span>{status.mensagem}</span>
        <Button
         type="submit"
         value="Cadastre-se"
         className="btn btn-outline-primary col-12"
         onClick={handleSubmit} />
      </form>
    </div>
    </div>
    )
}

export default SigninForm;