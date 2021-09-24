import React from 'react'
import PageAccueilSectionProjetStc from './PageAccueilSectionProjet.stc'
import {Container,Row,Col} from 'reactstrap';
import Title from '../../shared/Title';
import Texte from '../../shared/Texte';
import CardProjet from '../CardProjet';
import Bouton from '../../shared/Bouton';
import {BsArrowRight} from 'react-icons/bs'
import { useState } from 'react';
import Chiffre from '../../shared/Chiffre';

function PageAccueilSectionProjet(props) {

    const [actif,setActif]=useState(1);

    const displyContent=(valeur)=>{
        console.log(valeur);
        setActif(valeur);
    }

    const wedo=()=>{
        return actif;
    }

    return (
        <PageAccueilSectionProjetStc className={props.className}>
            <Container className="px-0">
                <Row>
                    <Col lg={8}>
                        <Title className="py-2 py-md-3">
                            Projets
                        </Title>
                        <Title niveau={1}>
                            Augmenter le chiffre d'affaires de votre société en ameliorant votre presence sur le web!
                        </Title>
                        <Texte className="h5 py-2 py-md-3">
                            Dubani  est une agence de conseil digital. Son rôle c'est 
                            D'assurer la réalisation de tous vos projets de developpement d'applications Web et mobile.
                        </Texte>
                    </Col>
                    <Col lg={4}></Col>
                </Row>
            </Container>
            <img src="/img/sectionprojet.png" className="d-none d-lg-block" width="100%" />
           <Row className="px-0 px-md-4 block-container-chiffre">
               <Col lg={3} className="py-2 py-md-0">
                    <CardProjet texte="Experience" indice="Ans" chiffre={<Chiffre texte="5" />} />
               </Col>
               <Col lg={3} className="py-2 py-md-0">
                    <CardProjet texte="Projets realisés" indice="Projets" chiffre={<Chiffre texte="100" />} />
               </Col>
               <Col lg={3} className="py-2 py-md-0">
                    <CardProjet texte="Clients actifs" indice="Clients" chiffre={<Chiffre texte="30" />} />
               </Col>
               <Col lg={3} className="py-2 py-md-0">
                    <CardProjet texte="Pays couverts" indice="Pays" chiffre={<Chiffre texte="3" />} />
               </Col>
           </Row>
        </PageAccueilSectionProjetStc>
    )
}

export default PageAccueilSectionProjet
