import React from 'react'
import PageAccueilSectionProjetStc from './PageAccueilSectionProjet.stc'
import {Container,Row,Col} from 'reactstrap';
import Title from '../../shared/Title';
import Texte from '../../shared/Texte';
import CardProjet from '../CardProjet';

function PageAccueilSectionProjet() {
    return (
        <PageAccueilSectionProjetStc>
            <Container>
                <Row>
                    <Col lg={8}>
                        <Title className="py-2 py-md-3">
                            Projets
                        </Title>
                        <Title niveau={1}>
                            Augmentez le chiffre d'affaire De votre Société en ameliorant Votre présence sur le web !
                        </Title>
                        <Texte className="h5 py-2 py-md-3">
                            Dubani est une agence agence de conseil digital. Son role c'est D'assurer la réalisation 
                            de tous vos projets de développement d'applications Web et mobile.
                        </Texte>
                    </Col>
                    <Col lg={4}></Col>
                </Row>
            </Container>
            <div className="my-2 my-md-3 divChiffreStat" >
                <img src="/img/PageAccueilSectionProjet/image-1.jpg" width="100%"/>
            </div>
            <Container className="containerChiffre" style={{maxWidth:"1390px !important;"}}>
                <Row>
                    <Col lg={2}>
                        <CardProjet niveau={1}  className="text-center py-md-2 pt-md-4"
                        title={
                            <Title niveau={1}>5</Title>
                        }
                        texte={
                            <Texte>
                                Experience
                            </Texte>
                        }
                        />
                    </Col>
                    <Col lg={5}>
                        <CardProjet niveau={3} className="text-center py-md-2 pt-md-4"
                        title={
                            <Title niveau={1}>100</Title>
                        }
                        texte={
                            <Texte>
                                Experience
                            </Texte>
                        }
                        />
                    </Col>
                    <Col lg={3}>
                        <CardProjet niveau={2} className="text-center py-md-2 pt-md-4"
                        title={
                            <Title niveau={1}>30</Title>
                        }
                        texte={
                            <Texte>
                                Experience
                            </Texte>
                        }
                        />
                    </Col>
                    <Col lg={2}>
                        <CardProjet niveau={1} className="text-center py-md-2 pt-md-4"
                        title={
                            <Title niveau={1}>3</Title>
                        }
                        texte={
                            <Texte>
                                Experience
                            </Texte>
                        }
                        />
                    </Col>
                </Row>
            </Container>
        </PageAccueilSectionProjetStc>
    )
}

export default PageAccueilSectionProjet
