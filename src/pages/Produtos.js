import styles from './Fornecedor.module.css';

function Produtos(){
    return(
        <form>               
            <div>
                <label><strong>Código</strong></label>
            </div>
            <div>
                <input className={styles.text_input} type="text" placeholder="Informe código do produto"/>
            </div> 
            <div>
                <label><strong>Descrição</strong></label>
            </div>
            <div>
                <input className={styles.text_input} type="text" placeholder="Informe a descrição do produto"/>
            </div> 
            <div>
                <label><strong>Data do Cadastro</strong></label>
            </div>
            <div>
                <input className={styles.text_input} type="tex" placeholder="Informe a data do cadastro"/>
            </div> 
            <div>
                <label><strong>Valor do Produto</strong></label>
            </div>
            <div>
                <input className={styles.text_input} type="text" placeholder="Informe o valor"/>
            </div>                    
        </form>
    )
}

export default Produtos;