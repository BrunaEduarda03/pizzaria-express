import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import logoImg from '../../public/logo.svg';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <>
      <Head>
        <title>SujeitoPizza - Faça seu login</title>
      </Head>

      <div className={styles.containerCenter}>
        <Image src={logoImg} alt='logo PIzzaria'/>
      
        <div className={styles.login}>
          <form>
            <Input 
              type='text'
              placeholder='Digite seu E-mail' />
            <Input 
              type='password'
              placeholder='Digite sua Senha' />
            <Button
              type='submit'
              loading={false}>
                Acessar
            </Button>
            
          </form>
          <a className={styles.text}>Não possui conta?Cadastre-se!</a>
        </div>

      </div>
    </>
  )
}
