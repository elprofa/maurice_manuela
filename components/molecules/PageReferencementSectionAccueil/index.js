import React from 'react'
import {Container,Row,Col} from 'reactstrap';
import Bouton from '../../shared/Bouton';
import Texte from '../../shared/Texte';
import Title from '../../shared/Title';
import PageReferencementSectionAccueilStc from './PageMarketingSectionAccueil.stc'

function PageReferencementSectionAccueil() {
    return (
        <PageReferencementSectionAccueilStc>
           <Row className="pt-0 pt-md-5 mt-0 mt-md-5">
                <Col lg={9} className="align-self-center py-0 py-md-5 mt-0 mt-md-5">
                    <h1 className="background-overlay">Dubani agency</h1>
                    <div className="px-2 px-md-5 mx-0 mx-md-5 " style={{position:"relative",Zindex:"1"}}>
                        <Title className="py-2 py-md-3">
                            Dubani Agency 
                        </Title>
                        <Title niveau={1} className="">
                            Si vous avez atteri sur cette page de référencement, vous avez problablement effectué 
                            une recherche Google sur Maroc SEO.
                        </Title>
                        <Texte className="h5 py-2 py-md-3 ">
                            Vous avez trouvé Dubani Agency parceque nous pratiquons 
                            ce que nous prêchons et comprenons les facteurs de classement
                            les plus importants sur Google. Ne serait-ce pas incroyable si 
                            vous pouviez vous classer n°1 sur Google ?
                            
                        </Texte>
                        <Texte className="h5 py-2 py-md-3 ">
                            Prenez un moment pour imaginer tout le travail supplémentaire que vous pourriez accomplir avec une équipe fiable de référencement au 
                             Maroc à vos côtés. Vous seriez en mesure de vous concentrer sur les parties de votre entreprise 
                             qui necessitent votre attention au fur et à mesure que vous developpez votre entreprise, tandisque nous vous obtenons les classements pour augmenter vos benefices.
                        </Texte>
                        <Bouton className="btn px-2 px-md-5 ">
                            DEMANDEZ UNE CONSULTATION SUR L'OPTIMISATION DES MOTEUR DE RECHERCHE
                        </Bouton>
                    </div>
                </Col>
                <Col lg={3} className="right d-none d-lg-block py-0 py-md-5">
                    
                </Col>
            </Row>
        </PageReferencementSectionAccueilStc>
    )
}

export default PageReferencementSectionAccueil
