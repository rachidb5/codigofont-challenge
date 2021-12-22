import React from 'react';
import RegisterForm from '../Components/RegisterForm';
import DropdownMenu from '../Components/DropdownMenu';
import Context from '../Context/Context';
import { useContext } from 'react';

function GameRegister() {
  const { menu, setMenu }= useContext(Context);
    return (
      <div className="bg-dark bg">
        { menu ? <DropdownMenu /> : null}
        <div className="d-flex flex-row justify-content-evenly">
          <RegisterForm />
        </div>
      </div>
    )
}

export default GameRegister;