import React from 'react'
import {Container,Row,Col} from 'reactstrap';
import Title from '../../shared/Title';
import PageWebSectionProjetStc from './PageWebSectionProjet.stc';

import CardClient from '../CardClient';
import Bouton from '../../shared/Bouton';

function PageWebSectionProjet(props) {
    return (
        <PageWebSectionProjetStc className={props.className}>
           <Container className="px-2 px-md-0">
                <Row className="py-md-5 py-2 ">
                
                <Col lg={7} className="align-self-center ">
                    <div className="" style={{position:"relative",zIndex:1}}>
                        <Title className="py-2 py-md-3">
                            Projet
                        </Title>
                        <Title niveau={1} className="">
                            Nos projets
                        </Title>
                        
                    </div>
                </Col>
                <Col lg={5} className="right d-none d-lg-block align-self-center">
                        
                </Col>
                   
                </Row>
                <Row className="package-img py-2 py-md-2 px-2 px-md-5" >
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
                        <CardClient className=""
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
                            <Bouton className="btn my-md-2 my-2" >
                                Visiter le site
                            </Bouton>
                        }
                        />
                    </Col>
                    <Col lg={4} className=" px-md-4 py-2 py-md-0">
                        <CardClient className=""
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
        </PageWebSectionProjetStc>
    )
}

export default PageWebSectionProjet
