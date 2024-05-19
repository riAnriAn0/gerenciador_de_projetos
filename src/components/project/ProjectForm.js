import {useEffect, useState} from 'react'

import styles from './ProjectForm.module.css';
import Input from '../form/Input';
import Select from '../form/Select';
import Submit from '../form/Submit';


function ProjectForm({btntext , handleSubmit, projectData}){

    const [categories,setCategories] = useState([])
    const [project,setProject] = useState(projectData || {} )

    useEffect(() => {
        fetch('http://localhost:5000/categories',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((resp) => resp.json())
        .then((data) => {
            setCategories(data)
        })
        .catch((err) => console.log(err))
    }, [])

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange(e){
        setProject({...project,[e.target.name]: e.target.value })
        
    }

    function handleCategory(e){
        setProject({
            ...project,
            category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            }
        })

    }

    return(
        <form onSubmit={submit} className={styles.form} >
            <Input 
                type={'text'} 
                text={'Nome do projeto'} 
                name={'name'} 
                placeholder={'Insira o nome do projeto'} 
                handleOnchange={handleChange}
                value={project.name ? project.name : ''}
            />
            <Input 
                type={'number'} 
                text={'Orçamento do projeto'} 
                name={'budget'} 
                placeholder={'Insira o orçamento total'} 
                handleOnchange={handleChange}        
                value={project.budget ? project.budget : ''}
            />          
            <Select 
                name={'catagory_id'} 
                text={'Selecione a categoria'} 
                placeholder={'Categorias'}
                options={categories}
                handleOnchange={handleCategory}   
                value={ project.category ? project.category.id : ''}            
            />
            <Submit text={btntext} />
        </form>
    )
}

export default ProjectForm