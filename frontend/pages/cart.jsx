import axios from 'axios';
import React, { useEffect, useState, useContext} from 'react';
import DropdownMenu from '../Components/DropdownMenu';
import Context from '../Context/Context';
import CartItem from '../Components/CartItem';
import Button from '../Components/Subcomponents/Button';

export default function Cart() {
  const { menu, setMenu, cartItens, setCartItens, token, email }= useContext(Context);
  const [status, setStatus] = useState({
    type: '',
    mensagem: ''
  })
  const subtractQuantity = async (id, newQ) => {
    await axios.put(`http://localhost:3001/products/${id}`, newQ)
  }
  const handleSubmit = async e => {
    e.preventDefault();
    const cartObj = {
        cartItens: cartItens,
        user: email
    }
      const headers = {
        'headers': {
          'content-type': 'application/json',
          'Authorization': token
        }
      }
     // const response = await axios.post('https://codigofont-chalenge-back.herokuapp.com/users', user);
     console.log(cartItens)
     await axios.post('http://localhost:3001/cart', cartObj, headers).then((response) => {
        console.log(response);
        setStatus({
          type: 'success',
          mensagem: 'Compra realizada com sucesso'
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
      setCartItens([]);
  };
  
    return (
    <>
      <div className="bg-dark bg">
           { menu ? <DropdownMenu /> : null}
          {cartItens.map((i) => <CartItem key={i.name} name={i.name} price={i.price} />)}
          <h1 className="text-light">{status.mensagem}</h1>
          <Button
            type="submit"
            value="Comprar"
            className="btn btn-primary"
            onClick={handleSubmit}  
            />
      </div>
    </>
    )
}
