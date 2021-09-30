import React from 'react'
import {Container,Row,Col} from 'reactstrap';
import Bouton from '../../shared/Bouton';
import Texte from '../../shared/Texte';
import Title from '../../shared/Title';
import PageWebSectionPackage2Stc from './PageWebSectionPackage2.stc';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

import CardPackage from '../CardPackage2';
import CardPackageWeb from '../CardPackageWeb';

function PageWebSectionPackage2(props) {
    return (
        <PageWebSectionPackage2Stc className={props.className}>
           <Container className="px-2 px-md-0">
                <Row className="py-md-5 py-2 ">
                
                <Col lg={7} className="align-self-center ">
                    <div className="" style={{position:"relative",zIndex:1}}>
                        
                        <Title niveau={1} className="">
                            Pourquoi choisir Dubani ?
                        </Title>
                        <Texte className="h5 py-2 py-md-3">
                            Nous sommes une équipe de professionnels experimentés et passionnés 
                            qui vivent et respirent la conception et le développement Web.Tous nos services sont 
                            offerts en interne et sont intégrés pour depassser les exigences de votre entreprise. 
                            Nous sommes pionniers dans la présentation de solution  de conception Web, de développement Web 
                            et d'optimisation pour les moteurs de recherche authentiques et inventives dans les services de 
                            découpage, d'adaptation, d'assimilation et de personnalisation.
                        </Texte>
                    </div>
                </Col>
                <Col lg={5} className="right d-none d-lg-block align-self-center">
                        
                </Col>
                   
                </Row>
                <Row className="package-img py-2 py-md-5 px-2 px-md-5" >
                    <Col lg={4} >
                        <CardPackageWeb title="VIVRE" texte={<Texte>
                            La conception de sites Web est notre pain quotidien depuis des années, et ,ous avons 
                            repoussé les limites de la conception de sites Web depuis lors.
                        </Texte>} />
                    </Col>
                    <Col lg={4}>
                        <CardPackageWeb title="100% INTERNE" texte={<>
                            Nous sommes une entreprise axée sur les resultats basée au Maroc et offrant fièrement des 
                            services internes depuis le premier jour. C'est ça l'externalisation zéro !
                        </>} />
                    </Col>
                    <Col lg={4}>
                        <CardPackageWeb title="RECORD DE PISTE" texte={<>
                            Après des années d'eperience et des centaines de projets de concetion et de developpement 
                            conception et développement de site Web, nous sommes fiers de notre réputation de service à la clientèle et de succès
                        </>} />
                    </Col>
                    
                </Row>
           </Container>
        </PageWebSectionPackage2Stc>
    )
}

export default PageWebSectionPackage2
