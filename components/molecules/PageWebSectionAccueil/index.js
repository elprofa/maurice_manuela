import React from 'react'
import {Container,Row,Col} from 'reactstrap';
import Bouton from '../../shared/Bouton';
import Texte from '../../shared/Texte';
import Title from '../../shared/Title';
import PageWebSectionAccueilStc from './PageWebSectionAccueil.stc'

function PageWebSectionAccueil() {
    return (
        <PageWebSectionAccueilStc>
           <Row className="pt-0 pt-md-5 mt-0 mt-md-5">
                <Col lg={7} className="align-self-center py-0 py-md-5 mt-0 mt-md-5">
                    <h1 className="background-overlay">Dubani agency</h1>
                    <div className="px-2 px-md-5 mx-0 mx-md-5 " style={{position:"relative",zIndex:1}}>
                        <Title className="py-2 py-md-3">
                            Dubani Agency 
                        </Title>
                        <Title niveau={1} className="">
                        Créer un site web personnalisée pour generer plus de traffic 
                        </Title>
                        <Texte className="h5 py-2 py-md-3 ">
                            Avec une agence experte dans la création du site web
                        </Texte>
                        <Bouton className="btn px-2 px-md-5 ">
                            Embauchez nous
                        </Bouton>
                    </div>
                </Col>
                <Col lg={5} className="right d-none d-lg-block py-0 py-md-5">
                    <img src="/img/web-1.png" width="90%" style={{position:"absolute",left:"0px;"}} />
                    <img src="/img/web-2.png" width="90%" style={{position:"absolute",left:"0px;"}}  />
                    <img src="/img/web-3.png" width="90%" style={{position:"absolute",left:"0px;"}}  />
                </Col>
            </Row>
        </PageWebSectionAccueilStc>
    )
}

export default PageWebSectionAccueil
