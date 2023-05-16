import Link from 'next/link';
import styles from './styles.module.scss';
import {FiLogOut} from 'react-icons/fi'
import Image from 'next/image';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';

export function Header(){
  const {signOut} = useContext(AuthContext);
  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href='/dashboard' passHref>
          <div className={styles.logoImage}>
          <Image src='/logo1.svg' alt='logo' width={250} height={80}  />
          </div>
        </Link>

        <nav className={styles.menuNav}>
        <Link href='/category' passHref>
          <a>Nova Categoria</a>
        </Link>
        <Link href='/product' passHref>
          <a>Cardápio</a>
        </Link>
        <button onClick={signOut}>
          <FiLogOut color='#FFF' size={24} />
        </button>
        </nav>
      </div>
    </header>
    
  )
}