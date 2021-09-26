import React from 'react'
import PageAccueilSectionServiceStc from './PageAccueilSectionService.stc'
import {Container,Row,Col} from 'reactstrap';
import Texte from '../../shared/Texte';
import Title from '../../shared/Title';
import CardService from '../CardService';
import {AiOutlineFileSearch} from 'react-icons/ai'
import {BsArrowRight} from 'react-icons/bs'
import Bouton from '../../shared/Bouton';

function PageAccueilSectionService(props) {
    return (
        <PageAccueilSectionServiceStc className={props.className}>
            <Container className="px-0">
                <Row>
                    <Col lg={5}></Col>
                    <Col lg={7}>
                        <Title className="py-2 py-md-3">
                           Nos services
                        </Title>
                        <Title niveau={1}>
                            Nous vous accompagnons dans tout vos projets
                        </Title>
                        <Texte className="h5 py-2 py-md-3">
                            Notre Equipe d'expert vous offres une gammes de services très variée.
                        </Texte>
                    </Col>
                </Row>
                <Row className="my-2 my-md-5">
                    <Col lg={3} className="mt-0 mt-md-5 px-2 px-md-4 pt-4 pt-md-5">
                        <CardService 
                            icon={<AiOutlineFileSearch/>} 
                            title={ <Title niveau={5}>
                            Marketing digital
                            </Title> }
                            texte={
                                <p>
                                    Nous mettons en place votre Stratégie marketing 
                                    en vous Assurant ainsi une meilleure Rentabilité dans vos actions
                                </p>
                            }
                        bouton={
                            <Bouton className="btn my-md-3 my-2" >
                                <BsArrowRight />
                            </Bouton>
                        }
                        />
                    </Col>
                    <Col lg={3} className="px-2 px-md-4 py-4 py-md-0">
                        <CardService className="mt-0 mt-md-5"
                            icon={<AiOutlineFileSearch/>} 
                            title={ <Title niveau={5}>
                            WEB Design
                            </Title> }
                            texte={
                                <p>
                                    Nous prenons très au sérieux votre investissement dans le site Web
                                    et le marketing en ligne de votre entreprise.En mettant l'accent sur 
                                    la fourniture à nos clients des meilleures solutions de conception de 
                                    site Web au Maroc
                                </p>
                            }
                        bouton={
                            <Bouton className="btn my-md-3 my-2" >
                                <BsArrowRight />
                            </Bouton>
                        }
                        />
                    </Col>
                    <Col lg={3} className="px-2 px-md-4 py-0 py-md-0">
                        <CardService className="mt-0 mt-md-5"
                            icon={<AiOutlineFileSearch/>} 
                            title={ <Title niveau={5}>
                           E-COMMERCE
                            </Title> }
                            texte={
                                <p>
                                    Nos concepteur de site Web professionnels utilisent les technologies
                                    de commerce électronique les plus recentes et les plus performantes pour 
                                    aider nos clients à atteindre leurs objectifs de vente en ligne,année après année.
                                </p>
                            }
                        bouton={
                            <Bouton className="btn my-md-3 my-2" >
                                <BsArrowRight />
                            </Bouton>
                        }
                        />
                    </Col>
                    <Col lg={3} className="mt-0 mt-md-5 py-4 py-md-0 px-2 px-md-4">
                        <CardService className="mt-0 mt-md-5"
                            icon={<AiOutlineFileSearch/>} 
                            title={ <Title niveau={5}>
                            Referencement
                            </Title> }
                            texte={
                                <p>
                                    Notre principale mission consiste à ameliorer le positionnement de votre site web
                                    sur les moteurs et annuaires.
                                </p>
                            }
                        bouton={
                            <Bouton className="btn my-md-3 my-2" >
                                <BsArrowRight />
                            </Bouton>
                        }
                        />
                    </Col>
                </Row>
            </Container>
        </PageAccueilSectionServiceStc>
    )
}

export default PageAccueilSectionService
