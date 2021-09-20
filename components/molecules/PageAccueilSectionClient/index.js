import React from 'react'
import PageAccueilSectionClientStc from './PageAccueilSectionClient.stc'
import {
    Container,
    Row,
    Col
}
from 'reactstrap'
import Title from '../../shared/Title'
import Texte from '../../shared/Texte'
import CardClient from '../CardClient'
import Bouton from '../../shared/Bouton'

function PageAccueilSectionClient() {
    return (
        <PageAccueilSectionClientStc>
            <Container>
            <Row className="py-0 py-md-5">
                <Col lg={6} className="right">
                </Col>
               <Col lg={6}>
                    <Title className="py-2 py-md-3">
                        Clients
                    </Title>
                    <Title niveau={1}>
                        Ils nous ont fait confiance et n'ont pas été déçus !
                    </Title>
                    <Texte className="h5 py-2 py-md-3">
                        Chez Dubani nous travaillons avec nos clients,pour nos clients. 
                        Nous leur garantissons ainsi une satisfaction effective.

                    </Texte>
               </Col>
            </Row>
            <Row className="my-2 my-md-5">
                    <Col lg={4} className="px-md-4 py-2 py-md-0">
                        <CardClient 
                            image="/img/PageAccueilSectionClient/image-1.jpg" 
                            title={ <Title niveau={5}>
                            <img src="/img/logo.svg" height="20" /> 
                            <span style={{marginLeft:"10px"}}>
                                GSN AUTO
                            </span>
                            </Title> }
                            texte={
                                <p>
                                    Web Design,UI/UX
                                </p>
                            }
                        bouton={
                            <Bouton className="btn my-md-3 my-2" >
                                Visiter le site
                            </Bouton>
                        }
                        />
                    </Col>
                    <Col lg={4} className="px-md-4 py-2 py-md-0">
                        <CardClient className="mt-0 mt-md-5"
                            image="/img/PageAccueilSectionClient/image-2.jpg" 
                            title={ <Title niveau={5}>
                            <img src="/img/logo.svg" height="20" /> 
                            <span style={{marginLeft:"10px"}}>
                                WINTECH
                            </span>
                            </Title> }
                            texte={
                                <p>
                                    Web Design,UI/UX
                                </p>
                            }
                        bouton={
                            <Bouton className="btn my-md-3 my-2" >
                                Visiter le site
                            </Bouton>
                        }
                        />
                    </Col>
                    <Col lg={4} className="mt-0 mt-md-5 px-md-4 py-2 py-md-0">
                        <CardClient className="mt-0 mt-md-5"
                            image="/img/PageAccueilSectionClient/image-3.jpg" 
                            title={ <Title niveau={5}>
                            <img src="/img/logo.svg" height="20" /> 
                            <span style={{marginLeft:"10px"}}>
                                XPATSA
                            </span>
                            </Title> }
                            texte={
                                <p>
                                    Web Design,UI/UX
                                </p>
                            }
                        bouton={
                            <Bouton className="btn my-md-3 my-2" >
                                Visiter le site
                            </Bouton>
                        }
                        />
                    </Col>
                </Row>
            </Container>
        </PageAccueilSectionClientStc>
    )
}

export default PageAccueilSectionClient
