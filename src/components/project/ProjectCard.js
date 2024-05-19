import { BsFillTrashFill, BsPencil } from 'react-icons/bs'
import styles from './ProjectCard.module.css'
import { Link } from 'react-router-dom'

function ProjectCart({ id, name, budget, category, handleRemove, handleService }){

    const remove = (e) =>{
        e.preventDefault()
        handleRemove(id)
    }

    const servicos = (e) => {
        e.preventDefault()
        handleService(id)
    }

    return(
        <div className={styles.project_card} >
            <h4 onClick={servicos}>{name}</h4>
            <p>
                <span>Orçamento:</span> R${budget}
            </p>
            <p className={styles.category_text} >
                <span className={`${styles[category.toLowerCase()]}`} ></span> {category}
            </p>
            <div className={styles.project_card_actions} >
                <Link to ={`/project/${id}`} >
                    <BsPencil /> Editar
                </Link>
                <button onClick={remove} >
                    <BsFillTrashFill /> Excluir
                </button>
            </div>
        </div>
    )
}

export default ProjectCart