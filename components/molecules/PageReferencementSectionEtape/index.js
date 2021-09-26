import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import Bouton from '../../shared/Bouton'
import Title from '../../shared/Title'
import ReferencementSeo from '../ReferencemetSeo'
import PageReferencementSectionEtapeStc from './PageReferencementSectionEtape.stc'
function PageReferencementSectionEtape(props) {
    return (
        <PageReferencementSectionEtapeStc className={props.className}>
             <Container>
             <Row className="my-2 my-md-5">
                <Col lg={6} className="align-self-center mt-0 mt-md-5">
                    <div className="" style={{position:"relative",zIndex:1}}>
                       
                        <Title niveau={1} className="">
                            3 ETAPES VERS UN RANG SUPERIEUR SUR GOOGLE
                        </Title>
                    </div>
                </Col>
                <Col lg={6} className="right d-none d-lg-block py-0 py-md-5">
                    
                </Col>
            </Row>
            <Row>
                <Col lg={4} className="align-self-center">
                    <ReferencementSeo 
                    title="PLANIFIER UN APPEL" 
                        texte={
                            <>
                                Lorsque vous ne voyez pas les classements Google et 
                                le succès que vous souhaitez dans entreprise, il est temps de parler
                                 à un gourou du référencement.
                            </>
                        }
                    />
                </Col>
                <Col lg={4} className="align-self-center">
                    <ReferencementSeo 
                    title="STRATEGIE DE REFERENCEMENT PERSONNALISEE" 
                        texte={
                            <>
                                Pendant l'appel, parlez de vos objectifs.Avant de raccrocher, vous aurez les grandes ligne 
                                 d'une strategoe qui vous mènera aux meilleurs classements.
                            </>
                        }
                    />
                </Col>
                <Col lg={4} className="align-self-center">
                    <ReferencementSeo 
                    title="DES CLASSEMENTS PLUS ELEVES" 
                        texte={
                            <>
                                Commencez à générer plus de trafic et plus d'interêt pour votre 
                                entreprise. c'est 2020 et il est temps d'obtenir un retour positif 
                                sur votre investissement.
                            </>
                        }
                    />
                </Col>
                <Col lg={12} className="my-2 my-md-5 text-center">
                    <Bouton className="btn">
                        PARLEZ A UNE ENTREPRISE DE REFERENCEMENT AU MAROC
                    </Bouton>
                </Col>
            </Row>
             </Container>
        </PageReferencementSectionEtapeStc>
    )
}

export default PageReferencementSectionEtape
