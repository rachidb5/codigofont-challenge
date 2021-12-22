import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SigninForm from '../Components/SigninForm';
import LoginForm from '../Components/LoginForm';
import DropdownMenu from '../Components/DropdownMenu';
import Context from '../Context/Context';
import { useContext } from 'react';

export default function Home() {
  const { menu, setMenu }= useContext(Context);
  return (
      <div className="bg-dark bg">
          { menu ? <DropdownMenu /> : null}
        <div className="d-flex flex-row justify-content-evenly">
          <SigninForm />
          <LoginForm />
        </div>
      </div>
    )
}
