import React from 'react';
import Button from './Subcomponents/Button';
import Context from '../Context/Context';
import { useContext, useState } from 'react';
import Image from 'next/image';

export default function GameCard(props) {
    const { name, price, quantity, gameImg} = props;
    const { cartItens, setCartItens }= useContext(Context);
    const [exists, setExists] = useState('');
    function addToCart() {
        const verifyDouble = cartItens.filter((i) => i.name === name)
        if(verifyDouble.length > 0) {
            setExists('Produto já adicionado ao carrinho');
            return null;
        }
        let cart = cartItens;
        cart = [...cart, {name, price, quantity}]
        setCartItens(cart)
    }
    return (
    <div className="card" style={{ width: '18 rem' }}>
       <Image src={gameImg} className="card-img-top" alt="..." width={100} height={100}/>
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">R$ {price}</p>
            <p className="card-text">Quantidade: {quantity}</p>
            <p>{exists}</p>
            <Button
             type="button"
             value="Adicionar ao carrinho"
             className="btn btn-primary"
             onClick={addToCart}/>
        </div>
    </div>
    )
}