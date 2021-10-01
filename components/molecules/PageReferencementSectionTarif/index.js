import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import Bouton from '../../shared/Bouton'
import Texte from '../../shared/Texte'
import Title from '../../shared/Title'
import ReferencementTarif from '../ReferencemetTarif'
import PageReferencementSectionTarifStc from './PageReferencementSectionTarif.stc'
import Link from 'next/link'
const plan1=[
    {
        item:"Audit de site Web"
    },
    {
        item:"Strategie de referencement personnalisée"
    },
    {
        item:"Recherche de mots clés"
    },
    {
        item:"SEO sur la page"
    },
    {
        item:"Referencement hors page"
    },
    {
        item:"Création de liens"
    },
    {
        item:"Rapports mensuels"
    }
]

function PageReferencementSectionTarif() {
    return (
        <PageReferencementSectionTarifStc>
            <Container className="px-2 px-md-0">
                <Row className="py-md-5 py-2 ">
                    <Col lg={7} className="right d-none d-lg-block align-self-center">
                            
                    </Col>
                    <Col lg={5} className="align-self-center ">
                        <div className="" style={{position:"relative",zIndex:1}}>
                            <Title className="py-2 py-md-3">
                            Tarif
                            </Title>
                            <Title niveau={1} className="">
                                Nos plans tarifaires
                            </Title>
                            <Texte className="h5 py-2 py-md-3">
                                Félicitations, vous avez lancé votre site web! Maintenant, parlons SEO, Considerer
                                 votre site Web comme la carrosserie d'une belle voiture. Bien sûr, c'est beau à regarder, 
                                 mais cela ne vous fait pas grand-chose sans un bon moteur.
                            </Texte>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <ReferencementTarif title="PLAN ESSENTIEL" 
                           subtitle=" Nous créerons une strategie de référencement personnalisée en fonction
                           de votre budget de 1000 $ / mois"

                           texte="CONFIGURATION ET OPTIMISATION DE CAMPAGNE"
                           plan={plan1}
                           tarif="1000 $"
                        />
                    </Col>
                    <Col lg={4} className="best-seller">
                            <div className="best-seller-div">
                                Best seller
                            </div>
                        <ReferencementTarif title="PLAN ESSENTIEL" 
                           subtitle=" Nous créerons une strategie de référencement personnalisée en fonction
                           de votre budget de 2500 $ / mois"

                           texte="CONFIGURATION ET OPTIMISATION DE CAMPAGNE"
                           plan={plan1}
                           tarif="2500 $"
                        />
                    </Col>
                    <Col lg={4}>
                        
                        <ReferencementTarif title="PLAN ESSENTIEL" 
                           subtitle=" Nous créerons une strategie de référencement personnalisée en fonction
                           de votre budget de 5000 $ / mois"

                           texte="CONFIGURATION ET OPTIMISATION DE CAMPAGNE"
                           plan={plan1}
                           tarif="5000 $"
                        />
                    </Col>
                    <Col lg={12} className="my-2 my-md-5 text-center">
                    <Bouton className="btn">
                        <Link href="/contact/">
                            PLANIFIER UNE CONSULTATION DES AUJOURD'HUI !
                        </Link>
                    </Bouton>
                </Col>
                </Row>
            </Container>
        </PageReferencementSectionTarifStc>
    )
}

export default PageReferencementSectionTarif
