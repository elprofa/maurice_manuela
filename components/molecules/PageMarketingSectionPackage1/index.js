import React from 'react'
import {Container,Row,Col} from 'reactstrap';
import Bouton from '../../shared/Bouton';
import Texte from '../../shared/Texte';
import Title from '../../shared/Title';
import PageMarketingSectionPackage1Stc from './PageMarketingSectionPackage1.stc'
import {AiOutlineCheckCircle} from 'react-icons/ai'
function PageMarketingSectionPackage1(props) {
    return (
        <PageMarketingSectionPackage1Stc className={props.className}>
           <Container className="px-2 px-md-0">
                <Row className="py-md-5 py-2 ">
                    <Col lg={7} className="align-self-center ">
                        <div className="" style={{position:"relative",zIndex:1}}>
                            <Title className="py-2 py-md-3">
                            Packgage
                            </Title>
                            <Title niveau={1} className="">
                                Pourquoi choisir dubani agency ?
                            </Title>
                            
                        </div>
                    </Col>
                    <Col lg={5} className="right d-none d-lg-block align-self-center">
                        
                    </Col>
                </Row>
                <Row className="package-img py-2 py-md-5 px-2 px-md-5">
                    <Col lg={5}>
                        <img src="/img/img3.png" className="d-none d-lg-block" width="100%" />
                    </Col>
                    <Col lg={7}>
                        <ul className="package-ul px-0">
                            <li>
                                <span >
                                    <AiOutlineCheckCircle />
                                </span>
                                <span>Nous proposons des services complets</span>
                            </li>
                            <li >
                                <span>
                                    <AiOutlineCheckCircle />
                                </span>
                                <span>Des stratégie de marketing numérique éprouvées qui donnent des resultats incroyables</span>
                            </li>
                            <li >
                                <span>
                                    <AiOutlineCheckCircle />
                                </span>
                                <span>Campagnes marketing multicanales </span>
                            </li>
                            <li >
                                <span>
                                    <AiOutlineCheckCircle />
                                </span>
                                <span>Axé sur les resultats et focalisé sur le retour sur investissement</span>
                            </li>
                            <li >
                                <span>
                                    <AiOutlineCheckCircle />
                                </span>
                                <span>Un tarif très concurrentiel</span>
                            </li>
                        </ul>
                    </Col>
                </Row>
           </Container>
        </PageMarketingSectionPackage1Stc>
    )
}

export default PageMarketingSectionPackage1
