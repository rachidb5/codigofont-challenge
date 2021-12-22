import React, { useState } from 'react';
import Context from './Context';

function Provider({ children }) {
    const [menu, setMenu] = useState(false);
    const [cartItens, setCartItens] = useState([]);
    const context = {
      menu,
      setMenu,
      cartItens,
      setCartItens
    };
    return (
        <Context.Provider value={ context }>
          { children }
          { console.log(cartItens)}
        </Context.Provider>
      );
}

export default Provider