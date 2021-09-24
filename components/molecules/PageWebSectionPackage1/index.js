
import React from 'react'
import PageWebSectionPackage1Stc from './PageWebSectionPackage1.stc'
import {Container,Row,Col} from 'reactstrap';
import Title from '../../shared/Title';
import Texte from '../../shared/Texte';
import CardProjet from '../CardProjet';
import Bouton from '../../shared/Bouton';
import {BsArrowRight} from 'react-icons/bs'
import { useState } from 'react';

function PageWebSectionPackage1(props) {

    const [actif,setActif]=useState(1);

    const displyContent=(valeur)=>{
        // setActif(valeur);

        if(valeur==1){

            return(
                <div className="block px-2 px-md-4 py-2 py-md-4">
                    <div className="block-image" style={{height:"250px",overflow:"hidden"}}>
                        <img src="/img/pc.jpg" width="100%" />
                    </div>
                    <div className="block-caption">
                        <Title niveau={5} className="my-2 my-md-4">
                            Analyse du traffic web
                        </Title>
                        <Texte>
                            L'analyse du traffic de votre site web vous permet de determiner s'il a attiré le nombre de prospects
                            escompté. Dubani vous aide à mettre en place les différents outils nécessaire pour analyser votre traffic Web.
                        </Texte>

                        <Bouton className="btn">
                            <BsArrowRight />
                        </Bouton>
                    </div>
                </div>
            )
        }
        if(valeur==2){

            return(
                <div className="block px-2 px-md-4 py-2 py-md-4">
                    <div className="block-image" style={{height:"250px",overflow:"hidden"}}>
                        <img src="/img/pc.jpg" width="100%" />
                    </div>
                        <div className="block-caption">
                            <Title niveau={5} className="my-2 my-md-4">
                                Analyse du traffic web 2
                            </Title>
                            <Texte>
                                L'analyse du traffic de votre site web vous permet de determiner s'il a attiré le nombre de prospects
                                escompté. Dubani vous aide à mettre en place les différents outils nécessaire pour analyser votre traffic Web.
                            </Texte>

                            <Bouton className="btn">
                                <BsArrowRight />
                            </Bouton>
                        </div>
                </div>
            )
        }
        if(valeur==3){

            return(
                <div className="block px-2 px-md-4 py-2 py-md-4">
                    <div className="block-image" style={{height:"250px",overflow:"hidden"}}>
                        <img src="/img/pc.jpg" width="100%" />
                    </div>
                        <div className="block-caption">
                            <Title niveau={5} className="my-2 my-md-4">
                                Analyse du traffic web
                            </Title>
                            <Texte>
                                L'analyse du traffic de votre site web vous permet de determiner s'il a attiré le nombre de prospects
                                escompté. Dubani vous aide à mettre en place les différents outils nécessaire pour analyser votre traffic Web.
                            </Texte>

                            <Bouton className="btn">
                                <BsArrowRight />
                            </Bouton>
                        </div>
                </div>
            )
        }
        if(valeur==4){

            return(
                <div className="block px-2 px-md-4 py-2 py-md-4">
                    <div className="block-image" style={{height:"250px",overflow:"hidden"}}>
                        <img src="/img/pc.jpg" width="100%" />
                    </div>
                        <div className="block-caption">
                            <Title niveau={5} className="my-2 my-md-4">
                                Analyse du traffic web
                            </Title>
                            <Texte>
                                L'analyse du traffic de votre site web vous permet de determiner s'il a attiré le nombre de prospects
                                escompté. Dubani vous aide à mettre en place les différents outils nécessaire pour analyser votre traffic Web.
                            </Texte>

                            <Bouton className="btn">
                                <BsArrowRight />
                            </Bouton>
                        </div>
                </div>
            )
        }
    }

    return (
        <PageWebSectionPackage1Stc className={props.className}>
            <Container className="px-0">
                <Row>
                    <Col lg={8}>
                        <Title className="py-2 py-md-3">
                            Projets
                        </Title>
                        <Title niveau={1}>
                            Nous nous occupons de votre site web, de la création à la génération de trafic.
                        </Title>
                       
                    </Col>
                    <Col lg={4}></Col>
                </Row>
            </Container>
           
            <Container className="containerChiffre px-0">
                <Row>
                   <Col md={7} className="pr-md-0">
                     {
                         displyContent(1)
                     }
                   </Col>
                   <Col md={5} className="pl-md-0">
                       <Title niveau={3} onClick={()=>displyContent(1)}  className="px-2 px-md-3 mb-0 py-2 py-md-4 h3">
                           <a>Conception de site web</a>
                       </Title>
                       <Title niveau={3} onClick={()=>displyContent(2)} className="px-2 px-md-3 mb-0 py-2 py-md-4 h3">
                           <a>Conception d'application mobile</a>
                       </Title>
                       <Title niveau={3} className="px-2 px-md-3 mb-0 py-2 py-md-4 h3">
                           <a>Marketing en ligne</a>
                       </Title>
                       <Title niveau={3} className="px-2 px-md-3 mb-0 py-2 py-md-4 h3 active">
                           <a>Analyse du traffic</a>
                       </Title>
                   </Col>
                </Row>
            </Container>
        </PageWebSectionPackage1Stc>
    )
}

export default PageWebSectionPackage1
