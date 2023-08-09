import savings from '../img/savings.svg';
import styles from './Principal.module.css'

function Principal(){
    return(
        <section className={styles.home_container}>
           <h1>Bem-vindo ao <span>Sistema De Controle</span></h1>
           <p>Comece agora mesmo a ter mais controle do seu negócio.</p>
            {/* <a href="/"/> */}
            <img src={savings} alt="Sistema de Controle" srcset=""/>
        </section>
    )
}

export default Principal;