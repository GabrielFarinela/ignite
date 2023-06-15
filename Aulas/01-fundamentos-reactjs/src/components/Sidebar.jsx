import styles from '../components/Sidebar.module.css'
import { PencilLine } from 'phosphor-react'

function Sidebar(){
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1508867743401-21ad68d105b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60"/>
      
      <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/GabrielFarinela.png" alt=""/>

        <strong>Gabriel Farinela</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={18}/>
          Editar o seu perfil
        </a>
      </footer>
    </aside>
  )
}

export default Sidebar;