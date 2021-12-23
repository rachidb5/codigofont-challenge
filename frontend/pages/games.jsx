import axios from 'axios';
import React, { useEffect, useState} from 'react';
import GameCard from '../Components/GameCards';
import DropdownMenu from '../Components/DropdownMenu';
import Context from '../Context/Context';
import { useContext } from 'react';

export default function Games(data) {
  const { menu, setMenu }= useContext(Context);
  const games = data.data;

    return (
      <div className="bg-dark bg">
        { menu ? <DropdownMenu /> : null}
          <section className="gallery white d-flex justify-content-evenly">
            {games.map(game => <GameCard
            key={game.productName}
            name={game.productName}
            price={game.price}
            quantity={game.quantity}
            id={game._id}
            gameImg={`http://localhost:3001/files/${game._id}.${'jpeg' || 'png' || 'jpg'}`}/>)}
          </section>
      </div>
    )
}

Games.getInitialProps = async () => { 
    // const res = await axios.get('https://codigofont-chalenge-back.herokuapp.com/products')
    const res = await axios.get('http://localhost:3001/products')
  return {
    data: res.data
  }
}
