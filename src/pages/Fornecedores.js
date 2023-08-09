import styles from './Fornecedor.module.css';
function Fornecedores()
{
    return(
        <form>               
            <div>
                <label><strong>Razão Social</strong></label>
            </div>
            <div>
                <input className={styles.text_input} type="text" placeholder="Informe a razão social"/>
            </div> 
            <div>
                <label><strong>CNPJ</strong></label>
            </div>
            <div>
                <input className={styles.text_input} type="text" placeholder="Informe o CNPJ"/>
            </div> 
            <div>
                <label><strong>UF</strong></label>
            </div>
            <div>
                <input className={styles.text_input} type="tex" placeholder="Informe o UF"/>
            </div> 
            <div>
                <label><strong>Email</strong></label>
            </div>
            <div>
                <input className={styles.text_input} type="text" placeholder="Informe o email"/>
            </div> 
            <div>
                <label><strong>Nome</strong></label>
            </div>
            <div>
                <input className={styles.text_input} type="text" placeholder="Informe o nome"/>
            </div>       
        </form>
    )
}

export default Fornecedores;