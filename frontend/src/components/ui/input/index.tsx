import styles from '../input/styles.module.scss';
import {HtmlHTMLAttributes, InputHTMLAttributes,TextareaHTMLAttributes} from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}


export function Input({...rest}:InputProps){
  return ( 
    <input className={styles.input} {...rest}/>
  )
}