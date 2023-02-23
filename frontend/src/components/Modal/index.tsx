import { FiX } from "react-icons/fi";
import Modal from "react-modal"
import { OrderItemProps } from "../../pages/dashboard"
import styles from './styles.module.scss';

interface ModalProps{
  orders:OrderItemProps[];
  isOpen:boolean;
  close:()=>void;
  handleFinishOrder:(id:string)=>void;
}

export function ModalOrder({orders,isOpen,close,handleFinishOrder}:ModalProps){
  const customStyles = {
    content:{
      top:'50%',
      bottom:'auto',
      left:'50%',
      rigth:'auto',
      padding:'30px',
      transform:'translate(-50%,-50%)',
      backgroundColor:'#1d1d2e',
    }
  }
  
  return(
      <Modal
        isOpen={isOpen}
        onRequestClose={close}
        style={customStyles}
      >
        <button
          type="button"
          onClick={close}
          className='react-modal-button'
          style={{background:'transparent',border:0}}
        >
          <FiX color="#f34748" size={45} />
        </button>

        <div className={styles.container}>
          <h2>Detalhes do Pedido</h2>
          <span className={styles.table}>Mesa: {orders[0].order.table}</span>
          {orders.map((item)=>{
            return(
              <section key={item.id} className={styles.item}>
            <strong>{item.amount} - {item.product.name}</strong>
            <span className={styles.description}>{item.product.description}</span>
             </section>
            )
          })}
        
          <button 
            className={styles.button}
            onClick={()=>handleFinishOrder(orders[0].order_id)}
            >
            Concluir o Pedido
          </button>

        </div>
        
      </Modal>
   
  )
}