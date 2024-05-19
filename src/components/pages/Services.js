import ServiceCard from "../Service/ServiceCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Container from "../layout/Container";
import Message from '../layout/Message';
import styles from './Services.module.css';

function Service() {

    const {id} = useParams()
    const [services,setServices] = useState([])
    const [project, setProject] =useState([])
    const [message, setMessage] = useState()


    useEffect(() => {
       
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
        setProject(data)
        setServices(data.services)
        })
        .catch((err) => console.log(err))
        
    }, [id])

    useEffect(() => {
       
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setServices(data.services)
        })
        .catch((err) => console.log(err))

    }, [id])

    function removeService(id, costs) {
        const servicesUpdated = project.services.filter(
          (service) => service.id !== id,
        )
    
        const projectUpdated = project
    
        projectUpdated.services = servicesUpdated
        projectUpdated.costs = parseFloat(projectUpdated.costs) - parseFloat(costs)
    
        fetch(`http://localhost:5000/projects/${projectUpdated.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(projectUpdated),
        })
          .then((resp) => resp.json())
          .then((data) => {
            setProject(projectUpdated)
            setServices(servicesUpdated)
            setMessage('Serviço removido com sucesso!')
          })
      }

    return(
        <div className={styles.services_container} >
            <Message  msg={message} />
            <div className={styles.title_container} >
                <h1>{project.name} / Serviços</h1>
            </div>
            <Container customClass={'column'} >
                {services.length > 0 && (
                    services.map((service) => (
                        <ServiceCard
                            id={service.id}
                            name={service.name}
                            costs={service.costs}
                            description={service.description}
                            key={service.id}
                            handleRemove={removeService}
                            spanNome={"Nome: "}
                            spanCost={"Custo Total: "}
                            spanDecripton={"Descrição: "}
                        />
                    ))
                ) }
                { services.length === 0 && <p>Não há serviços cadastrados!</p> }
            </Container>
        </div>
    )
}

export default Service