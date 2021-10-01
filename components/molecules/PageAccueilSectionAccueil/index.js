import React from 'react'
import {Container,Row,Col} from 'reactstrap';
import Bouton from '../../shared/Bouton';
import Texte from '../../shared/Texte';
import Title from '../../shared/Title';
import PageAccueilSectionAccueilStc from './PageAccueilSectionAccueil.stc'
import Link from 'next/link'

function PageAccueilSectionAccueil() {
    return (
        <PageAccueilSectionAccueilStc>
           <Row className="">
                <Col lg={7} className="align-self-center ">
                    <h1 className="background-overlay">Dubani agency</h1>
                    <div className="px-2 px-md-5 mx-0 mx-md-5 px-0 px-md-5" style={{position:"relative",zIndex:1}}>
                        <Title className="py-2 py-md-3">
                            Dubani Agency 
                        </Title>
                        <Title niveau={1} className="">
                            Créer un site web personnalisée pour générer plus de trafic 
                        </Title>
                        <Texte className="h5 py-2 py-md-3 ">
                            Avec une agence experte dans la création de site web
                        </Texte>
                        <Bouton className="btn ">
                            <Link href="/contact/" className="px-2 px-md-5 ">
                                Embauchez nous
                            </Link>
                        </Bouton>
                    </div>
                </Col>
                <Col lg={5} className="right d-none d-lg-block align-self-center">
                    
                </Col>
            </Row>
        </PageAccueilSectionAccueilStc>
    )
}

export default PageAccueilSectionAccueil
