import { BsFillTrashFill } from 'react-icons/bs'
import styles from '../project/ProjectCard.module.css';


function ServiceCard({id ,name, costs, description , handleRemove, spanNome, spanDecripton, spanCost}){

 
    const remove = (e) => {
        e.preventDefault()
        handleRemove(id, costs)
    }
    

    return(
        <div className={`${styles.project_card}`} >
            <p>
                <h4><span>{spanNome}</span>{name}</h4>
            </p>
            <p>
                <span>{spanCost}</span>R${costs}
            </p>
            <p><span>{spanDecripton}</span>{description}</p>
            <div className={styles.project_card_actions}>
                <button onClick={remove} >
                    <BsFillTrashFill />
                    Excluir
                </button>
            </div>
        </div>
    )
}

export default ServiceCard