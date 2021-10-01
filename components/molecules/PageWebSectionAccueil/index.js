import React from 'react'
import {Container,Row,Col} from 'reactstrap';
import Bouton from '../../shared/Bouton';
import Texte from '../../shared/Texte';
import Title from '../../shared/Title';
import PageWebSectionAccueilStc from './PageWebSectionAccueil.stc'


function PageWebSectionAccueil() {

    return (
        <PageWebSectionAccueilStc>
          <Container>
          <Row className="pt-0 pt-md-0 mt-0 mt-md-0">
                <Col lg={7} className="align-self-center py-0 py-md-5 mt-0 mt-md-5">
                    <h1 className="background-overlay">Dubani agency</h1>
                    <div className="" style={{position:"relative",zIndex:1}}>
                        <Title className="py-2 py-md-3">
                            Web design
                        </Title>
                        <Title niveau={1} className="">
                            Créer un site web personnalisée pour generer plus de traffic 
                        </Title>
                        <Texte className="h5 py-2 py-md-3 ">
                            Nous sommes un groupe de passionnés intrépides qui aiment relever des défis! Avec la collaboration à la 
                            base, nous sommes prêts à travailler avec vous pour concevoir des solutions Web gagnantes. Nous excellons à ecouter et à repondre à vos 
                            besoins, Pour vous offrir une collaboration de concetion Web reussie. Notre équipe d'expert de Casablanca est dotée des connaissances, de l'experience 
                            et de la passion nécessaires pour faire le travail et est prête à fournir une large gamme de services 
                            de conception et de développement de sites Web.
                        </Texte>
                        <Bouton className="btn px-2 px-md-5 ">
                            Embauchez nous
                        </Bouton>
                    </div>
                </Col>
                <Col lg={5} className="right d-none d-lg-block py-0 py-md-5 ">
                    <img src="/img/web-1.png" width="100%" style={{position:"absolute",left:"0px",top:"100px"}} />
                    <img src="/img/web-2.png" width="100%" style={{position:"absolute",left:"0px",top:"100px"}}  />
                    <img src="/img/web-3.png" width="100%" style={{position:"absolute",left:"0px",top:"100px"}}  />
                </Col>
            </Row>
          </Container>
        </PageWebSectionAccueilStc>
    )
}

export default PageWebSectionAccueil
