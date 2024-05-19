import {Routes, Route} from 'react-router-dom'

import Container from "../components/layout/Container"
import Home from './../components/pages/Home';
import Company from './../components/pages/Company';
import Contact from './../components/pages/Contact';
import NewProject from './../components/pages/NewProject';
import Projects from './../components/pages/Projects';
import Project from './../components/pages/Project';
import Service from '../components/pages/Services';

function Index(){
    return(
        <Container>
            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/projects' element={ <Projects /> } />
                <Route path='/company' element={ <Company /> } />
                <Route path='/contact' element={ <Contact /> } />
                <Route path='/newproject' element={ <NewProject /> } />
                <Route path='/project/:id' element={ <Project /> } />
                <Route path='/project/:id/services' element={ <Service /> } />
            </Routes>
        </Container>
    )
}

export default Index
