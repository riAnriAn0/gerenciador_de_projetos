import { useState } from 'react';
import Input  from '../form/Input';
import Submit from '../form/Submit';
import styles from '../project/ProjectForm.module.css';

function ServiceForm({ btntext, projectData, handleSubmit}){
    
    const [service, setService] = useState({})

    
    const submit = (e) => {
        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
    }


    function handlechange(e){
        setService({...service, [e.target.name] : e.target.value})
    }

    return(
        <form onSubmit={submit} className={styles.form} >
            <Input
                type={'text'}
                text={"Nome do Serviço"}
                name={"name"}
                placeholder={'Insira o nome do serviço'}
                handleOnchange={handlechange}
            />
            <Input
                type={'number'}
                text={"Custo do Serviço"}
                name={"costs"}
                placeholder={'Insira o valor total'}
                handleOnchange={handlechange}
            />
            <Input
                type={'text'}
                text={"Descrição do serviço"}
                name={"description"}
                placeholder={'Descreva o serviço'}
                handleOnchange={handlechange}
            />
            <Submit text={btntext} />
        </form>
    )
}

export default ServiceForm