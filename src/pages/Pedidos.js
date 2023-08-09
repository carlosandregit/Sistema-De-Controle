import styles from './Fornecedor.module.css';

function Pedidos(){
    return(
        <form>               
         <div>
                <label><strong>Código do pedido</strong></label>
            </div>
            <div>
                <input className={styles.text_input} type="text" placeholder="Informe o código do pedido"/>
            </div> 
            <div>
                <label><strong>Data do pedido</strong></label>
            </div>
            <div>
                <input className={styles.text_input} type="text" placeholder="Informe a data do pedido"/>
            </div> 
            <div>
                <label><strong>Produto</strong></label>
            </div>
            <div>
                <input className={styles.text_input} type="tex" placeholder="Informe o produto"/>
            </div> 
            <div>
                <label><strong>Quantidade de produtos</strong></label>
            </div>
            <div>
                <input className={styles.text_input} type="text" placeholder="Informe a quantidade"/>
            </div> 
            <div>
                <label><strong>Fornecedor</strong></label>
            </div>
            <div>
                <input className={styles.text_input} type="text" placeholder="Informe o fornecedor"/>
            </div>              
            <div>
                <label><strong>Valor Total do pedido</strong></label>
            </div>
            <div>
                <input className={styles.text_input} type="text" placeholder="Informe o valor"/>
            </div>   
                
    </form>
    )
}

export default Pedidos;