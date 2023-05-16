import Head from 'next/head'
import Image from 'next/image';
import styles from '../../styles/home.module.scss';
import logoImg from '../../public/piz.svg';
import { Input } from '../components/ui/Input'
import { Button } from '../components/ui/Button'
import Link from 'next/link';
import { FormEvent, useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import { canSSRGuest } from './utils/canSSRGuest';

export default function Home() {
  const {signIn}= useContext(AuthContext);
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [loading,setLoading] = useState(false);

  const handleLogin = async (e:FormEvent) =>{
    e.preventDefault();
    if(email === '' || password === ''){
      toast.error('Preencha todos  os campos');
    } 
    setLoading(true);
    let data = {
      email,
      password
    }
    
    await signIn(data);
    setLoading(false);
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
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <Input
            placeholder="Digite sua Senha"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
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

export const getServerSideProps = canSSRGuest(async(context)=>{
  return {
    props:{}
  }
});
 