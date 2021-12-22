import axios from 'axios';
import React, { useEffect, useState} from 'react';
import DropdownMenu from '../Components/DropdownMenu';
import Context from '../Context/Context';
import { useContext } from 'react';
import CartItem from '../Components/CartItem';
import Button from '../Components/Subcomponents/Button';

export default function Cart() {
  const { menu, setMenu, cartItens}= useContext(Context);
  const handleSubmit = async e => {
    e.preventDefault();
    const cartObj = {
        cartItens: cartItens
    }
    try {
     // const response = await axios.post('https://codigofont-chalenge-back.herokuapp.com/users', user);
      const response = await axios.post('http://localhost:3001/cart', cartObj);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  
    return (
    <>
      <div className="bg-dark bg">
           { menu ? <DropdownMenu /> : null}
          {cartItens.map((i) => <CartItem key={i.name} name={i.name} price={i.price} />)}
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
