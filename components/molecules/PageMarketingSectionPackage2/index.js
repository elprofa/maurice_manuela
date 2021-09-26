import React from 'react'
import {Container,Row,Col} from 'reactstrap';
import Bouton from '../../shared/Bouton';
import Texte from '../../shared/Texte';
import Title from '../../shared/Title';
import PageMarketingSectionPackage2Stc from './PageMarketingSectionPackage2.stc'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

import CardPackage from '../CardPackage2';

function PageMarketingSectionPackage2(props) {
    return (
        <PageMarketingSectionPackage2Stc className={props.className}>
           <Container className="px-2 px-md-0">
                <Row className="py-md-5 py-2 ">
                <Col lg={7} className="right d-none d-lg-block align-self-center">
                        
                </Col>
                <Col lg={5} className="align-self-center ">
                    <div className="" style={{position:"relative",zIndex:1}}>
                        <Title className="py-2 py-md-3">
                        Packgages
                        </Title>
                        <Title niveau={1} className="">
                            Que faisons nous ?
                        </Title>
                        <Texte className="h5 py-2 py-md-3">
                            Nous nous basons sur une approche directe et honnête
                        </Texte>
                    </div>
                </Col>
                   
                </Row>
                <Row className="package-img py-2 py-md-5 px-2 px-md-5" >
                    <Col lg={3} >
                        <CardPackage title="Gestion des reseaux sociaux" texte={<Texte>
                            La gestion des réseaux sociaux signifie gérer tous vos reseaux sociaux comme Facebook, Twitter,Instagram etc...
                                    de manière intégrale. Y compris des mises à jours continues sur votre marque.
                        </Texte>} />
                    </Col>
                    <Col lg={3}>
                        <CardPackage title="Gestion des publicités sur vos reseaux sociaux" texte={<>
                            Nous abritons de grands experts en publicité payante qui mettront en place de nouvelles 
                            strategies et de maximiser le ROI de vos campagnes Google Ads,Youtube, display, Google Shopping ou Amazon Ads ?.
                        </>} />
                    </Col>
                    <Col lg={3}>
                        <CardPackage title="Marketing par moteur de recherche" texte={<>
                            Outre la gestion specialisée des réseaux sociaux, nous proposons des campagnes intégrées qui incluent des outils de  réseaux numériques pour 
                            maximiser l'impact et générer plus de retour sur investissement pour les clients.
                        </>} />
                    </Col>
                    <Col lg={3}>
                        <CardPackage title="Marketing de contenu" texte={<>
                            Grâce au marketing de contenu, nous visons à créer, publier et distribuer le contenu pour un 
                            public ciblé spécifique. Ce service vise à attirer et a generer des prospects pour une entreprise et à 
                            créer une notoriété de marque.
                        </>} />
                    </Col>
                </Row>
           </Container>
        </PageMarketingSectionPackage2Stc>
    )
}

export default PageMarketingSectionPackage2
