import Head from 'next/head'
import Image from 'next/image';
import styles from '../../../styles/home.module.scss';
import logoImg from '../../../public/piz.svg';
import { Input } from '../../components/ui/Input'
import { Button } from '../../components/ui/Button'
import Link from 'next/link';
import { FormEvent, useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';


export default function SignUp() {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [loading,setLoading] = useState(false);
  const {signUp} = useContext(AuthContext);

  async function handleRegister(e:FormEvent){
    e.preventDefault();
    if(name == '' || email == '' || password == ''){
      toast.error('preencha todos os campos');
      return;
    }
    setLoading(true);
    await signUp({name,email,password});
    setLoading(false);
  }
  return (
    <>
    <Head>
      <title>Faça seu cadastro agora!</title> 
    </Head>
    <div className={styles.containerCenter}>
      <Image src={logoImg} alt="Logo Sujeito Pizzaria" />

      <div className={styles.login}>
      
        <form onSubmit={handleRegister}>
        
           <Input
            placeholder="Digite seu nome"
            type="text"
            value={name}
            onChange={(e) =>setName(e.target.value)}
          />
         
          <Input
            placeholder="Digite seu email"
            type="text"
            value={email}
            onChange={(e) =>setEmail(e.target.value)}
          />

          <Input
            placeholder="Digite sua Senha"
            type="password"
            value={password}
            onChange={(e) =>setPassword(e.target.value)}
          />
          
          <Button
            type="submit"
            loading={false}
          >
            Cadastrar
          </Button>
        </form>

        <Link href="/">
           <a className={styles.text}>Já possui uma conta? Faça login!</a>
        </Link>

      </div>
    </div>
    </>
  )
}
