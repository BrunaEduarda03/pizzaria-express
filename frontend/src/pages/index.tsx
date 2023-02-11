import Head from 'next/head'
import Image from 'next/image';
import styles from '../../styles/home.module.scss';
import logoImg from '../../public/logo.svg';
import { Input } from '../components/ui/Input'
import { Button } from '../components/ui/Button'
import Link from 'next/link';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function Home() {
  const {signIn}= useContext(AuthContext);

  const handleLogin = (e) =>{
    e.preventDefault();
    let data = {
      email:'teste@teste.com',
      password:'123123'
    }
    signIn(data);
  }
  return (
    <>
    <Head>
      <title>SujeitoPizza - Faça seu login</title> 
    </Head>
    <div className={styles.containerCenter}>
      <Image src={logoImg} alt="Logo Sujeito Pizzaria" />

      <div className={styles.login}>
        <form onSubmit={handleLogin}> 
          <Input
            placeholder=" Digite seu email"
            type="text"
          />

          <Input
            placeholder="Digite sua Senha"
            type="password"
          />
          
          <Button
            type="submit"
            loading={false}
          >
            Acessar
          </Button>
        </form>

        <Link href="/signup">
           <a className={styles.text}>Nao possui uma conta? Cadastre-se</a>
        </Link>

      </div>
    </div>
    </>
  )
}
