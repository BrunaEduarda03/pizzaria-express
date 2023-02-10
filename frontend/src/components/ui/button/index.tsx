import styles from '../button/styles.module.scss';
import {ButtonHTMLAttributes, HTMLAttributes, ReactNode} from 'react';
import {FaSpinner} from 'react-icons/fa';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  loading?: boolean,
  children:ReactNode,
}

export function Button({loading,children,...rest}:ButtonProps){
  return (
    <button 
      className={styles.button}
      disabled={loading} // desativa o botão quando true
      {...rest}
      >{loading ?(
        <FaSpinner color='#FFF' size={16} />
      ):
      (
        <a className={styles.buttonText}>{children}</a>
      )}
      
    </button>
  )
}