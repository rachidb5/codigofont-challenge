import React, { useState } from 'react';
import Context from './Context';

function Provider({ children }) {
    const [menu, setMenu] = useState(false);
    const [cartItens, setCartItens] = useState([]);
    const [token, setToken] = useState('');
    const [email, setEmail] = useState('')
    const context = {
      menu,
      setMenu,
      cartItens,
      setCartItens,
      token,
      setToken,
      email,
      setEmail
    };
    return (
        <Context.Provider value={ context }>
          { children }
        </Context.Provider>
      );
}

export default Provider