import { useState, useContext } from 'react';
import Input from './Subcomponents/Input';
import axios from 'axios';
import Button from './Subcomponents/Button';
import Context from '../Context/Context';

function RegisteForm(props) {
  const { token } = useContext(Context);
  const [game, setGame] = useState({
    productName: '',
    price: 0,
    quantity: 0
  });
  const [message, setMessage] = useState('')
  const [imgPath, setImgPath] = useState('')
  const handleChange = ({ target: { name, value } }) => {
    setGame(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleUpload = ({ target: {name, files } }) => {
   console.log(files[0])
   setImgPath(files[0])
  };
  const handleSubmit = async e => {
    e.preventDefault();
    if(game.productName === '') {
      setMessage('Preencha o campo de nome do produto')
      return null;
    }
    if(game.price === 0) {
      setMessage('Preencha o campo de preço do produto')
      return null;
    }
    if(imgPath === '') {
      setMessage('Inclua uma imagem do produto')
      return null;
    }
    if(!token) {
      setMessage('Nenhum usuario logado');
      return null;
    }
    try {
    //  const response = await axios.post('https://codigofont-chalenge-back.herokuapp.com/products', game);
    const headers = {
      'headers': {
        'content-type': 'application/json',
        'Authorization': token
      }
    }
    let data = new FormData();
    data.append('imgPath', imgPath)
      const response = await axios.post('http://localhost:3001/products', game, headers)
      console.log(response.data._id);
      const uploadedImg = await axios.put(`http://localhost:3001/image/${response.data._id}`,
      data,
      headers)
      console.log(uploadedImg)
    } catch (error) {
      console.log(error);
    }
    setMessage("Produto adicionado com sucesso")
  };
  return (
    <div className="d-flex justify-content-center">
    <div className="form-container bg-light">
      <form  encType="multipart/form-data" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label ">Cadastro</label>
          <Input 
          type='name'
          name='productName'
          placeholder="Nome do jogo"
          onChange= {handleChange}/>
          <Input 
          type='number'
          name='price'
          placeholder="Preço"
          onChange= {handleChange}/>
           <Input 
          type='number'
          name='quantity'
          placeholder="Estoque"
          onChange= {handleChange}/>
           <Input 
          type='file'
          name='imgPath'
          placeholder="Imagem"
          onChange= {handleUpload}/>
        </div>
        <span>{message}</span>
        <Button
          type="submit"
          value="Cadastrar jogo"
          className="btn btn-outline-primary col-12"
          />
      </form>
    </div>
    </div>
    )
}

export default RegisteForm;